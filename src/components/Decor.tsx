import { type ReactNode } from "react";

type BlobColor = "coral" | "blue" | "pink" | "peach";

const blobClass: Record<BlobColor, string> = {
  coral: "blob blob-coral grain",
  blue: "blob blob-blue grain",
  pink: "blob blob-pink grain",
  peach: "blob blob-peach grain",
};

export function Blob({
  color,
  className = "",
}: {
  color: BlobColor;
  className?: string;
}) {
  return <div aria-hidden className={`${blobClass[color]} ${className}`} />;
}

/** macOS-style window frame used throughout the portfolio. */
export function Window({
  title,
  children,
  className = "",
}: {
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`window-chrome relative ${className}`}>
      <div className="flex items-center justify-between border-b-[1.5px] border-foreground px-3 py-2">
        <div className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full border-[1.5px] border-foreground" />
          <span className="h-2.5 w-2.5 rounded-full border-[1.5px] border-foreground" />
          <span className="h-2.5 w-2.5 rounded-full border-[1.5px] border-foreground" />
        </div>
        {title && (
          <span className="font-display text-sm text-foreground">
            {title.toLowerCase()}
          </span>
        )}
        <span className="h-2.5 w-6" aria-hidden />
      </div>
      <div className="p-6 sm:p-8">{children}</div>
    </div>
  );
}

/** Drawn-style search pill used as a section header. */
export function SearchPill({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4 rounded-full border-[1.5px] border-foreground bg-card px-6 py-3 shadow-[4px_4px_0_0_var(--foreground)]">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-6 w-6 text-foreground shrink-0" aria-hidden>
        <circle cx="11" cy="11" r="7" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
      <span className="font-display text-2xl leading-none text-foreground sm:text-3xl">
        {label.toLowerCase()}
      </span>
    </div>
  );
}

/** Drawn right-curving arrow used between blob columns. */
export function CurvedArrow({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`h-10 w-10 text-foreground ${className}`}
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M6 28 C 12 10, 24 10, 32 22" />
      <path d="M26 18 L 33 22 L 30 30" />
    </svg>
  );
}
