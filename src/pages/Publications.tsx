import Layout from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PDFThumbnail from "@/components/PDFThumbnail";
import { useState } from "react";
import { Link } from "react-router-dom";

// Mapping of author names to their profile routes
const authorRoutes: Record<string, string> = {
  "Ilija Bogunovic": "/team/ilija-bogunovic",
  "William Bankes": "/team/william-bankes",
  "Shyam Sundhar Ramesh": "/team/shyam-sundhar-ramesh",
  "Xiaohang Tang": "/team/xiaohang-tang",
  "Theodore Brown": "/team/theo-brown",
  "Theo Brown": "/team/theo-brown",
  "Seong Ho": "/team/seong-ho",
  "Seongho Son": "/team/seong-ho",
  "Zhe Wang": "/team/zhe-wang",
  "Ahmet Hamdi Güzel": "/team/ahmet-h-guzel",
  "Ahmet H. Guzel": "/team/ahmet-h-guzel",
  "Abdelhamid Ezzerg": "/team/abdelhamid-ezzerg",
  "Sangwoong Yoon": "/team/sangwoong-yoon"
};

// Function to render author names with clickable links for team members
const renderAuthors = (authors: string) => {
  const authorList = authors.split(',').map(author => author.trim());
  
  return authorList.map((author, index) => {
    const route = authorRoutes[author];
    const isLast = index === authorList.length - 1;
    const separator = isLast ? '' : ', ';
    
    if (route) {
      return (
        <span key={index}>
          <Link 
            to={route}
            className="text-accent-vibrant hover:text-accent-vibrant/80 hover:underline transition-colors"
          >
            {author}
          </Link>
          {separator}
        </span>
      );
    } else {
      return (
        <span key={index}>
          {author}{separator}
        </span>
      );
    }
  });
};

