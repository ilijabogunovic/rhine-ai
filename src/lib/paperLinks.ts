// The outbound links a paper can carry, in the order they are shown everywhere on the site.
const LINK_FIELDS = [
  ["arxivLink", "arXiv"],
  ["pdfFile", "PDF"],
  ["githubLink", "GitHub"],
  ["codeLink", "Code"],
  ["videoLink", "Video"],
  ["blogLink", "Blog"],
  ["huggingFaceLink", "Hugging Face"],
  ["websiteLink", "Website"],
  ["slidesLink", "Slides"],
] as const;

export type PaperLink = { label: string; href: string };

export const paperLinks = (paper: Record<string, unknown>): PaperLink[] =>
  LINK_FIELDS.flatMap(([field, label]) => {
    const href = paper[field];
    return typeof href === "string" && href ? [{ label, href }] : [];
  });
