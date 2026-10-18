import type { ReactNode } from "react";
import Reveal from "@/components/brand/Reveal";

interface PageHeaderProps {
  title: ReactNode;
  intro?: ReactNode;
  /** Shown to the right on wide screens: a shaped photograph, an action, a fact. */
  aside?: ReactNode;
  children?: ReactNode;
  /** For long titles: a smaller size on phones so they stay within two lines. */
  long?: boolean;
}

/** The opening of every interior page: one large title on the shared left edge. */
const PageHeader = ({ title, intro, aside, children, long = false }: PageHeaderProps) => (
  <header className="wrap grid gap-10 pb-16 pt-14 sm:pb-24 sm:pt-20 lg:grid-cols-12 lg:items-end">
    <Reveal className={aside ? "lg:col-span-8" : "lg:col-span-10"}>
      <h1 className={`t-5 font-semibold text-ink ${long ? "max-sm:!text-[2.125rem]" : ""}`}>{title}</h1>
      {intro && <div className="t-3 mt-8 max-w-[40ch] font-display text-ink-soft">{intro}</div>}
      {children}
    </Reveal>
    {aside && <div className="lg:col-span-4">{aside}</div>}
  </header>
);

export default PageHeader;
