import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

// Helper function to render text with LaTeX expressions
const renderMathText = (text: string) => {
  // Split text by LaTeX delimiters
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

const newsItems = [
  {
    date: "July 7, 2025",
    title: "$\\texttt{wd1}$: Weighted Policy Optimization for Reasoning in Diffusion Language Models",
    excerpt: "Introducing a novel policy optimization approach for dLLMs reasoning.",
    type: "Preprint",
    url: "https://ucl-diffusion-reasoning.github.io/wd1-demo/"
  },
  {
    date: "Dec 10, 2024",
    title: "New Paper Accepted at ICML 2025",
    excerpt: "Our research on federated learning optimization has been accepted for publication at the International Conference on Machine Learning.",
    type: "Publication",
    url: "/publications"
  }
];

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
          <Button variant="outline" className="mt-4 md:mt-0">
            View All News
          </Button>
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
                 className="shadow-card hover:shadow-elevated transition-all duration-300 cursor-pointer group animate-fade-in"
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
                     {renderMathText(item.title)}
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