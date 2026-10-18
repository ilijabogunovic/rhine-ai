import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/brand/PageHeader";
import Reveal from "@/components/brand/Reveal";
import { renderMathText } from "@/lib/mathText";

const blogPosts = [
  {
    date: "September 2026",
    title: "Fine-Tuning DiffusionGemma: What Works, What Breaks",
    author: "Andrea Miele, William Bankes, Keyue Jiang, Seongho Son, Xiaohang Tang, and Ilija Bogunovic",
    excerpt: "An empirical study of SFT for the first large open-weight uniform diffusion LM. Which objective wins, where post-training helps, and why it breaks as the horizon grows.",
    readTime: "20 min read",
    category: "Technical",
    url: "https://www.andreamiele.fr/blog/fine-tuning-diffusiongemma/"
  },
  {
    date: "June 2026",
    title: "GDSD: Reinforcement Learning as Guided Denoiser Self-Distillation for Diffusion Language Models",
    author: "Xiaohang Tang, Keyue Jiang, and Ilija Bogunovic",
    excerpt: "Reinforcement learning for diffusion language models is hindered by intractable policy likelihoods and bias from training–inference mismatch in ELBO-based methods. We introduce Guided Denoiser Self-Distillation (GDSD), which distills the denoiser from an advantage-guided self-teacher derived from the closed-form optimum of reverse-KL regularized. GDSD outperforms prior ELBO-based methods on planning, math, and coding benchmarks.",
    readTime: "4 min read",
    category: "Technical",
    url: "https://rhine-ai-lab.github.io/diffusion_reasoning/"
  },
  {
    date: "March 13, 2026",
    title: "LLM-WikiRace Benchmark: How Far Can LLMs Plan over Real-World Knowledge Graphs?",
    author: "Juliusz Ziomek, William Bankes, and Lorenz Wolf",
    excerpt: "We introduce LLM-Wikirace, a benchmark for evaluating planning, reasoning, and world knowledge in large language models (LLMs). In LLM-Wikirace, models must efficiently navigate Wikipedia hyperlinks step by step to reach a target page from a given source, requiring look-ahead planning and the ability to reason about how concepts are connected in the real world.",
    readTime: "4 min read",
    category: "Technical",
    url: "https://llmwikirace.github.io/"
  },
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

const Blog = () => {
  return (
    <Layout>
      <PageHeader title="Research blog" intro="Insights, discoveries, and perspectives from our AI research team." />

      <div className="wrap pb-[var(--section)]">
        <Reveal as="ul" mode="rows" className="divide-y divide-beige">
          {blogPosts.map((post) => (
            <li key={post.title}>
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid gap-x-10 gap-y-3 py-10 lg:grid-cols-12"
              >
                <span className="t-1 block text-ink-soft lg:col-span-3">
                  <span className="block font-medium text-ink">{post.date}</span>
                  <span className="block">{post.readTime}</span>
                </span>
                <span className="block lg:col-span-9">
                  <span className="t-3 block font-display font-semibold text-ink transition-colors [text-wrap:wrap] group-hover:text-carmine">
                    {renderMathText(post.title)}
                  </span>
                  <span className="t-1 mt-2 block font-medium text-ink">by {post.author}</span>
                  <span className="t-2 mt-4 block text-ink-soft">{renderMathText(post.excerpt)}</span>
                  <span className="t-1 mt-4 inline-block font-medium text-carmine">
                    Read the post{" "}
                    <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">↗</span>
                  </span>
                </span>
              </a>
            </li>
          ))}
        </Reveal>
      </div>
    </Layout>
  );
};

export default Blog;
