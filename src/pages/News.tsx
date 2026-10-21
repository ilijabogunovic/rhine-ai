import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import PageHeader from "@/components/brand/PageHeader";
import Reveal from "@/components/brand/Reveal";
import { CategoryTag } from "@/components/brand/Tags";
import { renderMathText } from "@/lib/mathText";

export const newsItems: { date: string; title: string; excerpt: string; type: string; url: string; highlight?: boolean }[] = [
  {
    date: "September 2026",
    title: "Rhine AI Lab Has Four Papers Accepted to NeurIPS 2026",
    excerpt: "We are excited to announce that four Rhine AI Lab papers have been accepted to to the Conference on Neural Information Processing Systems (NeurIPS) 2026. See you there!",
    type: "Publication",
    url: "/news/neurips-2026"
  },
  {
    date: "September 2026",
    title: "Ilija Bogunovic Receives SNSF Project Grant for Research on Diffusion Language Models",
    excerpt: "Ilija Bogunovic has been awarded a Project Grant by the Swiss National Science Foundation (SNSF) for the project \"Foundations of Post-Training for Reasoning in Diffusion Large Language Models.\" The four-year project starts in January 2027 and will be carried out at the Rhine AI Lab, University of Basel. \n PhD and postdoc openings will be announced soon.",
    type: "Announcement",
    url: "/news/snsf-project-grant-2026"
  },
  {
    date: "September 2026",
    title: "Temporal Self-Distillation: Faster Inference in Discrete Diffusion Language Models",
    excerpt: "We introduce Temporal Self-Distillation, an on-policy method that trains discrete diffusion language models for more aggressive parallel decoding while preserving quality. The approach requires no offline teacher generation and improves the speed-quality frontier across mathematics, planning, and code benchmarks.",
    type: "Preprint",
    url: "https://arxiv.org/abs/2609.15177"
  },
  {
    date: "September 2026",
    title: "Antonio Lopardo Joins Rhine AI Lab as PhD Student",
    excerpt: "We are excited to welcome Antonio Lopardo to the Rhine AI Lab as a new PhD student at the University of Basel. Antonio is jointly supervised by Prof. Ilija Bogunovic and Prof. Aurelien Lucchi. Welcome to the team!",
    type: "Announcement",
    url: "/team/antonio-lopardo"
  },
  {
    date: "July 2026",
    title: "Overton Pluralistic Reinforcement Learning for Large Language Models",
    excerpt: "Our work on improving the overton pluralistic behaviour of large language models through reinforcement learning has been accepted to Conference on Language Modeling (COLM) 2026.",
    type: "Publication",
    url: "https://arxiv.org/abs/2602.20759"
  },
  {
    date: "July 2026",
    title: "Rhine AI Lab at ICML 2026 🇰🇷",
    excerpt: "Rhine AI Lab will present three main-conference papers at ICML 2026 in Seoul, alongside several workshop papers spanning LLM reasoning, alignment, benchmarking, and agentic software engineering.",
    type: "Conference",
    url: "/news/icml-2026-lab"
  },
  {
    date: "June 2026",
    title: "Andrea Miele Joins Rhine AI Lab as PhD Student",
    excerpt: "We are excited to announce Andrea Miele joining the Rhine AI Lab as a new PhD student at the University of Basel. Welcome to the team!",
    type: "Announcement",
    url: "/team/andrea-miele"
  },
  {
    date: "June 2026",
    title: "Macroscopic Ventures supports RHINE AI research through a research gift",
    excerpt: "We are grateful to Macroscopic Ventures for supporting our research through a generous research gift.",
    type: "Announcement",
    url: "/news/macroscopic2026"
  },
  {
    date: "May 2026",
    title: "Three Rhine AI Lab Papers Accepted to ICML 2026 🇰🇷",
    excerpt: "We are excited to announce that three papers from the Rhine AI Lab have been accepted to the International Conference on Machine Learning (ICML) 2026, taking place in Seoul, South Korea.",
    type: "Publication",
    url: "/news/icml-2026"
  },
  {
    date: "April 2026",
    title: "Rhine AI students presented papers at ICLR 2026 in Rio 🇧🇷",
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

const yearOf = (date: string) => date.match(/\d{4}/)?.[0] ?? "Earlier";

const News = () => {
  const years = Array.from(new Set(newsItems.map((n) => yearOf(n.date))));

  return (
    <Layout>
      <PageHeader title="News" intro="Latest updates, publications, and announcements from Rhine AI Lab." />

      <div className="wrap space-y-24 pb-[var(--section)]">
        {years.map((year) => (
          <section key={year} className="grid gap-8 lg:grid-cols-12" aria-labelledby={`news-${year}`}>
            <h2 id={`news-${year}`} className="t-4 font-semibold text-ink lg:col-span-2">
              {year}
            </h2>
            <Reveal as="ul" mode="rows" className="lg:col-span-10">
              {newsItems
                .filter((n) => yearOf(n.date) === year)
                .map((item) => {
                  const isInternal = !item.url.startsWith("http");
                  const inner = (
                    <article className="grid gap-x-10 gap-y-2 py-7 sm:grid-cols-[11rem_1fr]">
                      <div className="t-1 text-ink-soft">
                        <p>{item.date}</p>
                        <CategoryTag type={item.type} className="mt-2" />
                      </div>
                      <div>
                        <h3 className="t-3 font-semibold text-ink transition-colors [text-wrap:wrap] group-hover:text-carmine">
                          {renderMathText(item.title)}
                        </h3>
                        <p className="t-2 mt-3 whitespace-pre-line text-ink-soft">{item.excerpt}</p>
                      </div>
                    </article>
                  );
                  return (
                    <li key={item.title} className="rounded-xl transition-colors duration-200 hover:bg-paper-2">
                      {isInternal ? (
                        <Link to={item.url} className="group block px-0 sm:px-6">
                          {inner}
                        </Link>
                      ) : (
                        <a href={item.url} target="_blank" rel="noopener noreferrer" className="group block px-0 sm:px-6">
                          {inner}
                        </a>
                      )}
                    </li>
                  );
                })}
            </Reveal>
          </section>
        ))}
      </div>
    </Layout>
  );
};

export default News;
