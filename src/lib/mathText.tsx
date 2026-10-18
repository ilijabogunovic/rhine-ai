import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";

/** Renders text containing $...$, \(...\) or \[...\] LaTeX expressions. */
export const renderMathText = (text: string) => {
  const parts = text.split(/(\$.*?\$|\\\(.*?\\\)|\\\[.*?\\\])/);
  return parts.map((part, index) => {
    if (part.startsWith("$") && part.endsWith("$") && part.length > 1) {
      return <InlineMath key={index} math={part.slice(1, -1)} />;
    }
    if (part.startsWith("\\(") && part.endsWith("\\)")) {
      return <InlineMath key={index} math={part.slice(2, -2)} />;
    }
    if (part.startsWith("\\[") && part.endsWith("\\]")) {
      return <BlockMath key={index} math={part.slice(2, -2)} />;
    }
    return <span key={index}>{part}</span>;
  });
};
