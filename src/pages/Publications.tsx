import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import paperThumbnail1 from "@/assets/paper-thumbnail-1.jpg";
import paperThumbnail2 from "@/assets/paper-thumbnail-2.jpg";
import paperThumbnail3 from "@/assets/paper-thumbnail-3.jpg";
import paperThumbnail4 from "@/assets/paper-thumbnail-4.jpg";
import paperThumbnail5 from "@/assets/paper-thumbnail-5.jpg";

const publications = [
  {
    year: "2025",
    title: "wd1: Weighted Policy Optimization for Reasoning in Diffusion Language Models",
    authors: "X Tang, R Dolga, S Yoon, I Bogunovic",
    venue: "arXiv preprint arXiv:2507.08838",
    type: "Preprint",
    arxivLink: "https://arxiv.org/abs/2507.08838",
    abstract: "Improving the reasoning capabilities of diffusion-based large language models (dLLMs) through reinforcement learning (RL) remains an open problem. The intractability of dLLMs likelihood function necessitates approximating the current, old, and reference policy likelihoods at each policy optimization step. This reliance introduces additional computational overhead and lead to potentially large bias -- particularly when approximation errors occur in the denominator of policy ratios used for importance sampling. To mitigate these issues, we introduce wd1, a novel policy optimization approach that reformulates the objective as a weighted likelihood, requiring only a single approximation for the current parametrized policy likelihood. Experiments on widely used reasoning benchmarks demonstrate that wd1, without supervised fine-tuning (SFT) or any supervised data, outperforms existing RL methods for dLLMs, achieving up to 16% higher accuracy. wd1 delivers additional computational gains, including reduced training time and fewer function evaluations (NFEs) per gradient step. These findings, combined with the simplicity of method's implementation and R1-Zero-like training (no SFT), position wd1 as a more effective and efficient method for applying RL to dLLMs reasoning.",
    thumbnail: paperThumbnail1
  },
  {
    year: "2025",
    title: "Robust Multi-Objective Controlled Decoding of Large Language Models",
    authors: "S Son, W Bankes, S Yoon, SS Ramesh, X Tang, I Bogunovic",
    venue: "arXiv preprint arXiv:2503.08796",
    type: "Preprint",
    arxivLink: "https://arxiv.org/abs/2503.08796",
    abstract: "Test-time alignment of Large Language Models (LLMs) to human preferences offers a flexible way to generate responses aligned to diverse objectives without extensive retraining of LLMs. Existing methods achieve alignment to multiple objectives simultaneously (e.g., instruction-following, helpfulness, conciseness) by optimizing their corresponding reward functions. However, they often rely on predefined weights or optimize for averages, sacrificing one objective for another and leading to unbalanced outcomes. To address this, we introduce Robust Multi-Objective Decoding (RMOD), a novel inference-time algorithm that optimizes for improving worst-case rewards. RMOD formalizes the robust decoding problem as a maximin two-player game between reward weights and the sampling policy, solving for the Nash equilibrium. We show that the game reduces to a convex optimization problem to find the worst-case weights, while the best response policy can be computed analytically. We also introduce a practical RMOD variant designed for efficient decoding with contemporary LLMs, incurring minimal computational overhead compared to non-robust Multi-Objective Decoding (MOD) methods. Our experimental results showcase the effectiveness of RMOD in generating responses equitably aligned with diverse objectives, outperforming baselines up to 20%.",
    thumbnail: paperThumbnail2
  },
  {
    year: "2025",
    title: "This Is Your Doge, If It Please You: Exploring Deception and Robustness in Mixture of LLMs",
    authors: "L Wolf, S Yoon, I Bogunovic",
    venue: "arXiv preprint arXiv:2503.05856",
    type: "Preprint",
    arxivLink: "https://arxiv.org/abs/2503.05856",
    abstract: "Mixture of large language model (LLMs) Agents (MoA) architectures achieve state-of-the-art performance on prominent benchmarks like AlpacaEval 2.0 by leveraging the collaboration of multiple LLMs at inference time. Despite these successes, an evaluation of the safety and reliability of MoA is missing. We present the first comprehensive study of MoA's robustness against deceptive LLM agents that deliberately provide misleading responses. We examine factors like the propagation of deceptive information, model size, and information availability, and uncover critical vulnerabilities. On AlpacaEval 2.0, the popular LLaMA 3.1-70B model achieves a length-controlled Win Rate (LC WR) of 49.2% when coupled with 3-layer MoA (6 LLM agents). However, we demonstrate that introducing only a single carefully-instructed deceptive agent into the MoA can reduce performance to 37.9%, effectively nullifying all MoA gains. On QuALITY, a multiple-choice comprehension task, the impact is also severe, with accuracy plummeting by a staggering 48.5%. Inspired in part by the historical Doge of Venice voting process, designed to minimize influence and deception, we propose a range of unsupervised defense mechanisms that recover most of the lost performance.",
    thumbnail: paperThumbnail3
  },
  {
    year: "2025",
    title: "RSPO: Regularized Self-Play Alignment of Large Language Models",
    authors: "X Tang, S Yoon, S Son, H Yuan, Q Gu, I Bogunovic",
    venue: "arXiv preprint arXiv:2503.00030",
    type: "Preprint",
    arxivLink: "https://arxiv.org/abs/2503.00030",
    abstract: "Self-play alignment has emerged as an effective approach for fine-tuning large language models (LLMs), formulating preference optimization as a two-player game. However, the regularization with respect to the reference policy, which is crucial for mitigating over-optimization, has been insufficiently investigated in self-play alignment. To study the impact of different regularization strategies, we propose Regularized Self-Play Policy Optimization (RSPO), a general and modular framework that unifies prior methods and enables simple plug-and-play integration of various regularizers, meanwhile preserving convergence to Nash equilibrium of the corresponding regularized game. Our empirical study involving over 120 fine-tuned Mistral-7B-Instruct models reveals that forward KL divergence regularization reduces response length, whereas reverse KL divergence markedly improves raw win rates. Crucially, RSPO regularized with a linear combination of forward and reverse KL divergence significantly boosts the length-controlled win rate on AlpacaEval-2 from 28.5% (unregularized self-play, SPPO) to 35.4%, and consistently demonstrates superior performance on Arena-Hard, MT-Bench, ArmoRM scores, and response diversity. Combining simplicity, convergence guarantees, and significant empirical gains, RSPO offers a strong foundation for exploring regularized self-play in language model alignment.",
    thumbnail: paperThumbnail4
  },
  {
    year: "2025",
    title: "Almost Surely Safe Alignment of Large Language Models at Inference-Time",
    authors: "X Ji, SS Ramesh, M Zimmer, I Bogunovic, J Wang, HB Ammar",
    venue: "arXiv preprint arXiv:2502.01208",
    type: "Preprint",
    arxivLink: "https://arxiv.org/abs/2502.01208",
    abstract: "We introduce a novel inference-time alignment approach for LLMs that aims to generate safe responses almost surely, i.e., with probability approaching one. Our approach models the generation of safe responses as a constrained Markov Decision Process (MDP) within the LLM's latent space. We augment a safety state that tracks the evolution of safety constraints and dynamically penalize unsafe generations to ensure the generation of safe responses. Consequently, we demonstrate formal safety guarantees w.r.t. the given cost model upon solving the MDP in the latent space with sufficiently large penalties. Building on this foundation, we propose InferenceGuard, a practical implementation that safely aligns LLMs without modifying the model weights. Empirically, we demonstrate that InferenceGuard effectively balances safety and task performance, outperforming existing inference-time alignment methods in generating safe and aligned responses. Our findings contribute to the advancement of safer LLM deployment through alignment at inference-time, thus presenting a promising alternative to resource-intensive, overfitting-prone alignment techniques like RLHF.",
    thumbnail: paperThumbnail5
  }
];

