import { useState } from "react";
import { paperLinks } from "@/lib/paperLinks";

interface PaperActionsProps {
  paper: Record<string, unknown>;
  bibtex: string;
}

/** The row of links under a paper, with a BibTeX toggle that reveals a copyable entry. */
const PaperActions = ({ paper, bibtex }: PaperActionsProps) => {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(bibtex);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div>
      <div className="t-1 flex flex-wrap gap-x-5 gap-y-1.5">
        {paperLinks(paper).map((l) => (
          <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="link font-medium">
            {l.label}
          </a>
        ))}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          className="link font-medium"
        >
          {open ? "Hide BibTeX" : "BibTeX"}
        </button>
      </div>
      {open && (
        <div className="mt-4 bg-paper-2 p-5">
          <pre className="overflow-x-auto whitespace-pre-wrap font-mono text-sm leading-relaxed text-ink">
            <code>{bibtex}</code>
          </pre>
          <button type="button" onClick={copy} className="btn mt-4 !min-h-[2.5rem] !px-4">
            {copied ? "Copied" : "Copy to clipboard"}
          </button>
        </div>
      )}
    </div>
  );
};

export default PaperActions;