export const publications = [
  {
    year: "2025",
    title: "wd1: Weighted Policy Optimization for Reasoning in Diffusion Language Models",
    authors: "Xiaohang Tang, Rares Dolga, Sangwoong Yoon, Ilija Bogunovic",
    venue: "arXiv preprint arXiv:2507.08838",
    type: "Preprint",
    arxivLink: "https://arxiv.org/abs/2507.08838",
    abstract: "Improving the reasoning capabilities of diffusion-based large language models (dLLMs) through reinforcement learning (RL) remains an open problem. The intractability of dLLMs likelihood function necessitates approximating the current, old, and reference policy likelihoods at each policy optimization step...",
    pdfFile: "https://arxiv.org/pdf/2507.08838.pdf"
  },
  {
    year: "2025",
    title: "Robust Multi-Objective Controlled Decoding of Large Language Models",
    authors: "Seongho Son, William Bankes, Sangwoong Yoon, Shyam Sundhar Ramesh, Xiaohang Tang, Ilija Bogunovic",
    venue: "arXiv preprint arXiv:2503.08796",
    type: "Preprint",
    arxivLink: "https://arxiv.org/abs/2503.08796",
    abstract: "Test-time alignment of Large Language Models (LLMs) to human preferences offers a flexible way to generate responses aligned to diverse objectives without extensive retraining of LLMs. Existing methods achieve alignment to multiple objectives simultaneously...",
    pdfFile: "https://arxiv.org/pdf/2503.08796.pdf"
  },
  {
    year: "2025",
    title: "This Is Your Doge, If It Please You: Exploring Deception and Robustness in Mixture of LLMs",
    authors: "Lorenz Wolf, Sangwoong Yoon, Ilija Bogunovic",
    venue: "arXiv preprint arXiv:2503.05856",
    type: "Preprint",
    arxivLink: "https://arxiv.org/abs/2503.05856",
    abstract: "Mixture of large language model (LLMs) Agents (MoA) architectures achieve state-of-the-art performance on prominent benchmarks like AlpacaEval 2.0 by leveraging the collaboration of multiple LLMs at inference time. Despite these successes, an evaluation of the safety and reliability of MoA is missing...",
    pdfFile: "https://arxiv.org/pdf/2503.05856.pdf"
  },
  {
    year: "2025",
    title: "RSPO: Regularized Self-Play Alignment of Large Language Models",
    authors: "Xiaohang Tang, Sangwoong Yoon, Seongho Son, Huizhuo Yuan, Quanquan Gu, Ilija Bogunovic",
    venue: "arXiv preprint arXiv:2503.00030",
    type: "Preprint",
    arxivLink: "https://arxiv.org/abs/2503.00030",
    abstract: "Self-play alignment has emerged as an effective approach for fine-tuning large language models (LLMs), formulating preference optimization as a two-player game. However, the regularization with respect to the reference policy, which is crucial for mitigating over-optimization, has been insufficiently investigated in self-play alignment...",
    pdfFile: "https://arxiv.org/pdf/2503.00030.pdf"
  },
  {
    year: "2025",
    title: "Almost Surely Safe Alignment of Large Language Models at Inference-Time",
    authors: "Xiaotong Ji, Shyam Sundhar Ramesh, Matthieu Zimmer, Ilija Bogunovic, Jun Wang, Haitham Bou Ammar",
    venue: "arXiv preprint arXiv:2502.01208",
    type: "Preprint",
    arxivLink: "https://arxiv.org/abs/2502.01208",
    abstract: "We introduce a novel inference-time alignment approach for LLMs that aims to generate safe responses almost surely, i.e., with probability approaching one. Our approach models the generation of safe responses as a constrained Markov Decision Process (MDP) within the LLM's latent space...",
    pdfFile: "https://arxiv.org/pdf/2502.01208.pdf"
  },
  {
    year: "2025",
    title: "PROSAC: Provably Safe Certification for Machine Learning Models under Adversarial Attacks",
    authors: "Chen Feng, Ziquan Liu, Zhuo Zhi, Ilija Bogunovic, Carsten Gerner-Beuerle, Miguel Rodrigues",
    venue: "AAAI Conference on Artificial Intelligence (AAAI)",
    type: "Conference Paper",
    abstract: "Addresses provably safe certification for machine learning models under adversarial attacks."
  },
  {
    year: "2025",
    title: "Synthetic Data is Sufficient for Zero-Shot Visual Generalization from Offline Data",
    authors: "Ahmet Hamdi Güzel, Jack Parker-Holder, Ilija Bogunovic",
    venue: "Transactions on Machine Learning Research (TMLR)",
    type: "Journal Article",
    abstract: "Demonstrates that synthetic data can achieve zero-shot visual generalization from offline datasets."
  },
  {
    year: "2025",
    title: "No-Regret Linear Bandits under Gap-Adjusted Misspecification",
    authors: "Chong Liu, Dan Qiao, Ming Yin, Yu-Xiang Wang, Ilija Bogunovic",
    venue: "arXiv preprint",
    type: "Preprint",
    abstract: "Addresses linear bandit problems under misspecification with gap-adjusted analysis."
  },
  {
    year: "2025",
    title: "Mean-Field Bayesian Optimisation",
    authors: "Petar Steinberg, Juliusz Ziomek, Matej Jusup, Ilija Bogunovic",
    venue: "arXiv preprint",
    type: "Preprint",
    abstract: "Introduces mean-field approaches to Bayesian optimization for large-scale problems."
  },
  {
    year: "2024",
    title: "Sample-efficient Bayesian Optimisation Using Known Invariances",
    authors: "Theodore Brown, Alexandru Cioba, Ilija Bogunovic",
    venue: "Conference on Neural Information Processing Systems (NeurIPS)",
    type: "Conference Paper",
    arxivLink: "https://arxiv.org/abs/2410.16972",
    pdfFile: "https://arxiv.org/pdf/2410.16972.pdf",
    abstract: "Focuses on Bayesian optimisation for functions exhibiting invariance to known group transformations, proposing invariance-aware algorithms that achieve significant improvements in sample efficiency."
  },
  {
    year: "2024",
    title: "Distributionally Robust Model-based Reinforcement Learning with Large State Spaces",
    authors: "Shyam Sundhar Ramesh, Pier Giuseppe Sessa, Yifan Hu, Andreas Krause, Ilija Bogunovic",
    venue: "International Conference on Artificial Intelligence and Statistics (AISTATS)",
    type: "Conference Paper",
    arxivLink: "https://arxiv.org/abs/2309.02236",
    pdfFile: "https://arxiv.org/pdf/2309.02236.pdf",
    abstract: "Addresses distributionally robust Markov decision processes with continuous state spaces, proposing a model-based approach using Gaussian Processes for efficient learning of multi-output nominal transition dynamics."
  },
  {
    year: "2024",
    title: "Sample Efficient Reinforcement Learning from Human Feedback via Active Exploration",
    authors: "Viraj Mehta, Vikramjeet Das, Ojash Neopane, Yijia Dai, Ilija Bogunovic, Jeff G. Schneider, Willie Neiswanger",
    venue: "arXiv preprint arXiv:2312.00267",
    type: "Preprint",
    arxivLink: "https://arxiv.org/abs/2312.00267",
    pdfFile: "https://arxiv.org/pdf/2312.00267.pdf",
    abstract: "Proposes active exploration techniques for sample efficient reinforcement learning from human feedback."
  },
  {
    year: "2024",
    title: "Safe Model-Based Multi-Agent Mean-Field Reinforcement Learning",
    authors: "Matej Jusup, Barna Pásztor, Tadeusz Janik, Kenan Zhang, Francesco Corman, Andreas Krause, Ilija Bogunovic",
    venue: "International Conference on Autonomous Agents and Multiagent Systems (AAMAS)",
    type: "Conference Paper",
    abstract: "Addresses safe multi-agent reinforcement learning in mean-field settings using model-based approaches."
  },
  {
    year: "2024",
    title: "Right Now, Wrong Then: Non-Stationary Direct Preference Optimization under Preference Drift",
    authors: "Seongho Son, William Bankes, Sayak Ray Chowdhury, Brooks Paige, Ilija Bogunovic",
    venue: "arXiv preprint arXiv:2407.18676",
    type: "Preprint",
    arxivLink: "https://arxiv.org/abs/2407.18676",
    pdfFile: "https://arxiv.org/pdf/2407.18676.pdf",
    abstract: "Addresses non-stationary preference learning in the context of preference drift over time."
  },
  {
    year: "2024",
    title: "Adversarial Robust Decision Transformer: Enhancing Robustness of RvS via Minimax Returns-to-go",
    authors: "Xiaohang Tang, Afonso Marques, Parameswaran Kamalaruban, Ilija Bogunovic",
    venue: "Conference on Neural Information Processing Systems (NeurIPS)",
    type: "Conference Paper",
    arxivLink: "https://arxiv.org/abs/2407.18414",
    pdfFile: "https://arxiv.org/pdf/2407.18414.pdf",
    abstract: "Enhances robustness of reward-conditioned sequence modeling via minimax returns-to-go."
  },
  {
    year: "2024",
    title: "Group Robust Preference Optimization in Reward-free RLHF",
    authors: "Shyam Sundhar Ramesh, Yifan Hu, Iason Chaimalas, Viraj Mehta, Pier Giuseppe Sessa, Haitham Bou Ammar, Ilija Bogunovic",
    venue: "Conference on Neural Information Processing Systems (NeurIPS)",
    type: "Conference Paper",
    arxivLink: "https://arxiv.org/abs/2405.20304",
    pdfFile: "https://arxiv.org/pdf/2405.20304.pdf",
    abstract: "Addresses group robustness in preference optimization for reinforcement learning from human feedback."
  },
  {
    year: "2023",
    title: "Near-optimal Policy Identification in Active Reinforcement Learning",
    authors: "Xiang Li, Viraj Mehta, Johannes Kirschner, Ian Char, Willie Neiswanger, Jeff Schneider, Andreas Krause, Ilija Bogunovic",
    venue: "International Conference on Learning Representations (ICLR)",
    type: "Conference Paper",
    arxivLink: "https://arxiv.org/abs/2212.09510",
    pdfFile: "https://arxiv.org/pdf/2212.09510.pdf",
    abstract: "Proposes the AE-LSVI algorithm for best-policy identification, combining optimism with pessimism for active exploration in reinforcement learning with costly data acquisition and large state spaces."
  },
  {
    year: "2023",
    title: "Efficient Planning in Combinatorial Action Spaces with Applications to Cooperative Multi-Agent Reinforcement Learning",
    authors: "Ilija Bogunovic, Andreas Krause, Volkan Cevher",
    venue: "International Conference on Artificial Intelligence and Statistics (AISTATS)",
    type: "Conference Paper",
    abstract: "Addresses efficient planning in combinatorial action spaces with applications to cooperative multi-agent reinforcement learning."
  },
  {
    year: "2022",
    title: "A Robust Phased Elimination Algorithm for Corruption-Tolerant Gaussian Process Bandits",
    authors: "Ilija Bogunovic, Andreas Krause, Jonathan Scarlett",
    venue: "Conference on Neural Information Processing Systems (NeurIPS)",
    type: "Conference Paper",
    abstract: "Proposes a robust algorithm for Gaussian process bandits that tolerates adversarial corruption in observations."
  },
  {
    year: "2022",
    title: "Graph Neural Network Bandits",
    authors: "Ilija Bogunovic, Zhao Song, Suvrit Sra",
    venue: "Conference on Neural Information Processing Systems (NeurIPS)",
    type: "Conference Paper",
    abstract: "Introduces bandit algorithms that leverage graph neural networks for improved exploration in structured environments."
  },
  {
    year: "2022",
    title: "Movement Penalized Bayesian Optimization with Application to Wind Energy Systems",
    authors: "Ilija Bogunovic, Jonathan Scarlett, Stefanie Jegelka, Volkan Cevher",
    venue: "Conference on Neural Information Processing Systems (NeurIPS)",
    type: "Conference Paper",
    abstract: "Develops Bayesian optimization methods that penalize movement costs, with applications to wind energy system optimization."
  },
  {
    year: "2022",
    title: "Sequential Optimization with Adversarial Corruption",
    authors: "Ilija Bogunovic, Zihan Li, Andreas Krause, Jonathan Scarlett",
    venue: "International Conference on Machine Learning (ICML)",
    type: "Conference Paper",
    abstract: "Considers sequential optimization of unknown, continuous, expensive-to-evaluate reward functions from noisy and adversarially corrupted observed rewards."
  },
  {
    year: "2022",
    title: "Contextual Bayesian Optimization",
    authors: "Shyam Sundhar Ramesh, Pier Giuseppe Sessa, Andreas Krause, Ilija Bogunovic",
    venue: "International Conference on Machine Learning (ICML)",
    type: "Conference Paper",
    abstract: "Describes CBO as a powerful framework for sequential decision-making given side information."
  },
  {
    year: "2021",
    title: "Misspecified Gaussian Process Bandit Optimization",
    authors: "Ilija Bogunovic, Andreas Krause",
    venue: "Conference on Neural Information Processing Systems (NeurIPS)",
    type: "Conference Paper",
    abstract: "Considers optimizing black-box functions with noisy bandit feedback in a misspecified kernelized bandit setting where the unknown function can be ε-uniformly approximated by a function with bounded norm in some RKHS."
  },
  {
    year: "2021",
    title: "Combining Pessimism with Optimism for Robust and Efficient Model-Based Deep Reinforcement Learning",
    authors: "Sebastian Curi, Ilija Bogunovic, Andreas Krause",
    venue: "International Conference on Machine Learning (ICML)",
    type: "Conference Paper",
    abstract: "Proposes the Robust Hallucinated Upper-Confidence RL (RH-UCRL) algorithm to solve robust RL problems while attaining near-optimal sample complexity guarantees."
  },
  {
    year: "2020",
    title: "Contextual Games",
    authors: "Pier Giuseppe Sessa, Ilija Bogunovic, Andreas Krause, Maryam Kamgarpour",
    venue: "Conference on Neural Information Processing Systems (NeurIPS)",
    type: "Conference Paper",
    arxivLink: "https://arxiv.org/abs/2107.06327",
    pdfFile: "https://arxiv.org/pdf/2107.06327.pdf",
    abstract: "Formulates the novel class of contextual games, a type of repeated games driven by contextual information at each round."
  },
  {
    year: "2020",
    title: "Distributionally Robust Bayesian Optimization",
    authors: "Johannes Kirschner, Ilija Bogunovic, Stefanie Jegelka, Andreas Krause",
    venue: "International Conference on Artificial Intelligence and Statistics (AISTATS)",
    type: "Conference Paper",
    arxivLink: "https://arxiv.org/abs/2002.09038",
    pdfFile: "https://arxiv.org/pdf/2002.09038.pdf",
    abstract: "Addresses robust optimization problems in Bayesian optimization under distributional uncertainty."
  },
  {
    year: "2019",
    title: "No-Regret Learning in Unknown Games with Correlated Payoffs",
    authors: "Pier Giuseppe Sessa, Ilija Bogunovic, Maryam Kamgarpour, Andreas Krause",
    venue: "Conference on Neural Information Processing Systems (NeurIPS)",
    type: "Conference Paper",
    arxivLink: "https://arxiv.org/abs/1909.08540",
    pdfFile: "https://arxiv.org/pdf/1909.08540.pdf",
    abstract: "Formulates the novel class of contextual games, a type of repeated games driven by contextual information at each round."
  },
  {
    year: "2019",
    title: "Overlapping Multi-Bandit Best Arm Identification",
    authors: "Jonathan Scarlett, Ilija Bogunovic, Volkan Cevher",
    venue: "IEEE International Symposium on Information Theory (ISIT)",
    type: "Conference Paper",
    abstract: "Addresses the best arm identification problem in overlapping multi-bandit settings."
  },
  {
    year: "2018",
    title: "High-Dimensional Bayesian Optimization via Additive Models with Overlapping Groups",
    authors: "Paul Rolland, Jonathan Scarlett, Ilija Bogunovic, Volkan Cevher",
    venue: "International Conference on Artificial Intelligence and Statistics (AISTATS)",
    type: "Conference Paper",
    arxivLink: "https://arxiv.org/abs/1802.07028",
    pdfFile: "https://arxiv.org/pdf/1802.07028.pdf",
    abstract: "Proposes additive models with overlapping groups for high-dimensional Bayesian optimization."
  },
  {
    year: "2018",
    title: "Robust Maximization of Non-Submodular Objectives",
    authors: "Ilija Bogunovic, Junyao Zhao, Volkan Cevher",
    venue: "International Conference on Artificial Intelligence and Statistics (AISTATS)",
    type: "Conference Paper",
    arxivLink: "https://arxiv.org/abs/1802.07073",
    pdfFile: "https://arxiv.org/pdf/1802.07073.pdf",
    abstract: "Addresses robust maximization problems for non-submodular objective functions."
  },
  {
    year: "2017",
    title: "Lower Bounds on Regret for Noisy Gaussian Process Bandit Optimization",
    authors: "Jonathan Scarlett, Ilija Bogunovic, Volkan Cevher",
    venue: "Conference on Learning Theory (COLT)",
    type: "Conference Paper",
    arxivLink: "https://arxiv.org/abs/1706.00090",
    pdfFile: "https://arxiv.org/pdf/1706.00090.pdf",
    abstract: "Establishes theoretical lower bounds for regret in noisy Gaussian process bandit optimization."
  },
  {
    year: "2017",
    title: "Robust Submodular Maximization: A Non-Uniform Partitioning Approach",
    authors: "Ilija Bogunovic, Slobodan Mitrović, Jonathan Scarlett, Volkan Cevher",
    venue: "International Conference on Machine Learning (ICML)",
    type: "Conference Paper",
    arxivLink: "https://arxiv.org/abs/1706.04918",
    pdfFile: "https://arxiv.org/pdf/1706.04918.pdf",
    abstract: "Proposes a non-uniform partitioning approach for robust submodular maximization."
  },
  {
    year: "2017",
    title: "Streaming Robust Submodular Maximization: A Partitioned Thresholding Approach",
    authors: "Slobodan Mitrović, Ilija Bogunovic, Ashkan Norouzi-Fard, Jakub Tarnawski, Volkan Cevher",
    venue: "Conference on Neural Information Processing Systems (NeurIPS)",
    type: "Conference Paper",
    arxivLink: "https://arxiv.org/abs/1711.02598",
    pdfFile: "https://arxiv.org/pdf/1711.02598.pdf",
    abstract: "Proposes a robust streaming algorithm for submodular maximization using a partitioned thresholding approach that maintains performance even when elements are adversarially removed."
  },
  {
    year: "2018",
    title: "Adversarially Robust Optimization with Gaussian Processes",
    authors: "Ilija Bogunovic, Jonathan Scarlett, Stefanie Jegelka, Volkan Cevher",
    venue: "Conference on Neural Information Processing Systems (NeurIPS)",
    type: "Conference Paper",
    arxivLink: "https://arxiv.org/abs/1810.10775",
    pdfFile: "https://arxiv.org/pdf/1810.10775.pdf",
    abstract: "Addresses robust optimization problems using Gaussian processes in adversarial settings."
  },
  {
    year: "2016",
    title: "Learning-based Compressive Subsampling",
    authors: "Luca Baldassarre, Yen-Huan Li, Jonathan Scarlett, Baran Gözcü, Ilija Bogunovic, Volkan Cevher",
    venue: "IEEE Journal of Selected Topics in Signal Processing",
    type: "Journal Article",
    arxivLink: "https://arxiv.org/abs/1510.06188",
    pdfFile: "https://arxiv.org/pdf/1510.06188.pdf",
    abstract: "Proposes learning-based approaches for compressive subsampling in signal processing applications."
  },
  {
    year: "2016",
    title: "Time-Varying Gaussian Process Bandit Optimization",
    authors: "Ilija Bogunovic, Jonathan Scarlett, Volkan Cevher",
    venue: "International Conference on Artificial Intelligence and Statistics (AISTATS)",
    type: "Conference Paper",
    arxivLink: "https://arxiv.org/abs/1601.06650",
    pdfFile: "https://arxiv.org/pdf/1601.06650.pdf",
    abstract: "Considers sequential Bayesian optimization problems with bandit feedback, modeling the reward function using a Gaussian process whose evolution obeys a simple Markov model."
  },
  {
    year: "2016",
    title: "An Efficient Streaming Algorithm for the Submodular Cover Problem",
    authors: "Ashkan Norouzi-Fard, Abbas Bazzi, Marwa El Halabi, Ilija Bogunovic, Ya-Ping Hsieh, Volkan Cevher",
    venue: "Conference on Neural Information Processing Systems (NeurIPS)",
    type: "Conference Paper",
    arxivLink: "https://arxiv.org/abs/1611.08574",
    pdfFile: "https://arxiv.org/pdf/1611.08574.pdf",
    abstract: "Proposes an efficient streaming algorithm for solving the submodular cover problem with theoretical guarantees."
  },
  {
    year: "2016",
    title: "Truncated Variance Reduction: A Unified Approach to Bayesian Optimization and Level-Set Estimation",
    authors: "Ilija Bogunovic, Jonathan Scarlett, Andreas Krause, Volkan Cevher",
    venue: "Conference on Neural Information Processing Systems (NeurIPS)",
    type: "Conference Paper",
    arxivLink: "https://arxiv.org/abs/1610.07379",
    pdfFile: "https://arxiv.org/pdf/1610.07379.pdf",
    abstract: "Presents the truncated variance reduction (TruVaR) algorithm that treats Bayesian optimization and level-set estimation with Gaussian processes in a unified fashion."
  }
];

