import React from 'react';

// Import thumbnails statically
import thumb260220759 from '../assets/pdf-thumbs/thumb-2602.20759.jpg';
import thumb260529398 from '../assets/pdf-thumbs/thumb-2605.29398.jpg';
import thumb250201208 from '../assets/pdf-thumbs/thumb-2502.01208.jpg';
import thumb250300030 from '../assets/pdf-thumbs/thumb-2503.00030.jpg';
import thumb250305856 from '../assets/pdf-thumbs/thumb-2503.05856.jpg';
import thumb250308796 from '../assets/pdf-thumbs/thumb-2503.08796.jpg';
import thumb250708838 from '../assets/pdf-thumbs/thumb-2507.08838.jpg';
import thumb250913341 from '../assets/pdf-thumbs/thumb-2509.13341.jpg';
import thumb260205547 from '../assets/pdf-thumbs/thumb-2602.05547.jpg';
import thumb260216902 from '../assets/pdf-thumbs/thumb-2602.16902.jpg';
import thumb260915177 from '../assets/pdf-thumbs/thumb-2609.15177.jpg';
import thumb260713315 from '../assets/pdf-thumbs/thumb-2607.13315.jpg';
import thumb260700053 from '../assets/pdf-thumbs/thumb-2607.00053.jpg';
import thumb260612232 from '../assets/pdf-thumbs/thumb-2606.12232.jpg';
import thumb260518803 from '../assets/pdf-thumbs/thumb-2605.18803.jpg';

const thumbnailMap: { [key: string]: string } = {
  '2602.20759': thumb260220759,
  '2605.29398': thumb260529398,
  '2502.01208': thumb250201208,
  '2503.00030': thumb250300030,
  '2503.05856': thumb250305856,
  '2503.08796': thumb250308796,
  '2507.08838': thumb250708838,
  '2509.13341': thumb250913341,
  '2602.05547': thumb260205547,
  '2602.16902': thumb260216902,
  '2609.15177': thumb260915177,
  '2607.13315': thumb260713315,
  '2607.00053': thumb260700053,
  '2606.12232': thumb260612232,
  '2605.18803': thumb260518803,
};

/** The first-page thumbnail for a paper, from its arXiv or local PDF link. */
export const getPaperThumbnail = (file?: string): string | null => {
  if (!file) return null;
  const arxivMatch = file.match(/arxiv\.org\/pdf\/(\d+\.\d+)/);
  const localPaperMatch = file.match(/\/papers\/(\d+\.\d+)\.pdf/);
  const arxivId = arxivMatch?.[1] || localPaperMatch?.[1];
  return arxivId ? thumbnailMap[arxivId] ?? null : null;
};

interface PDFThumbnailProps {
  file: string;
  className?: string;
  alt?: string;
}

const PDFThumbnail: React.FC<PDFThumbnailProps> = ({ file, className, alt }) => {
  const thumbnailUrl = getPaperThumbnail(file);

  if (!thumbnailUrl) {
    return (
      <a
        href={file}
        target="_blank"
        rel="noopener noreferrer"
        className={`${className} flex flex-col items-start justify-end bg-paper-2 p-4 text-ink transition-colors hover:bg-beige`}
      >
        <span className="t-1 font-semibold">PDF</span>
        <span className="t-1 text-ink-soft">Open the paper</span>
      </a>
    );
  }

  return (
    <a
      href={file}
      target="_blank"
      rel="noopener noreferrer"
      className={`${className} group block overflow-hidden bg-white`}
    >
      <img
        src={thumbnailUrl}
        alt={alt || 'First page of the paper'}
        className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        loading="lazy"
      />
    </a>
  );
};

export default PDFThumbnail;
