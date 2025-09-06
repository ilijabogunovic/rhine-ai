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
    abstract: "Improving the reasoning capabilities of diffusion-based large language models (dLLMs) through reinforcement learning remains an open problem due to the intractability of likelihood functions. We introduce wd1, a weighted policy optimization algorithm that addresses this challenge by reducing the use of approximated likelihoods. Our approach demonstrates superior performance on reasoning benchmarks while maintaining computational efficiency in diffusion model training.",
    pdfFile: "https://arxiv.org/pdf/2507.08838.pdf",
    githubLink: "https://github.com/xiaohangt/wd1",
    blogLink: "https://ucl-diffusion-reasoning.github.io/wd1-demo/",
  },
  {
    year: "2024",
    title: "REDUCR: Robust Data Downsampling Using Class Priority Reweighting",
    authors: "William Bankes, George Hughes, Ilija Bogunovic, Zi Wang",
    venue: "Conference on Neural Information Processing Systems (NeurIPS)",
    type: "Conference Paper",
    arxivLink: "https://arxiv.org/abs/2312.00486",
    pdfFile: "https://arxiv.org/pdf/2312.00486.pdf",
    githubLink: "https://github.com/williambankes/REDUCR",
    abstract: "Data Downsampling algorithm robust to class imbalance and class distribution shifts."
  },
  {
    year: "2025",
    title: "Robust Multi-Objective Controlled Decoding of Large Language Models",
    authors: "Seongho Son, William Bankes, Sangwoong Yoon, Shyam Sundhar Ramesh, Xiaohang Tang, Ilija Bogunovic",
    venue: "arXiv preprint arXiv:2503.08796",
    type: "Preprint",
    arxivLink: "https://arxiv.org/abs/2503.08796",
    pdfFile: "https://arxiv.org/pdf/2503.08796.pdf",
    githubLink: "https://github.com/williambankes/robust-multi-objective-decoding",
    abstract: "Test-time alignment of Large Language Models to human preferences typically relies on predefined weights or averages, leading to unbalanced outcomes across multiple objectives. We introduce Robust Multi-Objective Decoding (RMOD), a novel inference-time algorithm that optimizes worst-case rewards through a maximin game formulation. RMOD achieves equitable alignment across diverse objectives with minimal computational overhead, outperforming baselines by up to 20% while maintaining efficiency for contemporary LLMs.",
  },
  {
    year: "2025",
    title: "This Is Your Doge, If It Please You: Exploring Deception and Robustness in Mixture of LLMs",
    authors: "Lorenz Wolf, Sangwoong Yoon, Ilija Bogunovic",
    venue: "arXiv preprint arXiv:2503.05856",
    type: "Preprint",
    arxivLink: "https://arxiv.org/abs/2503.05856",
    abstract: "Mixture of large language model (LLM) Agents (MoA) architectures achieve state-of-the-art performance on benchmarks like AlpacaEval 2.0 through collaborative inference. However, comprehensive evaluation of their safety and reliability remains missing. We systematically investigate deception and robustness in MoA systems, revealing critical vulnerabilities and proposing mitigation strategies to improve their trustworthiness in real-world deployment.",
    pdfFile: "https://arxiv.org/pdf/2503.05856.pdf"
  },
  {
    year: "2025",
    title: "RSPO: Regularized Self-Play Alignment of Large Language Models",
    authors: "Xiaohang Tang, Sangwoong Yoon, Seongho Son, Huizhuo Yuan, Quanquan Gu, Ilija Bogunovic",
    venue: "arXiv preprint arXiv:2503.00030",
    type: "Preprint",
    arxivLink: "https://arxiv.org/abs/2503.00030",
    abstract: "Self-play alignment formulates preference optimization as a two-player game for fine-tuning large language models, but regularization strategies remain underexplored. We propose Regularized Self-Play Optimization (RSPO), which introduces principled regularization mechanisms to prevent over-optimization while maintaining alignment effectiveness. Our approach demonstrates improved stability and performance compared to existing self-play methods across diverse alignment tasks.",
    pdfFile: "https://arxiv.org/pdf/2503.00030.pdf"
  },
  {
    year: "2025",
    title: "Almost Surely Safe Alignment of Large Language Models at Inference-Time",
    authors: "Xiaotong Ji, Shyam Sundhar Ramesh, Matthieu Zimmer, Ilija Bogunovic, Jun Wang, Haitham Bou Ammar",
    venue: "arXiv preprint arXiv:2502.01208",
    type: "Preprint",
    arxivLink: "https://arxiv.org/abs/2502.01208",
    abstract: "We introduce a novel inference-time alignment approach that generates safe LLM responses with probability approaching one. Our method models safe response generation as a constrained Markov Decision Process in the latent space, using dynamic safety state tracking and penalty mechanisms. The resulting InferenceGuard system provides formal safety guarantees while maintaining task performance, offering a computationally efficient alternative to resource-intensive training-based alignment methods.",
    pdfFile: "https://arxiv.org/pdf/2502.01208.pdf",
    huggingFaceLink: "https://huggingface.co/papers/2502.01208"
  },
  {
    year: "2025",
    title: "Sample Efficient Preference Alignment in LLMs via Active Exploration",
    authors: "Viraj Mehta, Syrine Belakaria, Vikramjeet Das, Ojash Neopane, Yijia Dai, Ilija Bogunovic, Barbara Engelhardt, Stefano Ermon, Jeff Schneider, Willie Neiswanger",
    venue: "Conference on Language Modeling (COLM)",
    type: "Conference Paper",
    arxivLink: "https://arxiv.org/abs/2312.00267",
    pdfFile: "https://arxiv.org/pdf/2312.00267.pdf",
    githubLink: "https://github.com/belakaria/active-llm-alignment",
    abstract: "Proposes active exploration techniques for sample efficient preference alignment in large language models, reducing the amount of human feedback required for effective alignment."
  },
  {
    year: "2025",
    title: "Mean-Field Bayesian Optimisation",
    authors: "Petar Steinberg, Juliusz Ziomek, Matej Jusup, Ilija Bogunovic",
    venue: "arXiv preprint arXiv:2502.12315",
    type: "Preprint",
    arxivLink: "https://arxiv.org/abs/2502.12315",
    pdfFile: "https://arxiv.org/pdf/2502.12315.pdf",
    abstract: "Bayesian optimization faces scalability challenges when applied to high-dimensional problems with large datasets. We introduce mean-field approaches that decompose complex optimization landscapes into tractable subproblems while preserving global optimization properties. Our method enables efficient Bayesian optimization for large-scale applications previously considered intractable."
  },
  {
    year: "2025",
    title: "Synthetic Data is Sufficient for Zero-Shot Visual Generalization from Offline Data",
    authors: "Ahmet Hamdi Güzel, Ilija Bogunovic, Jack Parker-Holder",
    venue: "Transactions on Machine Learning Research (TMLR)",
    type: "Journal Paper",
    arxivLink: "https://arxiv.org/abs/2508.12356",
    pdfFile: "https://arxiv.org/pdf/2508.12356.pdf",
    abstract: "Vision-based offline reinforcement learning often suffers from poor generalization due to limited data diversity. We demonstrate that synthetic data generation through a two-step process—dataset augmentation followed by diffusion-based latent space sampling—significantly improves zero-shot generalization. Our approach works across continuous and discrete action spaces without algorithm modifications, substantially reducing generalization gaps while maintaining computational efficiency."
  },     
  {
    year: "2024",
    title: "Sample-efficient Bayesian Optimisation Using Known Invariances",
    authors: "Theodore Brown, Alexandru Cioba, Ilija Bogunovic",
    venue: "Conference on Neural Information Processing Systems (NeurIPS)",
    type: "Conference Paper",
    arxivLink: "https://arxiv.org/abs/2410.16972",
    pdfFile: "https://arxiv.org/pdf/2410.16972.pdf",
    githubLink: "https://github.com/theo-brown/bayesopt_with_invariances",
    codeLink: "https://github.com/theo-brown/invariantkernels",
    blogLink: "https://theobrown.uk/blog/invariantbo/",
    slidesLink: "https://theobrown.uk/talks/invariantbo/slides.html#/title-slide",
    abstract: "We explore BO of functions that exhibit invariance to a known group of transformations (symmetries). We show the inefficiency of vanilla and constrained BO in such cases, and provide theoretical asymptotic bounds on the performance of symmetry-aware algorithms. We demonstrate our method on a range of synthetic invariant and quasi-invariant functions, and investigate a low-cost approximation where only some of the symmetries are incorporated into the kernel. Finally, we use invariant BO to design a current drive system for a nuclear fusion reactor. "
  },
  {
    year: "2024",
    title: "Sample-Efficient Regret-Minimizing Double Oracle in Extensive-Form Games",
    authors: "Xiaohang Tang, Chiyuan Wang, Chengdong Ma, Ilija Bogunovic, Stephen McAleer, Yaodong Yang",
    venue: "arXiv preprint arXiv:2411.00954",
    type: "Preprint",
    arxivLink: "https://arxiv.org/abs/2411.00954",
    abstract: "We propose Adaptive Double Oracle (AdaDO), which reduces the exponential sample complexity of XDO to polynomial by optimizing expansion frequency, and introduce a theoretical framework, Regret-Minimizing Double Oracle (RMDO), to guide efficient algorithm design. Empirical results show that AdaDO outperforms strong baselines while RMDO further enhances convergence and scalability for complex multi-agent tasks.",
    pdfFile: "https://arxiv.org/pdf/2411.00954.pdf",
  },
  {
    year: "2024",
    title: "Group Robust Preference Optimization in Reward-free RLHF",
    authors: "Shyam Sundhar Ramesh, Yifan Hu, Iason Chaimalas, Viraj Mehta, Pier Giuseppe Sessa, Haitham Bou Ammar, Ilija Bogunovic",
    venue: "Conference on Neural Information Processing Systems (NeurIPS)",
    type: "Conference Paper",
    arxivLink: "https://arxiv.org/abs/2405.20304",
    pdfFile: "https://arxiv.org/pdf/2405.20304.pdf",
    abstract: "Adapting large language models (LLMs) for specific tasks usually involves fine-tuning through reinforcement learning with human feedback (RLHF) on preference data. While these data often come from diverse labelers' groups (e.g., different demographics, ethnicities, company teams, etc.), traditional RLHF approaches adopt a \"one-size-fits-all\" approach, i.e., they indiscriminately assume and optimize a single preference model, thus not being robust to unique characteristics and needs of the various groups. To address this limitation, we propose a novel Group Robust Preference Optimization (GRPO) method to align LLMs to individual groups' preferences robustly. Our approach builds upon reward-free direct preference optimization methods, but unlike previous approaches, it seeks a robust policy which maximizes the worst-case group performance. To achieve this, GRPO adaptively and sequentially weights the importance of different groups, prioritizing groups with worse cumulative loss. We theoretically study the feasibility of GRPO and analyze its convergence for the log-linear policy class. By fine-tuning LLMs with GRPO using diverse group-based global opinion data, we significantly improved performance for the worst-performing groups, reduced loss imbalances across groups, and improved probability accuracies compared to non-robust baselines.",
    githubLink: "https://github.com/rsshyam/GRPO",
    videoLink: "https://slideslive.com/39027665",
    blogLink: "https://medium.com/@haitham.bouammar71/pluralistic-alignment-of-llms-fix-your-algorithm-not-just-your-data-a0686ec7a279",
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
    year: "2025",
    title: "Right Now, Wrong Then: Non-Stationary Direct Preference Optimization under Preference Drift",
    authors: "Seongho Son, William Bankes, Sayak Ray Chowdhury, Brooks Paige, Ilija Bogunovic",
    venue: "International Conference on Machine Learning (ICML)",
    type: "Conference Paper",
    arxivLink: "https://arxiv.org/abs/2407.18676",
    pdfFile: "https://arxiv.org/pdf/2407.18676.pdf",
    githubLink: "https://github.com/geronest/ns-dpo",
    videoLink: "https://icml.cc/virtual/2025/poster/44703",
    abstract: "Reinforcement learning from human feedback (RLHF) aligns Large Language Models (LLMs) with human preferences. However, these preferences can often change over time due to external factors (e.g. environment change and societal influence). Consequently, what was wrong then might be right now. Current preference optimization algorithms do not account for temporal preference drift in their modeling, which can lead to severe misalignment. To address this limitation, we use a Dynamic Bradley-Terry model that models preferences via time-dependent reward functions, and propose Non-Stationary Direct Preference Optimisation (NS-DPO). By introducing a discount parameter in the loss function, NS-DPO applies exponential weighting, which proportionally focuses learning on more time-relevant datapoints. We theoretically analyse the convergence of NS-DPO in the offline setting, providing upper bounds on the estimation error caused by non-stationary preferences. Finally, we demonstrate the effectiveness of NS-DPO for fine-tuning LLMs in scenarios with drifting preferences. By simulating preference drift using renowned reward models and modifying popular LLM datasets accordingly, we show that NS-DPO fine-tuned LLMs remain robust under non-stationarity, significantly outperforming baseline algorithms that ignore temporal preference changes, without sacrificing performance in stationary cases."
  },
  {
    year: "2024",
    title: "Adversarially Robust Decision Transformer",
    authors: "Xiaohang Tang, Afonso Marques, Parameswaran Kamalaruban, Ilija Bogunovic",
    venue: "Conference on Neural Information Processing Systems (NeurIPS)",
    type: "Conference Paper",
    arxivLink: "https://arxiv.org/abs/2407.18414",
    pdfFile: "https://arxiv.org/pdf/2407.18414.pdf",
    abstract: "Enhances robustness of reward-conditioned sequence modeling via minimax returns-to-go.",
    githubLink: "https://github.com/xiaohangt/ardt",
  },
  {
    year: "2024",
    title: "Distributionally Robust Model-based Reinforcement Learning with Large State Spaces",
    authors: "Shyam Sundhar Ramesh, Pier Giuseppe Sessa, Yifan Hu, Andreas Krause, Ilija Bogunovic",
    venue: "International Conference on Artificial Intelligence and Statistics (AISTATS)",
    type: "Conference Paper",
    arxivLink: "https://arxiv.org/abs/2309.02236",
    pdfFile: "https://arxiv.org/pdf/2309.02236.pdf",
    abstract: "Three major challenges in reinforcement learning are the complex dynamical systems with large state spaces, the costly data acquisition processes, and the deviation of real-world dynamics from the training environment deployment. To overcome these issues, we study distributionally robust Markov decision processes with continuous state spaces under the widely used Kullback-Leibler, chi-square, and total variation uncertainty sets. We propose a model-based approach that utilizes Gaussian Processes and the maximum variance reduction algorithm to efficiently learn multi-output nominal transition dynamics, leveraging access to a generative model (i.e., simulator). We further demonstrate the statistical sample complexity of the proposed method for different uncertainty sets. These complexity bounds are independent of the number of states and extend beyond linear dynamics, ensuring the effectiveness of our approach in identifying near-optimal distributionally-robust policies. The proposed method can be further combined with other model-free distributionally robust reinforcement learning methods to obtain a near-optimal robust policy. Experimental results demonstrate the robustness of our algorithm to distributional shifts and its superior performance in terms of the number of samples needed.",
    githubLink: "https://github.com/rsshyam/MVR-RFQI/tree/main",
  },
  {
    year: "2023",
    title: "Robust Best-arm Identification in Linear Bandits",
    authors: "Wei Wang, Sattar Vakili, Ilija Bogunovic",
    venue: "arXiv preprint arXiv:2311.04731",
    type: "Preprint",
    arxivLink: "https://arxiv.org/abs/2311.04731",
    pdfFile: "https://arxiv.org/pdf/2311.04731.pdf",
    abstract: "Studies the robust best-arm identification problem in linear rewards, proposing both static and adaptive bandit algorithms that achieve sample complexity matching instance-dependent lower bounds."
  },
  {
    year: "2023",
    title: "Graph Neural Network Powered Bayesian Optimization for Large Molecular Spaces",
    authors: "Miles Wang-Henderson, Bartu Soyuer, Parnian Kassraie, Andreas Krause, Ilija Bogunovic",
    venue: "ICML 2023 Workshop on Structured Probabilistic Inference & Generative Modeling",
    type: "Workshop Paper",
    pdfFile: "https://openreview.net/forum?id=QIrgM7uybw#all",
    abstract: "Applies graph neural networks to Bayesian optimization for molecular discovery in large chemical spaces."
  },
  {
    year: "2024",
    title: "Safe Model-Based Multi-Agent Mean-Field Reinforcement Learning",
    authors: "Matej Jusup, Barna Pásztor, Tadeusz Janik, Kenan Zhang, Francesco Corman, Andreas Krause, Ilija Bogunovic",
    venue: "International Conference on Autonomous Agents and Multiagent Systems (AAMAS)",
    type: "Conference Paper",
    arxivLink: "https://arxiv.org/abs/2306.17052",
    pdfFile: "https://arxiv.org/pdf/2306.17052.pdf",
    abstract: "Addresses safe multi-agent reinforcement learning in mean-field settings using model-based approaches."
  },
  {
    year: "2023",
    title: "Efficient Planning in Combinatorial Action Spaces with Applications to Cooperative Multi-Agent Reinforcement Learning",
    authors: "Vasyl Tkachuk, Seyed Alireza Bakhtiari, Johannes Kirschner, Matej Jusup, Ilija Bogunovic, Csaba Szepesvári",
    venue: "International Conference on Artificial Intelligence and Statistics (AISTATS)",
    type: "Conference Paper",
    arxivLink: "https://arxiv.org/abs/2302.04376",
    pdfFile: "https://arxiv.org/pdf/2302.04376.pdf",
    abstract: "Addresses efficient planning in combinatorial action spaces with applications to cooperative multi-agent reinforcement learning."
  },
  {
    year: "2023",
    title: "Graph Neural Bayesian Optimization for Virtual Screening",
    authors: "Miles Wang-Henderson, Bartu Soyuer, Parnian Kassraie, Andreas Krause, Ilija Bogunovic",
    venue: "NeurIPS 2023 Workshop on Adaptive Experimental Design and Active Learning in the Real World",
    type: "Workshop Paper",
    pdfFile: "https://openreview.net/forum?id=t3PzfH98Mq",
    abstract: "Applies graph neural Bayesian optimization techniques to virtual screening for drug discovery applications."
  },
  {
    year: "2023",
    title: "Near-optimal Policy Identification in Active Reinforcement Learning",
    authors: "Xiang Li, Viraj Mehta, Johannes Kirschner, Ian Char, Willie Neiswanger, Jeff Schneider, Andreas Krause, Ilija Bogunovic",
    venue: "International Conference on Learning Representations (ICLR) - Top 5%",
    type: "Conference Paper",
    arxivLink: "https://arxiv.org/abs/2212.09510",
    pdfFile: "https://arxiv.org/pdf/2212.09510.pdf",
    abstract: "Proposes the AE-LSVI algorithm for best-policy identification, combining optimism with pessimism for active exploration in reinforcement learning with costly data acquisition and large state spaces."
  },
  {
    year: "2022",
    title: "A Robust Phased Elimination Algorithm for Corruption-Tolerant Gaussian Process Bandits",
    authors: "Ilija Bogunovic, Zihan Li, Andreas Krause, Jonathan Scarlett",
    venue: "Conference on Neural Information Processing Systems (NeurIPS)",
    type: "Conference Paper",
    arxivLink: "https://arxiv.org/abs/2202.01850",
    pdfFile: "https://arxiv.org/pdf/2202.01850.pdf",
    abstract: "Proposes a robust algorithm for Gaussian process bandits that tolerates adversarial corruption in observations."
  },
  {
    year: "2022",
    title: "Graph Neural Network Bandits",
    authors: "Parnian Kassraie, Andreas Krause, Ilija Bogunovic",
    venue: "Conference on Neural Information Processing Systems (NeurIPS)",
    type: "Conference Paper",
    arxivLink: "https://arxiv.org/abs/2207.06456",
    pdfFile: "https://arxiv.org/pdf/2207.06456.pdf",
    abstract: "Introduces bandit algorithms that leverage graph neural networks for improved exploration in structured environments."
  },
  {
    year: "2022",
    title: "Movement Penalized Bayesian Optimization with Application to Wind Energy Systems",
    authors: "Shyam Sundhar Ramesh, Pier Giuseppe Sessa, Andreas Krause, Ilija Bogunovic",
    venue: "Conference on Neural Information Processing Systems (NeurIPS)",
    type: "Conference Paper",
    abstract: "Contextual Bayesian optimization (CBO) is a powerful framework for sequential decision-making given side information, with important applications, e.g., in wind energy systems. In this setting, the learner receives context (e.g., weather conditions) at each round, and has to choose an action (e.g., turbine parameters). Standard algorithms assume no cost for switching their decisions at every round. However, in many practical applications, there is a cost associated with such changes, which should be minimized. We introduce the episodic CBO with movement costs problem and, based on the online learning approach for metrical task systems of Coester and Lee (2019), propose a novel randomized mirror descent algorithm that makes use of Gaussian Process confidence bounds. We compare its performance with the offline optimal sequence for each episode and provide rigorous regret guarantees. We further demonstrate our approach on the important real-world application of altitude optimization for Airborne Wind Energy Systems. In the presence of substantial movement costs, our algorithm consistently outperforms standard CBO algorithms.",
    arxivLink: "https://arxiv.org/abs/2210.08087",
    pdfFile: "https://arxiv.org/pdf/2210.08087.pdf",
    videoLink: "https://slideslive.com/38990489"
  },
  {
    year: "2021",
    title: "Misspecified Gaussian Process Bandit Optimization",
    authors: "Ilija Bogunovic, Andreas Krause",
    venue: "Conference on Neural Information Processing Systems (NeurIPS)",
    type: "Conference Paper",
    arxivLink: "https://arxiv.org/abs/2111.05008",
    pdfFile: "https://arxiv.org/pdf/2111.05008.pdf",
    abstract: "Considers optimizing black-box functions with noisy bandit feedback in a misspecified kernelized bandit setting where the unknown function can be ε-uniformly approximated by a function with bounded norm in some RKHS."
  },
  {
    year: "2021",
    title: "Efficient Model-based Multi-Agent Mean-Field Reinforcement Learning",
    authors: "Barna Pásztor, Ilija Bogunovic, Andreas Krause",
    venue: "arXiv preprint arXiv:2107.04050",
    type: "Preprint",
    arxivLink: "https://arxiv.org/abs/2107.04050",
    pdfFile: "https://arxiv.org/pdf/2107.04050.pdf",
    abstract: "Addresses efficient model-based reinforcement learning in multi-agent mean-field settings with theoretical and empirical analysis."
  },
  {
    year: "2021",
    title: "Online Submodular Resource Allocation with Applications to Rebalancing Shared Mobility Systems",
    authors: "Pier Giuseppe Sessa, Ilija Bogunovic, Andreas Krause, Maryam Kamgarpour",
    venue: "International Conference on Machine Learning (ICML)",
    type: "Conference Paper",
    pdfFile: "http://proceedings.mlr.press/v139/sessa21a/sessa21a.pdf",
    abstract: "Addresses the problem of allocating agents to resources to maximize cumulative welfare in shared mobility systems using submodular optimization."
  },
  {
    year: "2021",
    title: "Combining Pessimism with Optimism for Robust and Efficient Model-Based Deep Reinforcement Learning",
    authors: "Sebastian Curi, Ilija Bogunovic, Andreas Krause",
    venue: "International Conference on Machine Learning (ICML)",
    type: "Conference Paper",
    arxivLink: "https://arxiv.org/abs/2103.10369",
    pdfFile: "https://arxiv.org/pdf/2103.10369.pdf",
    abstract: "Proposes the Robust Hallucinated Upper-Confidence RL (RH-UCRL) algorithm to solve robust RL problems while attaining near-optimal sample complexity guarantees."
  },
  {
    year: "2021",
    title: "Stochastic Linear Bandits Robust to Adversarial Attacks",
    authors: "Ilija Bogunovic, Arpan Losalka, Andreas Krause, Jonathan Scarlett",
    venue: "International Conference on Artificial Intelligence and Statistics (AISTATS)",
    type: "Conference Paper",
    arxivLink: "https://arxiv.org/abs/2007.03285",
    pdfFile: "https://arxiv.org/pdf/2007.03285.pdf",
    abstract: "Considers stochastic linear bandit problems where rewards are subject to both random noise and adversarial attacks with budget constraints."
  },
  {
    year: "2021",
    title: "Cost-efficient Online Hyperparameter Optimization",
    authors: "Jialin Wang, Muhan Ren, Ilija Bogunovic, Yuwen Xiong, Raquel Urtasun",
    venue: "arXiv preprint arXiv:2101.06590",
    type: "Preprint",
    arxivLink: "https://arxiv.org/abs/2101.06590",
    pdfFile: "https://arxiv.org/pdf/2101.06590.pdf",
    abstract: "Proposes cost-efficient methods for online hyperparameter optimization with theoretical and practical contributions."
  },
  {
    year: "2021",
    title: "DP-Sniper: Black-Box Discovery of Differential Privacy Violations using Classifiers",
    authors: "Benjamin Bichsel, Samuel Steffen, Ilija Bogunovic, Martin Vechev",
    venue: "IEEE Symposium on Security and Privacy (SP)",
    type: "Conference Paper",
    pdfFile: "https://files.sri.inf.ethz.ch/website/papers/sp21-dpsniper.pdf",
    githubLink: "https://github.com/eth-sri/dp-sniper",
    abstract: "Introduces a black-box method for discovering differential privacy violations using machine learning classifiers."
  },
  {
    year: "2021",
    title: "Risk-averse Heteroscedastic Bayesian Optimization",
    authors: "Anastasiia Makarova, Ilnura Usmanova, Ilija Bogunovic, Andreas Krause",
    venue: "Conference on Neural Information Processing Systems (NeurIPS)",
    type: "Conference Paper",
    arxivLink: "https://arxiv.org/abs/2111.03637",
    pdfFile: "https://arxiv.org/pdf/2111.03637.pdf",
    abstract: "Generalizes Bayesian optimization to trade mean and input-dependent variance of the objective, proposing RAHBO algorithm that identifies solutions with high return and low noise variance."
  },
  {
    year: "2020",
    title: "Corruption-tolerant Gaussian Process Bandit Optimization",
    authors: "Ilija Bogunovic, Andreas Krause, Jonathan Scarlett",
    venue: "International Conference on Artificial Intelligence and Statistics (AISTATS)",
    type: "Conference Paper",
    arxivLink: "https://arxiv.org/abs/2003.01971",
    pdfFile: "https://arxiv.org/pdf/2003.01971.pdf",
    abstract: "Proposes corruption-tolerant algorithms for Gaussian process bandit optimization that maintain performance even when observations are adversarially corrupted."
  },
  {
    year: "2020",
    title: "Mixed Strategies for Robust Optimization of Unknown Objectives",
    authors: "Pier Giuseppe Sessa, Ilija Bogunovic, Maryam Kamgarpour, Andreas Krause",
    venue: "International Conference on Artificial Intelligence and Statistics (AISTATS)",
    type: "Conference Paper",
    arxivLink: "https://arxiv.org/abs/2002.12613",
    pdfFile: "https://arxiv.org/pdf/2002.12613.pdf",
    abstract: "Develops mixed strategies for robust optimization problems when the objective function is unknown and must be learned through noisy evaluations."
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
    year: "2020",
    title: "Contextual Games: Multi-Agent Learning with Side Information",
    authors: "Pier Giuseppe Sessa, Ilija Bogunovic, Andreas Krause, Maryam Kamgarpour",
    venue: "Conference on Neural Information Processing Systems (NeurIPS)",
    type: "Conference Paper",
    arxivLink: "https://arxiv.org/abs/2107.06327",
    pdfFile: "https://arxiv.org/pdf/2107.06327.pdf",
    abstract: "Formulates the novel class of contextual games, a type of repeated games driven by contextual information at each round."
  },
  {
    year: "2020",
    title: "Learning to Play Sequential Games versus Unknown Opponents",
    authors: "Pier Giuseppe Sessa, Ilija Bogunovic, Maryam Kamgarpour, Andreas Krause",
    venue: "Conference on Neural Information Processing Systems (NeurIPS)",
    type: "Conference Paper",
    arxivLink: "https://arxiv.org/abs/2007.05271",
    pdfFile: "https://arxiv.org/pdf/2007.05271.pdf",
    githubLink: "https://github.com/sessap/stackelucb",
    abstract: "Develops algorithms for learning to play sequential games against unknown opponents in multi-agent settings."
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
    abstract: "Addresses the best arm identification problem in overlapping multi-bandit settings.",
    pdfFile: "https://ieeexplore.ieee.org/document/8849327"
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
  const newestPublications = publications.filter(paper => paper.year !== "2024").slice(0, 5);
  
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
                      {(paper as any).huggingFaceLink && (
                        <>
                          <a
                            href={(paper as any).huggingFaceLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-body text-sm text-accent-vibrant hover:text-accent-vibrant/80 transition-colors"
                          >
                            🤗 HF
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
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">
                    {renderAuthors(paper.authors)}
                  </p>
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
                    {(paper as any).huggingFaceLink && (
                      <>
                        <a
                          href={(paper as any).huggingFaceLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-body text-accent-vibrant hover:text-accent-vibrant/80 cursor-pointer"
                        >
                          🤗 HF
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
