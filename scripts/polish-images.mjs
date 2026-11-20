#!/usr/bin/env bun
/**
 * polish-images.mjs — clean up the portfolio's raster artwork.
 *
 * The generated pieces come out of the model with heavy film grain and a
 * slightly hazy, low-contrast midtone. This runs the standard restoration
 * chain on them:
 *
 *   1. resample  — Lanczos3 down to the largest size the layout actually uses
 *   2. denoise   — 3x3 median (kills salt-and-pepper grain), then a small
 *                  gaussian to soften the clumpy grain a median leaves behind
 *   3. sharpen   — mild unsharp mask to put the edges back after the blur
 *   4. tone      — a whisper of saturation and a black-point lift
 *   5. encode    — WebP q84 / JPEG q86 (mozjpeg, 4:4:4) with metadata stripped
 *
 * Originals are copied to src/assets/.originals the first time, so every run
 * starts from the clean source and `--restore` always works.
 *
 * Usage
 *   bun scripts/polish-images.mjs                     # clean everything, in place
 *   bun scripts/polish-images.mjs --out .preview      # write elsewhere, compare first
 *   bun scripts/polish-images.mjs --only now-audit.jpg --strength 3
 *   bun scripts/polish-images.mjs --compare story-archive.jpg --out .preview
 *   bun scripts/polish-images.mjs --restore           # put the originals back
 *
 * Flags
 *   --strength <0-3>   how hard to denoise/sharpen (default 1.6; 0 = tone only)
 *   --width <px>       max width to keep (default 1600, never enlarges)
 *   --quality <1-100>  encoder quality (default 84)
 *   --only <a,b>       restrict to these filenames
 *   --out <dir>        output directory instead of writing in place
 *   --compare <file>   also write <out>/_compare-<file>.jpg (before | after)
 *   --restore          copy the backed-up originals back over the assets
 *   --list             print the files this script touches
 */
import sharp from "sharp";
import { access, copyFile, mkdir, readdir, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const ASSETS = path.join(ROOT, "src/assets");
const BACKUP = path.join(ASSETS, ".originals");

/** Artwork that lives behind or beside content. Charts and the headshot are
 *  deliberately excluded: their grain is text and faces, not texture. */
const TARGETS = [
  "hero-wash.webp",
  "section-band.webp",
  "contact-ornament.webp",
  "paper-tile.webp",
  "now-governance.jpg",
  "now-audit.jpg",
  "story-archive.jpg",
  "fieldnotes-ireland.jpg",
  "project-sentiment-collage.jpg",
  "project-manuscript-collage.jpg",
];

const args = process.argv.slice(2);
const flag = (name, fallback) => {
  const i = args.indexOf(`--${name}`);
  if (i === -1) return fallback;
  const next = args[i + 1];
  return next && !next.startsWith("--") ? next : true;
};

if (args.includes("--help") || args.includes("-h")) {
  console.log(
    [
      "bun scripts/polish-images.mjs [--strength 1.6] [--width 1600] [--quality 84]",
      "                              [--only a.jpg,b.jpg] [--out dir] [--compare file]",
      "                              [--restore] [--list]",
    ].join("\n"),
  );
  process.exit(0);
}

const strength = Number(flag("strength", 1.6));
const maxWidth = Number(flag("width", 1600));
const quality = Number(flag("quality", 84));
const outDir = flag("out", null);
const compareName = flag("compare", null);
const only = flag("only", null);
const restoring = Boolean(flag("restore", false));

const exists = async (p) => {
  try {
    await access(p);
    return true;
  } catch {
    return false;
  }
};

const files = only
  ? String(only)
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean)
  : TARGETS;

if (flag("list", false)) {
  console.log(files.join("\n"));
  process.exit(0);
}

await mkdir(BACKUP, { recursive: true });

if (restoring) {
  let restored = 0;
  for (const file of await readdir(BACKUP)) {
    await copyFile(path.join(BACKUP, file), path.join(ASSETS, file));
    restored += 1;
  }
  console.log(`restored ${restored} file(s) from src/assets/.originals`);
  process.exit(0);
}

if (outDir) await mkdir(path.resolve(ROOT, outDir), { recursive: true });

