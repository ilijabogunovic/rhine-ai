/**
 * Open positions. Each one is announced on the home page and on Join us while `open` is true;
 * its full text lives on a news page. Set `open: false` once a position is filled.
 */
export interface Opening {
  title: string;
  /** A one-line summary for the home page and Join us. */
  summary: string;
  url: string;
  open: boolean;
}

export const openings: Opening[] = [
  {
    title: "PhD and Postdoc positions in Recursive Self-Improvement",
    summary: "How LLMs and AI agents can drive their own improvement. In Basel, flexible start, reviewed on a rolling basis.",
    url: "/news/phd-postdoc-recursive-self-improvement-2026",
    open: true,
  },
  {
    title: "PhD and Postdoc positions in Post-Training of Diffusion Language Models",
    summary: "SNSF-funded, in Basel, starting January 2027 or later. Apply preferably before November 20, 2026.",
    url: "/news/phd-postdoc-diffusion-llm-2026",
    open: true,
  },
];

export const openOpenings = () => openings.filter((o) => o.open);
