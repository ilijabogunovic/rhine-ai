import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Link } from "react-router-dom";
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';

// Helper function to render text with LaTeX expressions
const renderMathText = (text: string) => {
  const parts = text.split(/(\$.*?\$)/);
  return parts.map((part, index) => {
    if (part.startsWith('$') && part.endsWith('$')) {
      const math = part.slice(1, -1);
      return <InlineMath key={index} math={math} />;
    }
    return <span key={index}>{part}</span>;
  });
};

const newsItems = [
  {
    date: "April 2026",
    title: "Rhine AI students presented papers at ICLR 2026 in Rio :flag-br:",
    excerpt: "Rhine AI students and collaborators presented two papers at ICLR 2026: wd1 and RMOD!",
    type: "Announcement",
    url: "/news/iclr2026"
  },
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
    excerpt: "Our work on improving the reasoning capabilities of diffusion-based large language models has been accepted to the International Conference on Learning Representations (ICLR) 2026.",
    type: "Publication",
    url: "https://arxiv.org/abs/2507.08838"
  },
  {
    date: "January 2026",
    title: "Paper Accepted to ICLR 2026: Robust Multi-Objective Controlled Decoding of Large Language Models",
    excerpt: "Our work on robust multi-objective alignment of large language models has been accepted to the International Conference on Learning Representations (ICLR) 2026.",
    type: "Publication",
    url: "https://arxiv.org/abs/2503.08796"
  },
  {
    date: "November 2025",
    title: "Open PhD Positions: Reinforcement Learning for LLMs and Agentic AI",
    excerpt: "We are recruiting PhD students to work on cutting-edge research in post-training algorithms for LLMs, diffusion-based reasoning, AI alignment, and self-improving autonomous agents. Join us at the University of Basel to shape the future of AI!",
    type: "Opportunity",
    url: "https://jobs.unibas.ch/offene-stellen/phd-positions-in-reinforcement-learning-for-llms-and-agentic-ai-prof-i-bogunovic/934e80ad-82d3-468e-9454-781e884ceae3"
  },
  {
    date: "October 3, 2025",
    title: "Paper Accepted to NeurIPS 2025: IMAC - Training Agents in Imagined Worlds via Autocurricula",
    excerpt: "Our work on training robust agents using world models and unsupervised environment design has been accepted to the Conference on Neural Information Processing Systems (NeurIPS) 2025.",
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
    excerpt: "Our work on active exploration techniques for sample efficient preference alignment in large language models has been accepted to the Conference on Language Modeling (COLM) 2025.",
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

const typeBadgeColor = (type: string) => {
  switch (type) {
    case "Publication": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
    case "Preprint": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
    case "Announcement": return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
    case "Opportunity": return "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200";
    default: return "bg-accent text-accent-foreground";
  }
};

const News = () => {
  return (
    <Layout>
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl font-bold text-foreground mb-4">
              News
            </h1>
            <p className="font-body text-lg text-muted-foreground">
              Latest updates, publications, and announcements from Rhine AI Lab.
            </p>
          </div>

          <div className="space-y-6">
            {newsItems.map((item, index) => {
              const isInternal = !item.url.startsWith('http');
              const cardContent = (
                <Card className="shadow-card hover:shadow-elevated transition-all duration-300 cursor-pointer group">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${typeBadgeColor(item.type)}`}>
                        {item.type}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {item.date}
                      </span>
                    </div>
                    <h2 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {renderMathText(item.title)}
                    </h2>
                  </CardHeader>
                  <CardContent>
                    <p className="font-body text-muted-foreground leading-relaxed">
                      {item.excerpt}
                    </p>
                  </CardContent>
                </Card>
              );

              if (isInternal) {
                return (
                  <Link key={index} to={item.url} className="block no-underline">
                    {cardContent}
                  </Link>
                );
              }
              return (
                <a key={index} href={item.url} target="_blank" rel="noopener noreferrer" className="block no-underline">
                  {cardContent}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default News;
