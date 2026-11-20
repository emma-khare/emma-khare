import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { FadeIn, PageWrap, WordReveal } from "@/components/Motion";
import contactOrnament from "@/assets/contact-ornament.webp";

const EMAIL = "emmakhare24@gmail.com";

function EmailRow() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };
  return (
    <li className="lift-row">
      <button
        type="button"
        onClick={copy}
        aria-label={`Copy email address ${EMAIL}`}
        className="group flex w-full flex-wrap items-baseline justify-between gap-x-8 gap-y-2 py-8 md:py-10 text-left"
      >
        <span className="label-mono shrink-0 w-28">Email</span>
        <span className="flex-1 font-display text-3xl md:text-5xl tracking-tight group-hover:gradient-ink transition-all text-balance">
          {EMAIL}
        </span>
        <span className="label-mono shrink-0 whitespace-nowrap text-pink-ink">
          {copied ? "Copied ✓" : "Click to copy"}
        </span>
      </button>
    </li>
  );
}

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact, Emma Khare" },
      {
        name: "description",
        content: "Get in touch with Emma Khare, AI evaluation and measurement researcher.",
      },
      { property: "og:title", content: "Contact, Emma Khare" },
      { property: "og:description", content: "Get in touch with Emma Khare." },
    ],
  }),
  component: Contact,
});

const LINKS = [
  { label: "LinkedIn", value: "linkedin.com/in/emma-khare", href: "https://www.linkedin.com/in/emma-khare/" },
  { label: "GitHub", value: "github.com/emma-khare", href: "https://github.com/emma-khare" },
  { label: "Résumé", value: "Download PDF", href: "/emma-khare-resume.pdf" },
];

function Contact() {
  return (
    <PageWrap>
      <section className="relative overflow-clip">
        <div className="blob blob-pink h-[420px] w-[420px] -top-20 right-10" />
        <div className="blob blob-blue h-[340px] w-[340px] top-72 -left-10" />

        <div aria-hidden className="section-ground ground-ink">
          <img src={contactOrnament} alt="" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-12 pt-24 pb-20 lg:pt-32">
          <p className="label-mono mb-6">Contact</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tight max-w-[16ch] text-balance">
            <WordReveal text={"Say hello.\nI read everything."} highlight="hello" />
          </h1>
          <FadeIn delay={0.4} className="mt-8 max-w-xl">
            <p className="text-lg text-foreground/80 leading-relaxed text-pretty">
              Best for project inquiries, research collaborations, and roles in AI evaluation and
              measurement, conversational AI, or language and culture work.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-12 py-12 border-t border-hairline">
        <ul className="divide-y divide-hairline">
          <EmailRow />
          {LINKS.map((l) => (
            <li key={l.label} className="lift-row">
              <a
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex items-baseline justify-between gap-8 py-8 md:py-10"
              >
                <span className="label-mono shrink-0 w-28">{l.label}</span>
                <span className="flex-1 font-display text-3xl md:text-5xl tracking-tight group-hover:gradient-ink transition-all text-balance">
                  {l.value}
                </span>
                <span className="text-foreground/60 transition-transform group-hover:translate-x-2">→</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </PageWrap>
  );
}
