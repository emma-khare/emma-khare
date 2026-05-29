import { createFileRoute } from "@tanstack/react-router";
import { FadeIn, PageWrap } from "@/components/Motion";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Résumé — Emma Khare" },
      { name: "description", content: "Emma Khare — UX Researcher résumé." },
      { property: "og:title", content: "Résumé — Emma Khare" },
      { property: "og:description", content: "Emma Khare — UX Researcher résumé." },
    ],
  }),
  component: Resume,
});

function Resume() {
  return (
    <PageWrap>
      <section className="mx-auto max-w-7xl px-6 lg:px-12 pt-24 pb-12 lg:pt-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <FadeIn>
            <p className="label-mono mb-6">Résumé</p>
            <h1 className="font-display text-5xl md:text-7xl tracking-tight max-w-[16ch] text-balance">
              The <span className="gradient-ink">long form</span>.
            </h1>
          </FadeIn>
          <FadeIn delay={0.2} className="flex gap-3">
            <a
              href="/emma-khare-resume.pdf"
              download
              className="rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium"
            >
              Download PDF ↓
            </a>
            <a
              href="/emma-khare-resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-foreground/80 px-5 py-2.5 text-sm font-medium hover:bg-foreground hover:text-background transition-colors"
            >
              Open in tab ↗
            </a>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-12 pb-24">
        <FadeIn delay={0.15}>
          <div className="relative rounded-2xl overflow-hidden border border-hairline bg-surface shadow-[0_30px_60px_-30px_rgba(0,0,0,0.25)]">
            <object
              data="/emma-khare-resume.pdf"
              type="application/pdf"
              className="w-full h-[1100px] bg-surface"
            >
              <div className="p-12 text-center">
                <p className="text-foreground/80">Your browser can't preview PDFs.</p>
                <a href="/emma-khare-resume.pdf" className="link-underline mt-3 inline-block">
                  Download instead →
                </a>
              </div>
            </object>
          </div>
        </FadeIn>
      </section>
    </PageWrap>
  );
}
