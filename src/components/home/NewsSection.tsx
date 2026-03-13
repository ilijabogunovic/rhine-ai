import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

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

const newsItems = [
  {
    date: "March 13, 2026",
    title: "LLM-WikiRace Benchmark: How Far Can LLMs Plan over Real-World Knowledge Graphs?",
    excerpt: "We introduce LLM-Wikirace, a benchmark for evaluating planning, reasoning, and world knowledge in large language models (LLMs). In LLM-Wikirace, models must efficiently navigate Wikipedia hyperlinks step by step to reach a target page from a given source, requiring look-ahead planning and the ability to reason about how concepts are connected in the real world.",
    type: "Preprint",
    url: "https://llmwikirace.github.io/"
  },
  {
    date: "February 2026",
    title: "Robin Faro Joins Rhine AI Lab as PhD Student",
    excerpt: "We are excited to welcome Robin Faro to the Rhine AI Lab as a new PhD student at the University of Basel. Robin is jointly supervised by Prof. Ilija Bogunovic and Prof. Aurelien Lucchi (University of Basel). Welcome to the team!",
    type: "Announcement",
    url: "/team/robin-faro"
  },
  {
    date: "February 2026",
    title: "Multi-Task GRPO: Reliable LLM Reasoning Across Tasks",
    excerpt: "New preprint on multi-task reinforcement learning for LLMs. When standard GRPO methods are adapted for multi-task scenarios, some tasks receive disproportionate attention while others fall behind. We introduce MT-GRPO, which dynamically adjusts task weights to explicitly optimize worst-task performance and promote balanced progress, achieving significant improvement on worst-task performance compared to baseline approaches.",
    type: "Preprint",
    url: "https://arxiv.org/abs/2602.05547"
  },
  {
    date: "January 2026",
    title: "Paper Accepted to ICLR 2026: $\\texttt{wd1}$ - Weighted Policy Optimization for Reasoning in Diffusion Language Models",
    excerpt: "Our work on improving the reasoning capabilities of diffusion-based large language models has been accepted to the International Conference on Learning Representations (ICLR) 2026. We introduce wd1, a weighted policy optimization algorithm that addresses the challenge of intractable likelihood functions in diffusion LLMs by reducing the use of approximated likelihoods, enabling more effective reinforcement learning for reasoning tasks.",
    type: "Publication",
    url: "https://arxiv.org/abs/2507.08838"
  },
  {
    date: "January 2026",
    title: "Paper Accepted to ICLR 2026: Robust Multi-Objective Controlled Decoding of Large Language Models",
    excerpt: "Our work on robust multi-objective alignment of large language models has been accepted to the International Conference on Learning Representations (ICLR) 2026. This research presents a novel approach to controlled decoding that enables LLMs to balance multiple objectives simultaneously while maintaining robustness, advancing the field of LLM alignment and controllable generation.",
    type: "Publication",
    url: "https://arxiv.org/abs/2503.08796"
  },
  {
    date: "November 2025",
    title: "🎯 Open PhD Positions: Reinforcement Learning for LLMs and Agentic AI",
    excerpt: "We are recruiting PhD students to work on cutting-edge research in post-training algorithms for LLMs, diffusion-based reasoning, AI alignment, and self-improving autonomous agents. Join us at the University of Basel to shape the future of AI! Application deadline: December 1, 2025. Start date: January 2026 (flexible).",
    type: "Opportunity",
    url: "https://jobs.unibas.ch/offene-stellen/phd-positions-in-reinforcement-learning-for-llms-and-agentic-ai-prof-i-bogunovic/934e80ad-82d3-468e-9454-781e884ceae3",
    highlight: true
  },
  {
    date: "October 3, 2025",
    title: "Paper Accepted to NeurIPS 2025: IMAC - Training Agents in Imagined Worlds via Autocurricula",
    excerpt: "Our work on training robust agents using world models and unsupervised environment design has been accepted to the Conference on Neural Information Processing Systems (NeurIPS) 2025. This research demonstrates how agents can achieve strong generalization to novel tasks by training entirely within imagined environments generated by learned world models, eliminating the need for vast real-world datasets or accurate simulation.",
    type: "Publication",
    url: "https://arxiv.org/abs/2509.13341"
  },

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