import ProfilePage from "@/components/ProfilePage";

const XiaohangTang = () => {
  const profileData = {
    name: "Xiaohang Tang",
    role: "PhD Student",
    affiliation: "UCL Statistical Science",
    image: "/xiaohang-tang-profile.jpg",
    about: [
      "Xiaohang Tang is a PhD student at the UCL Statistical Science. His research focuses on self-improving AI, spanning reinforcement learning, game theory, and Large Language Models.",
    ],
    researchInterests: [
      {
        title: "Reinforcement Learning",
        description: "Offline RL, Multi-agent RL, Robust RL, and RL with Large Language Models"
      },
      {
        title: "Game Theory",
        description: "Online Learning, Game Solving."
      },
      {
        title: "Large Language Models",
        description: "Alignment, Reasoning, and Diffusion-based LLMs"
      }
    ],
    publications: [
      {
        year: "2025",
        title: "RSPO: Regularized Self-Play Alignment of Large Language Models",
        authors: "Xiaohang Tang, Sangwoong Yoon, Seongho Son, Huizhuo Yuan, Quanquan Gu, Ilija Bogunovic",
        venue: "arXiv preprint arXiv:2503.00030",
        description: "Self-play alignment for fine-tuning LLMs through two-player game formulation, with focus on reference policy regularization to mitigate over-optimization.",
      },
      {
        year: "2024",
        title: "Adversarially Robust Decision Transformer",
        authors: "Xiaohang Tang, Afonso Marques, Parameswaran Kamalaruban, Ilija Bogunovic",
        venue: "NeurIPS",
        description: "Enhances robustness of reward-conditioned sequence modeling via minimax returns-to-go."
      },
      {
        year: "2023",
        title: "Regret-minimizing Double Rracle for Extensive-Form Games",
        authors: "Xiaohang Tang, Le Cong Dinh, Stephen Marcus Mcaleer, Yaodong Yang",
        venue: "ICML",
        description: "Proposes Periodic Double Oracle (PDO) method for extensive-form games, achieving polynomial sample complexity and faster convergence than existing double oracle algorithms.",
      },
    ],
    socialLinks: [
      {
        type: "email" as const,
        url: "xiaohang.tang20@ucl.ac.uk",
        label: "Email"
      },
      {
        type: "scholar" as const,
        url: "https://scholar.google.co.uk/citations?user=VVaL9mwAAAAJ&hl=en&oi=ao",
        label: "Google Scholar"
      },
      {
        type: "twitter" as const,
        url: "https://x.com/xiaohang_tang?s=21&t=ALSNVDQfZZ3DP1N01YSQag",
        label: "Twitter"
      }
    ]
  };

  return <ProfilePage {...profileData} />;
};

export default XiaohangTang;