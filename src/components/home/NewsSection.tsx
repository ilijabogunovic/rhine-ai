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
    date: "August 21, 2025",
    title: "Prof. Dr. Ilija Bogunovic Appointed to University of Basel",
    excerpt: "Prof. Dr. Ilija Bogunovic, currently Lecturer at UCL, has been appointed to a new professorship at the Department of Mathematics and Computer Science, University of Basel, starting September 1, 2025.",
    type: "Announcement",
    url: "https://dmi.unibas.ch/de/news-events/detail/neuer-professor-in-der-informatik-prof-dr-ilija-bogunovic/"
  },
  {
    date: "September 2025",
    title: "Paper Accepted to COLM 2025: Sample Efficient Preference Alignment in LLMs via Active Exploration",
    excerpt: "Our work on active exploration techniques for sample efficient preference alignment in large language models has been accepted to the Conference on Language Modeling (COLM) 2025. This research reduces the amount of human feedback required for effective LLM alignment through principled active learning approaches.",
    type: "Publication",
    url: "https://arxiv.org/abs/2312.00267"
  },
  {
    date: "July 7, 2025",
    title: "$\\texttt{wd1}$: Weighted Policy Optimization for Reasoning in Diffusion Language Models",
    excerpt: "Improving the reasoning capabilities of diffusion-based large language models (dLLMs) through reinforcement learning remains an open problem due to the intractability of likelihood functions. We introduce wd1, a weighted policy optimization algorithm that addresses this challenge by reducing the use of approximated likelihoods.",
    type: "Preprint",
    url: "https://ucl-diffusion-reasoning.github.io/wd1-demo/"
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