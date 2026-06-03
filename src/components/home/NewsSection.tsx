import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import { newsItems as allNewsItems } from "@/pages/News";

const newsItems = allNewsItems.slice(0, 8);

// Helper function to render text with LaTeX expressions and colored paper titles
const renderMathText = (text: string, colorPaperTitle: boolean = false) => {
  // Check for "Paper Accepted to [Conference] [Year]:" pattern
  const paperAcceptedMatch = text.match(/^(Paper Accepted to [^:]+:)\s*(.*)/);

  if (paperAcceptedMatch && colorPaperTitle) {
    const prefix = paperAcceptedMatch[1];
    const paperTitle = paperAcceptedMatch[2];

    // Process the paper title for LaTeX
    const parts = paperTitle.split(/(\$.*?\$|\\\(.*?\\\)|\\\[.*?\\\])/);
    const renderedTitle = parts.map((part, index) => {
      if (part.startsWith('$') && part.endsWith('$')) {
        const math = part.slice(1, -1);
        return <InlineMath key={index} math={math} />;
      } else {
        return <span key={index}>{part}</span>;
      }
    });

    return (
      <>
        <span>{prefix}</span>{' '}
        <span className="text-accent-vibrant">{renderedTitle}</span>
      </>
    );
  }

  // Default: Split text by LaTeX delimiters
  const parts = text.split(/(\$.*?\$|\\\(.*?\\\)|\\\[.*?\\\])/);

  return parts.map((part, index) => {
    if (part.startsWith('$') && part.endsWith('$')) {
      // Inline math: $...$
      const math = part.slice(1, -1);
      return <InlineMath key={index} math={math} />;
    } else if (part.startsWith('\\(') && part.endsWith('\\)')) {
      // Inline math: \(...\)
      const math = part.slice(2, -2);
      return <InlineMath key={index} math={math} />;
    } else if (part.startsWith('\\[') && part.endsWith('\\]')) {
      // Block math: \[...\]
      const math = part.slice(2, -2);
      return <BlockMath key={index} math={math} />;
    } else {
      // Regular text
      return <span key={index}>{part}</span>;
    }
  });
};


const NewsSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-subtle-gradient">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Latest News
            </h2>
            <p className="font-body text-lg text-muted-foreground">
              Stay updated with our latest research breakthroughs and announcements.
            </p>
          </div>
          <a href="/news">
            <Button variant="outline" className="mt-4 md:mt-0">
              View All News
            </Button>
          </a>
        </div>
        
                 <div className="grid lg:grid-cols-2 gap-6">
           {newsItems.map((item, index) => (
             <a 
               key={index} 
               href={item.url}
               target={item.url.startsWith('http') ? "_blank" : "_self"}
               rel={item.url.startsWith('http') ? "noopener noreferrer" : ""}
               className="block no-underline"
             >
               <Card 
                 className={`shadow-card hover:shadow-elevated transition-all duration-300 cursor-pointer group animate-fade-in ${item.highlight ? 'ring-2 ring-accent-vibrant ring-offset-2' : ''}`}
                 style={{ animationDelay: `${index * 0.1}s` }}
               >
                 <CardHeader className="pb-3">
                   <div className="flex justify-between items-start mb-2">
                     <span className="text-sm font-medium text-accent-vibrant">
                       {item.type}
                     </span>
                     <span className="text-sm text-muted-foreground">
                       {item.date}
                     </span>
                   </div>
                   <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                     {renderMathText(item.title, item.title.includes("ICLR 2026"))}
                   </h3>
                 </CardHeader>
                 <CardContent>
                   <p className="font-body text-muted-foreground">
                     {item.excerpt}
                   </p>
                 </CardContent>
               </Card>
             </a>
           ))}
         </div>
      </div>
    </section>
  );
};

export default NewsSection;