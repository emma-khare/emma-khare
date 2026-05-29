import { createFileRoute } from "@tanstack/react-router";
import { FadeIn, PageWrap, WordReveal } from "@/components/Motion";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Emma Khare" },
      { name: "description", content: "Get in touch with Emma Khare — UX researcher." },
      { property: "og:title", content: "Contact — Emma Khare" },
      { property: "og:description", content: "Get in touch with Emma Khare." },
    ],
  }),
  component: Contact,
});

const LINKS = [
  { label: "Email", value: "emma.khare@gmail.com", href: "mailto:emma.khare@gmail.com" },
  { label: "LinkedIn", value: "linkedin.com/in/emmakhare", href: "https://www.linkedin.com/in/emmakhare/" },
  { label: "Résumé", value: "Download PDF", href: "/emma-khare-resume.pdf" },
];

function Contact() {
  return (
    <PageWrap>
      <section className="relative overflow-hidden">
        <div className="blob blob-pink h-[420px] w-[420px] -top-20 right-10" />
        <div className="blob blob-blue h-[340px] w-[340px] top-72 -left-10" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-12 pt-24 pb-20 lg:pt-32">
          <p className="label-mono mb-6">Contact</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tight max-w-[16ch] text-balance">
            <WordReveal text="Say hello. I read everything." highlight="hello" />
          </h1>
          <FadeIn delay={0.4} className="mt-8 max-w-xl">
            <p className="text-lg text-foreground/80 leading-relaxed text-pretty">
              Best for project inquiries, research collaborations, and roles in
              conversational AI, consumer hardware, or community-centered programs.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-12 py-12 border-t border-hairline">
        <ul className="divide-y divide-hairline">
          {LINKS.map((l) => (
            <li key={l.label}>
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