const Publications = () => {
  const newestPublications = publications.slice(0, 5);
  
  const publicationsByYear = publications.reduce((acc, paper) => {
    if (!acc[paper.year]) {
      acc[paper.year] = [];
    }
    acc[paper.year].push(paper);
    return acc;
  }, {} as Record<string, typeof publications>);

  const sortedYears = Object.keys(publicationsByYear).sort((a, b) => parseInt(b) - parseInt(a));
  
  const renderPublications = (publicationList: typeof publications) => (
    <div className="space-y-10">
      {publicationList.map((paper, index) => (
        <div key={index} className="flex gap-6">
          <div className="flex-shrink-0">
            <img 
              src={paper.thumbnail} 
              alt={`${paper.title} paper preview`}
              className="w-48 h-64 object-cover rounded border border-border shadow-sm"
            />
          </div>
          <div className="flex-1 space-y-3">
            <a 
              href={paper.arxivLink}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-xl font-semibold text-accent-vibrant hover:text-accent-vibrant/80 transition-colors cursor-pointer block"
            >
              {paper.title}
            </a>
            <p className="font-body text-muted-foreground text-sm">
              {paper.authors}
            </p>
            <p className="font-body text-muted-foreground italic text-sm">
              {paper.venue}, {paper.year}
            </p>
            <p className="font-body text-foreground leading-relaxed">
              {paper.abstract}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a 
                href={paper.arxivLink}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm text-accent-vibrant hover:text-accent-vibrant/80 transition-colors"
              >
                arXiv Link
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderPublicationsByYear = () => (
    <div className="space-y-12">
      {sortedYears.map(year => (
        <div key={year}>
          <h2 className="font-display text-2xl font-bold text-foreground mb-6 border-b border-border pb-2">
            {year}
          </h2>
          <div className="space-y-8">
            {publicationsByYear[year].map((paper, index) => (
              <div key={index} className="space-y-3">
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  {paper.authors}
                </p>
                <h3 className="font-display text-lg font-semibold text-accent-vibrant hover:text-accent-vibrant/80 transition-colors">
                  {paper.title}
                </h3>
                <p className="font-body text-muted-foreground">
                  In: {paper.venue}, {paper.year}.
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-body text-accent-vibrant hover:text-accent-vibrant/80 cursor-pointer">
                    Links
                  </span>
                  <span className="text-muted-foreground">|</span>
                  <span className="font-body text-accent-vibrant hover:text-accent-vibrant/80 cursor-pointer">
                    BibTeX
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <Layout>
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="flex justify-between items-start mb-8">
              <div className="text-center flex-1">
                <h1 className="font-display text-4xl font-bold text-foreground mb-4">
                  Publications
                </h1>
                <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
                  Research contributions to the scientific community through peer-reviewed 
                  publications in top-tier conferences and journals.
                </p>
              </div>
              
              <div className="bg-muted/50 rounded-lg p-4 ml-8">
                <p className="font-body text-foreground text-sm mb-3">
                  For an up to date publication list:
                </p>
                <a 
                  href="https://scholar.google.com/citations?user=xMvt3NEAAAAJ&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-accent-vibrant text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-accent-vibrant/90 transition-colors"
                >
                  Google Scholar
                </a>
              </div>
            </div>
          </div>

          <Tabs defaultValue="newest" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
              <TabsTrigger value="newest">Newest Publications</TabsTrigger>
              <TabsTrigger value="all">All Publications</TabsTrigger>
            </TabsList>
            
            <TabsContent value="newest">
              {renderPublications(newestPublications)}
            </TabsContent>
            
            <TabsContent value="all">
              {renderPublicationsByYear()}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Publications;