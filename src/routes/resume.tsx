import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Résumé — Emma" },
      { name: "description", content: "Emma's résumé — experience, education, and selected clients." },
      { property: "og:title", content: "Résumé — Emma" },
      { property: "og:description", content: "Experience, education, and selected clients." },
    ],
  }),
  component: Resume,
});

const RESUME_PATH = "/emma-resume.pdf";

function Resume() {
  return (
    <div className="mx-auto max-w-5xl px-6 pt-20 pb-12 sm:pt-28">
      <header className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--pink-ink)]">
            Résumé
          </p>
          <h1 className="mt-3 text-5xl sm:text-6xl">The long version.</h1>
          <p className="mt-4 max-w-xl text-foreground/80">
            A full record of experience, education, and selected clients.
          </p>
        </div>
        <a
          href={RESUME_PATH}
          download
          className="inline-flex items-center justify-center self-start rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background"
        >
          Download PDF ↓
        </a>
      </header>

      <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-card">
        <object
          data={RESUME_PATH}
          type="application/pdf"
          className="h-[80vh] w-full"
        >
          <div className="flex flex-col items-center justify-center gap-4 p-16 text-center">
            <p className="text-lg text-foreground/80">
              Your browser can't preview PDFs inline.
            </p>
            <a
              href={RESUME_PATH}
              className="rounded-full bg-foreground px-5 py-2 text-sm font-semibold text-background"
            >
              Open résumé in a new tab
            </a>
          </div>
        </object>
      </div>

      <p className="mt-4 text-xs text-muted-foreground">
        Note: place the PDF at <code className="rounded bg-secondary px-1.5 py-0.5">public/emma-resume.pdf</code> for the preview to load.
      </p>
    </div>
  );
}
