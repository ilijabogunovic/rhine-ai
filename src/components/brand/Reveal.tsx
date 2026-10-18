import { createElement, useEffect, useRef, type ReactNode } from "react";

interface RevealProps {
  as?: keyof JSX.IntrinsicElements;
  /** "up" (default): parts rise in reading order. "rows": quicker, for lists. "open": a picture opens from a mask. */
  mode?: "up" | "rows" | "open";
  className?: string;
  children: ReactNode;
  id?: string;
}

/**
 * Staggers the entrance of its direct children once, as the block enters the viewport.
 * Content stays visible without script and under reduced motion (see index.css).
 */
const Reveal = ({ as = "div", mode = "up", className, children, id }: RevealProps) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    Array.from(el.children).forEach((child, i) => {
      (child as HTMLElement).style.setProperty("--i", String(Math.min(i, 12)));
    });
    if (!("IntersectionObserver" in window)) {
      el.classList.add("in");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return createElement(
    as,
    { ref, className, id, "data-reveal": mode === "up" ? "" : mode },
    children
  );
};

export default Reveal;
