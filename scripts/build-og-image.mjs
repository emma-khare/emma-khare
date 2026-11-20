#!/usr/bin/env bun
/**
 * build-og-image.mjs — regenerate public/og.png (1200×630 share card)
 *
 * The card has to carry the current positioning, so it is rendered from HTML
 * rather than kept as a stale export. Chrome draws it at exactly 1200×630.
 *
 *   bun scripts/build-og-image.mjs
 */
import { execFile } from "node:child_process";
import { mkdtemp, rm, writeFile, stat } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { promisify } from "node:util";

const run = promisify(execFile);
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT = path.join(ROOT, "public/og.png");

const CHROME =
  process.env.CHROME_PATH ??
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,600;1,9..144,500;1,9..144,600&display=swap"
    />
    <style>
      * { box-sizing: border-box; }
      html, body { margin: 0; width: 1200px; height: 630px; }
      body {
        background:
          radial-gradient(80% 60% at 88% -8%, #f3dee2 0%, rgba(243, 222, 226, 0) 58%),
          radial-gradient(70% 55% at 2% 4%, #f6ecd3 0%, rgba(246, 236, 211, 0) 55%),
          linear-gradient(180deg, #fbf5ef 0%, #f4e9e1 100%);
        color: #3a1c25;
        font-family: "Fraunces", Georgia, serif;
      }
      .frame {
        position: absolute;
        inset: 34px;
        padding: 60px 68px 52px;
        border: 1px solid rgba(195, 154, 60, 0.6);
        display: flex;
        flex-direction: column;
      }
      .eyebrow {
        margin: 0;
        font-family: "DM Mono", Menlo, monospace;
        font-size: 15px;
        font-weight: 500;
        letter-spacing: 0.26em;
        text-transform: uppercase;
        color: #98203f;
      }
      h1 {
        margin: 26px 0 0;
        font-size: 92px;
        font-weight: 600;
        letter-spacing: -0.02em;
        line-height: 1;
      }
      .rule {
        margin: 30px 0 0;
        height: 1px;
        width: 260px;
        background: linear-gradient(90deg, #c39a3c, rgba(195, 154, 60, 0));
      }
      .tagline {
        margin: 30px 0 0;
        font-size: 34px;
        font-style: italic;
        font-weight: 500;
        line-height: 1.2;
        color: #98203f;
      }
      .sub {
        margin: 16px 0 0;
        font-family: "Spectral", Georgia, serif;
        font-size: 22px;
        color: #5d3b45;
      }
      .foot {
        margin-top: auto;
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        font-family: "DM Mono", Menlo, monospace;
        font-size: 13px;
        letter-spacing: 0.14em;
        text-transform: uppercase;
        color: #6b4550;
      }
      .foot .url { color: #98203f; }
    </style>
  </head>
  <body>
    <div class="frame">
      <p class="eyebrow">AI Evaluation &amp; Measurement</p>
      <h1>Emma Khare</h1>
      <div class="rule"></div>
      <p class="tagline">Measurement validity, LLM judges,<br />and language data.</p>
      <p class="sub">Study Coordinator at Apple &middot; San Jose, CA</p>
      <div class="foot">
        <span>Research portfolio</span>
        <span class="url">emma-khare-portfolio.vercel.app</span>
      </div>
    </div>
  </body>
</html>`;

const dir = await mkdtemp(path.join(tmpdir(), "og-image-"));
try {
  const page = path.join(dir, "og.html");
  await writeFile(page, html, "utf8");
  await run(CHROME, [
    "--headless=new",
    "--disable-gpu",
    "--hide-scrollbars",
    "--force-device-scale-factor=1",
    "--window-size=1200,630",
    "--virtual-time-budget=6000",
    `--user-data-dir=${path.join(dir, "profile")}`,
    `--screenshot=${OUT}`,
    pathToFileURL(page).href,
  ]);
} finally {
  await rm(dir, { recursive: true, force: true });
}

const { size } = await stat(OUT);
console.log(`wrote public/og.png (${Math.round(size / 1024)} KB)`);