/** Tone + grain pipeline, applied after any resample. */
function restore(pipeline, s) {
  if (s > 0) {
    pipeline = pipeline
      // 3x3 median: the single most effective grain killer for photographic noise
      .median(3)
      // a small blur softens the blotchy grain a median leaves behind
      .blur(0.28 * s)
      // put the edges back: mild gain, tight radius, no big halos
      .sharpen({ sigma: 0.6 + 0.15 * s, m1: 0.4, m2: 1.15 });
  }
  return pipeline
    .modulate({ saturation: 1 + 0.02 * s, brightness: 1 + 0.004 * s })
    .linear(1 + 0.012 * s, -1.5 * s);
}

const before = async (file) => {
  const src = (await exists(path.join(BACKUP, file))) ? path.join(BACKUP, file) : path.join(ASSETS, file);
  return src;
};

const rows = [];
for (const file of files) {
  const original = path.join(ASSETS, file);
  if (!(await exists(original))) {
    console.warn(`skip  ${file} (not found)`);
    continue;
  }
  // snapshot the untouched file once so reruns are idempotent
  const backup = path.join(BACKUP, file);
  if (!(await exists(backup))) await copyFile(original, backup);

  const source = await before(file);
  const meta = await sharp(source).metadata();
  const target = outDir ? path.join(path.resolve(ROOT, outDir), file) : original;
  const sizeBefore = (await stat(source)).size;

  let pipeline = sharp(source).rotate();
  const resized = Boolean(maxWidth) && meta.width > maxWidth;
  if (resized) {
    pipeline = pipeline.resize({ width: maxWidth, kernel: "lanczos3", withoutEnlargement: true });
  }
  pipeline = restore(pipeline, strength);
  pipeline = pipeline.withMetadata(false);

  const ext = path.extname(file).toLowerCase();
  pipeline =
    ext === ".webp"
      ? pipeline.webp({ quality, effort: 6, smartSubsample: true })
      : pipeline.jpeg({ quality, mozjpeg: true, chromaSubsampling: "4:4:4" });

  const info = await pipeline.toFile(target);
  const sizeAfter = (await stat(target)).size;
  rows.push({
    file,
    from: `${meta.width}x${meta.height}`,
    to: `${info.width}x${info.height}`,
    size: `${(sizeBefore / 1024).toFixed(0)}→${(sizeAfter / 1024).toFixed(0)} KB`,
  });
  console.log(
    `polish ${file.padEnd(34)} ${rows.at(-1).from} → ${rows.at(-1).to}  ${rows.at(-1).size}${outDir ? `  → ${outDir}` : ""}`,
  );
}

/** Before | after strip so the change can be judged without a build. */
if (compareName) {
  const name = String(compareName);
  const source = await before(name);
  const dir = outDir ? path.resolve(ROOT, outDir) : path.join(ROOT, ".preview");
  await mkdir(dir, { recursive: true });
  const afterPath = path.join(dir, name);

  let after = sharp(afterPath);
  if (!(await exists(afterPath))) {
    let p = sharp(source);
    const ext = path.extname(name).toLowerCase();
    p = restore(p, strength).withMetadata(false);
    after = sharp(
      await (ext === ".webp"
        ? p.webp({ quality, effort: 6 }).toBuffer()
        : p.jpeg({ quality, mozjpeg: true, chromaSubsampling: "4:4:4" }).toBuffer()),
    );
  }

  const box = { width: 640, height: 400 };
  const beforeBuf = await sharp(source)
    .resize({ ...box, fit: "cover" })
    .png()
    .toBuffer();
  const afterBuf = await sharp(await after.toBuffer())
    .resize({ ...box, fit: "cover" })
    .png()
    .toBuffer();

  await sharp({ create: { width: box.width * 2 + 8, height: box.height, channels: 3, background: "#fbf5ef" } })
    .composite([
      { input: beforeBuf, left: 0, top: 0 },
      { input: afterBuf, left: box.width + 8, top: 0 },
    ])
    .jpeg({ quality: 92 })
    .toFile(path.join(dir, `_compare-${path.parse(name).name}.jpg`));

  console.log(`compare → ${path.relative(ROOT, path.join(dir, `_compare-${path.parse(name).name}.jpg`))}  (left: original, right: polished)`);
}
