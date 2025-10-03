import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Link } from "react-router-dom";
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

const blogPosts = [
  {
    date: "October 3, 2025",
    title: "Imagined Autocurricula",
    author: "Ahmet H. Güzel",
    excerpt: "What if AI agents could train in imagined worlds instead of needing massive real-world datasets? We introduce IMAC, a breakthrough approach that uses world models to generate diverse training environments with automatic curriculum learning, enabling agents to master new tasks they've never seen before—opening the door to truly general-purpose AI trained entirely in simulation.",
    readTime: "3 min read",
    category: "Technical",
    url: "https://sites.google.com/view/imagined-autocurricula/home"
  },
  
  {
    date: "July 7, 2025",
    title: "$\\texttt{wd1}$: Weighted Policy Optimization for Reasoning in Diffusion Language Models",
    author: "Xiaohang Tang",
    excerpt: "Introducing a novel policy optimization approach for dLLMs that reformulates the objective as a weighted likelihood, requiring only a single approximation for the current parametrized policy likelihood. This new approach demonstrates both better performance and computational efficiency in dLLMs reasoning.",
    readTime: "3 min read",
    category: "Technical",
    url: "https://ucl-diffusion-reasoning.github.io/wd1-demo/"
  },
  {
    date: "December 9, 2024",
    title: "How can we exploit known symmetry in Bayesian optimisation?",
    author: "Theo Brown",
    excerpt: "Taking a fully Bayesian approach to optimisation means incorporating all prior knowledge about our objective function into the optimisation process. Often in the physical sciences we come to the table knowing quite a lot about the shape of the objective, whether that's from knowledge of the underlying governing equations, physical principles, or geometry of the problem. Our NeurIPS 2024 paper derives new, general guarantees on performance of Bayesian optimisation algorithms that exploit a problem's invariances.",
    readTime: "5 min read",
    category: "Technical",
    url: "https://theobrown.uk/blog/invariantbo/"
  },
  {
    date: "July 22, 2024",
    title: "Pluralistic Alignment of LLMs: Fix your Algorithm not just your data",
    author: "Dr. Haitham Bou Ammar",
    excerpt: "Large language models (LLMs) often exhibit biases that are expensive and impractical to fix with traditional methods. What if we could optimize models differently while keeping data intact? This blog explores group robust preference optimization, a novel approach that improves alignment and diversity for underrepresented groups without requiring additional data.",
    readTime: "5 min read",
    category: "Technical",
    url: "https://medium.com/@haitham.bouammar71/pluralistic-alignment-of-llms-fix-your-algorithm-not-just-your-data-a0686ec7a279"
  }
];

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

const Blog = () => {
  return (
    <Layout>
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl font-bold text-foreground mb-4">
              Research Blog
            </h1>
            <p className="font-body text-lg text-muted-foreground">
              Insights, discoveries, and perspectives from our AI research team.
            </p>
          </div>

          <div className="space-y-8">
                         {blogPosts.map((post, index) => (
               <a 
                 key={index} 
                 href={post.url}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="block no-underline"
               >
                 <Card 
                   className="shadow-card hover:shadow-elevated transition-all duration-300 cursor-pointer group"
                 >
                   <CardHeader>
                     <div className="flex items-center justify-between mb-3">
                       <span className="px-3 py-1 text-xs font-medium bg-accent text-accent-foreground rounded-full">
                         {post.category}
                       </span>
                       <div className="text-sm text-muted-foreground">
                         {post.date} • {post.readTime}
                       </div>
                     </div>
                     <h2 className="font-display text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                       {renderMathText(post.title)}
                     </h2>
                     <p className="font-body text-sm text-accent-vibrant">
                       by {post.author}
                     </p>
                   </CardHeader>
                   <CardContent>
                     <p className="font-body text-muted-foreground leading-relaxed">
                       {renderMathText(post.excerpt)}
                     </p>
                   </CardContent>
                 </Card>
               </a>
             ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;