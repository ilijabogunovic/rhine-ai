// News categories each carry their own colour, muted to sit with the carmine and rosy beige.
const CATEGORY_CLASS: Record<string, string> = {
  Publication: "bg-[var(--cat-publication-bg)] text-[var(--cat-publication)]",
  Preprint: "bg-[var(--cat-preprint-bg)] text-[var(--cat-preprint)]",
  Announcement: "bg-[var(--cat-announcement-bg)] text-[var(--cat-announcement)]",
  Conference: "bg-[var(--cat-conference-bg)] text-[var(--cat-conference)]",
  Opportunity: "bg-[var(--cat-opportunity-bg)] text-[var(--cat-opportunity)]",
};

/** A small coloured tag naming a news category. */
export const CategoryTag = ({ type, className = "" }: { type: string; className?: string }) => (
  <span
    className={`inline-block px-2 py-0.5 text-sm font-medium leading-snug ${
      CATEGORY_CLASS[type] ?? "bg-paper-2 text-ink"
    } ${className}`}
  >
    {type}
  </span>
);

/** A small carmine square used as a list bullet. */
export const Bullet = ({ className = "" }: { className?: string }) => (
  <span aria-hidden="true" className={`inline-block h-[0.4em] w-[0.4em] shrink-0 translate-y-[-0.15em] bg-carmine ${className}`} />
);