const Publications = () => {
  const [showBibTeX, setShowBibTeX] = useState<string | null>(null);
  const newestPublications = publications.slice(0, 5);
  
  const publicationsByYear = publications.reduce((acc, paper) => {
    if (!acc[paper.year]) {
      acc[paper.year] = [];
    }
    acc[paper.year].push(paper);
    return acc;
  }, {} as Record<string, typeof publications>);

  const sortedYears = Object.keys(publicationsByYear).sort((a, b) => parseInt(b) - parseInt(a));
  
  const renderRecentPublications = (publicationList: typeof publications) => {
    const publicationsByYear = publicationList.reduce((acc, paper) => {
      if (!acc[paper.year]) {
        acc[paper.year] = [];
      }
      acc[paper.year].push(paper);
      return acc;
    }, {} as Record<string, typeof publications>);

    const sortedYears = Object.keys(publicationsByYear).sort((a, b) => parseInt(b) - parseInt(a));

    return (
      <div className="space-y-12">
        {sortedYears.map(year => (
          <div key={year}>
            <h2 className="font-display text-2xl font-bold text-foreground mb-6 border-b border-border pb-2">
              {year}
            </h2>
            <div className="space-y-10">
              {publicationsByYear[year].map((paper, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <PDFThumbnail
                      file={paper.pdfFile}
                      alt={`${paper.title} paper preview`}
                      className="w-48 h-64"
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
                      {renderAuthors(paper.authors)}
                    </p>
                    <p className="font-body text-muted-foreground italic text-sm">
                      {paper.venue}, {paper.year}
                    </p>
                    <p className="font-body text-foreground leading-relaxed">
                      {paper.abstract}
                    </p>
                    <div className="flex items-center gap-3 pt-2">
                      {paper.arxivLink && (
                        <>
                          <a 
                            href={paper.arxivLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-body text-sm text-accent-vibrant hover:text-accent-vibrant/80 transition-colors"
                          >
                            arXiv
                          </a>
                          <span className="text-muted-foreground">|</span>
                        </>
                      )}
                      {paper.pdfFile && (
                        <>
                          <a
                            href={paper.pdfFile}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-body text-sm text-accent-vibrant hover:text-accent-vibrant/80 transition-colors"
                          >
                            PDF
                          </a>
                          <span className="text-muted-foreground">|</span>
                        </>
                      )}
                      {(paper as any).githubLink && (
                        <>
                          <a
                            href={(paper as any).githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-body text-sm text-accent-vibrant hover:text-accent-vibrant/80 transition-colors"
                          >
                            GitHub
                          </a>
                          <span className="text-muted-foreground">|</span>
                        </>
                      )}
                      {(paper as any).codeLink && (
                        <>
                          <a
                            href={(paper as any).codeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-body text-sm text-accent-vibrant hover:text-accent-vibrant/80 transition-colors"
                          >
                            Code
                          </a>
                          <span className="text-muted-foreground">|</span>
                        </>
                      )}
                      {(paper as any).videoLink && (
                        <>
                          <a
                            href={(paper as any).videoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-body text-sm text-accent-vibrant hover:text-accent-vibrant/80 transition-colors"
                          >
                            Video
                          </a>
                          <span className="text-muted-foreground">|</span>
                        </>
                      )}
                      {(paper as any).blogLink && (
                        <>
                          <a
                            href={(paper as any).blogLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-body text-sm text-accent-vibrant hover:text-accent-vibrant/80 transition-colors"
                          >
                            Blog
                          </a>
                          <span className="text-muted-foreground">|</span>
                        </>
                      )}
                      {(paper as any).websiteLink && (
                        <>
                          <a
                            href={(paper as any).websiteLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-body text-sm text-accent-vibrant hover:text-accent-vibrant/80 transition-colors"
                          >
                            Website
                          </a>
                          <span className="text-muted-foreground">|</span>
                        </>
                      )}
                      {(paper as any).slidesLink && (
                        <>
                          <a
                            href={(paper as any).slidesLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-body text-sm text-accent-vibrant hover:text-accent-vibrant/80 transition-colors"
                          >
                            Slides
                          </a>
                          <span className="text-muted-foreground">|</span>
                        </>
                      )}
                      <button
                        onClick={() => toggleBibTeX(`recent-${index}`)}
                        className="font-body text-sm text-accent-vibrant hover:text-accent-vibrant/80 cursor-pointer bg-transparent border-0 p-0"
                        style={{ background: 'none', border: 'none', padding: 0, font: 'inherit' }}
                      >
                        BibTeX
                      </button>
                    </div>
                    {showBibTeX === `recent-${index}` && (
                      <div className="mt-4 p-4 bg-muted/50 rounded-md border">
                        <pre className="text-sm font-mono whitespace-pre-wrap overflow-x-auto">
                          {generateBibTeX(paper)}
                        </pre>
                        <button
                          onClick={() => navigator.clipboard.writeText(generateBibTeX(paper))}
                          className="mt-2 px-3 py-1 text-xs bg-accent-vibrant text-white rounded hover:bg-accent-vibrant/90"
                        >
                          Copy to Clipboard
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const generateBibTeX = (paper: typeof publications[0]) => {
    // Create a clean key from author and title
    const firstAuthor = paper.authors.split(',')[0].trim().split(' ').pop()?.toLowerCase() || 'author';
    const firstWord = paper.title.split(' ')[0].toLowerCase().replace(/[^a-z]/g, '');
    const key = `${firstAuthor}${paper.year}${firstWord}`;
    
    // Clean up fields for BibTeX format
    const cleanTitle = paper.title.replace(/[{}]/g, '');
    const cleanAbstract = paper.abstract?.replace(/[{}]/g, '').substring(0, 500) + (paper.abstract && paper.abstract.length > 500 ? '...' : '');
    
    // Determine BibTeX entry type and appropriate fields based on publication type and venue
    let entryType = 'misc';
    let venueField = 'howpublished';
    
    if (paper.type === 'Journal Article') {
      entryType = 'article';
      venueField = 'journal';
    } else if (paper.type === 'Conference Paper') {
      entryType = 'inproceedings';
      venueField = 'booktitle';
    } else if (paper.type === 'Preprint' || paper.venue?.includes('arXiv')) {
      entryType = 'misc';
      venueField = 'howpublished';
    }
    
    // Start building BibTeX entry
    let bibtex = `@${entryType}{${key},\n`;
    bibtex += `  title={${cleanTitle}},\n`;
    bibtex += `  author={${paper.authors}},\n`;
    bibtex += `  year={${paper.year}}`;
    
    // Add venue using appropriate field name
    if (paper.venue) {
      bibtex += `,\n  ${venueField}={${paper.venue}}`;
    }
    
    // Add URL (arXiv link or other)
    if (paper.arxivLink) {
      bibtex += `,\n  url={${paper.arxivLink}}`;
    }
    
    // Add abstract
    if (cleanAbstract) {
      bibtex += `,\n  abstract={${cleanAbstract}}`;
    }
    
    // Add additional fields for specific entry types
    if (entryType === 'article' && paper.venue) {
      // For journal articles, you might want to add volume, number, pages if available
      // Currently we only have the full venue string
    } else if (entryType === 'inproceedings' && paper.venue) {
      // For conference papers, venue is already in booktitle
      // You could add organization, address, pages if available
    }
    
    bibtex += `\n}`;
    return bibtex;
  };

  const toggleBibTeX = (paperIndex: string) => {
    setShowBibTeX(showBibTeX === paperIndex ? null : paperIndex);
  };

  const renderAllPublications = () => (
    <div className="space-y-12">
      {sortedYears.map(year => (
        <div key={year}>
          <h2 className="font-display text-2xl font-bold text-foreground mb-6 border-b border-border pb-2">
            {year}
          </h2>
          <div className="space-y-8">
            {publicationsByYear[year].map((paper, index) => {
              const paperKey = `${year}-${index}`;
              return (
                <div key={index} className="space-y-3">
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">
                    {renderAuthors(paper.authors)}
                  </p>
                  <h3 className="font-display text-lg font-semibold text-accent-vibrant hover:text-accent-vibrant/80 transition-colors">
                    <a 
                      href={paper.arxivLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {paper.title}
                    </a>
                  </h3>
                  <p className="font-body text-muted-foreground">
                    In: {paper.venue}, {paper.year}.
                  </p>
                  <div className="flex items-center gap-2 text-sm">
                    {paper.arxivLink && (
                      <>
                        <a
                          href={paper.arxivLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-body text-accent-vibrant hover:text-accent-vibrant/80 cursor-pointer"
                        >
                          arXiv
                        </a>
                        <span className="text-muted-foreground">|</span>
                      </>
                    )}
                    {paper.pdfFile && (
                      <>
                        <a
                          href={paper.pdfFile}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-body text-accent-vibrant hover:text-accent-vibrant/80 cursor-pointer"
                        >
                          PDF
                        </a>
                        <span className="text-muted-foreground">|</span>
                      </>
                    )}
                    {(paper as any).githubLink && (
                      <>
                        <a
                          href={(paper as any).githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-body text-accent-vibrant hover:text-accent-vibrant/80 cursor-pointer"
                        >
                          GitHub
                        </a>
                        <span className="text-muted-foreground">|</span>
                      </>
                    )}
                    {(paper as any).codeLink && (
                      <>
                        <a
                          href={(paper as any).codeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-body text-accent-vibrant hover:text-accent-vibrant/80 cursor-pointer"
                        >
                          Code
                        </a>
                        <span className="text-muted-foreground">|</span>
                      </>
                    )}
                    {(paper as any).videoLink && (
                      <>
                        <a
                          href={(paper as any).videoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-body text-accent-vibrant hover:text-accent-vibrant/80 cursor-pointer"
                        >
                          Video
                        </a>
                        <span className="text-muted-foreground">|</span>
                      </>
                    )}
                    {(paper as any).blogLink && (
                      <>
                        <a
                          href={(paper as any).blogLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-body text-accent-vibrant hover:text-accent-vibrant/80 cursor-pointer"
                        >
                          Blog
                        </a>
                        <span className="text-muted-foreground">|</span>
                      </>
                    )}
                    {(paper as any).websiteLink && (
                      <>
                        <a
                          href={(paper as any).websiteLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-body text-accent-vibrant hover:text-accent-vibrant/80 cursor-pointer"
                        >
                          Website
                        </a>
                        <span className="text-muted-foreground">|</span>
                      </>
                    )}
                    {(paper as any).slidesLink && (
                      <>
                        <a
                          href={(paper as any).slidesLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-body text-accent-vibrant hover:text-accent-vibrant/80 cursor-pointer"
                        >
                          Slides
                        </a>
                        <span className="text-muted-foreground">|</span>
                      </>
                    )}
                    <button
                      onClick={() => toggleBibTeX(paperKey)}
                      className="font-body text-accent-vibrant hover:text-accent-vibrant/80 cursor-pointer bg-transparent border-0 p-0 underline-none"
                      style={{ background: 'none', border: 'none', padding: 0, font: 'inherit' }}
                    >
                      BibTeX
                    </button>
                  </div>
                  {showBibTeX === paperKey && (
                    <div className="mt-4 p-4 bg-muted/50 rounded-md border">
                      <pre className="text-sm font-mono whitespace-pre-wrap overflow-x-auto">
                        {generateBibTeX(paper)}
                      </pre>
                      <button
                        onClick={() => navigator.clipboard.writeText(generateBibTeX(paper))}
                        className="mt-2 px-3 py-1 text-xs bg-accent-vibrant text-white rounded hover:bg-accent-vibrant/90"
                      >
                        Copy to Clipboard
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
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
              <TabsTrigger value="newest">Recent Publications</TabsTrigger>
              <TabsTrigger value="all">Complete List</TabsTrigger>
            </TabsList>
            
            <TabsContent value="newest">
              {renderRecentPublications(newestPublications)}
            </TabsContent>
            
            <TabsContent value="all">
              {renderAllPublications()}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Publications;