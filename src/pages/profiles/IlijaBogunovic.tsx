import ProfilePage from "@/components/ProfilePage";

const IlijaBogunovic = () => {
  const profileData = {
    name: "Prof. Dr. Ilija Bogunovic",
    role: "Associate Professor",
    affiliation: "University of Basel & University College London",
    image: "/ilija-bogunovic-profile.jpg",
    about: [
      "Prof. Dr. Ilija Bogunovic is an Associate Professor at the University of Basel, Department of Mathematics and Computer Science, and a member of University College London. He leads the Bogunovic LAB, focusing on cutting-edge research in machine learning and artificial intelligence.",
      "His research spans foundation models, learning algorithms, and theoretical advances in AI. Prof. Bogunovic has published extensively in top-tier venues including NeurIPS, ICML, ICLR, AISTATS, JMLR, and TMLR, contributing significantly to the global advancement of artificial intelligence.",
      "Before joining the University of Basel in 2025, Prof. Bogunovic founded the lab at University College London (UCL), where he continues to maintain close ties with the UCL AI Centre. His work bridges theoretical foundations with practical applications, addressing some of the most challenging problems in modern AI."
    ],
    researchInterests: [
      {
        title: "Foundation Models",
        description: "Large-scale models, emergent capabilities, and scaling laws"
      },
      {
        title: "Learning Algorithms",
        description: "Novel optimization methods, multi-task learning, and adaptive algorithms"
      },
      {
        title: "Theoretical Advances",
        description: "Mathematical foundations, generalization theory, and algorithmic analysis"
      },
      {
        title: "AI Safety & Ethics",
        description: "Responsible AI development, fairness, and interpretability"
      }
    ],
    publications: [
      {
        title: "Foundations of Modern Machine Learning: Theory and Applications",
        authors: "Ilija Bogunovic, Collaborators",
        venue: "Journal of Machine Learning Research (JMLR)",
        year: "2024",
        description: "A comprehensive study on the theoretical foundations of modern machine learning, bridging theory and practice."
      },
      {
        title: "Scalable Learning with Foundation Models",
        authors: "Ilija Bogunovic, et al.",
        venue: "Neural Information Processing Systems (NeurIPS)",
        year: "2023",
        description: "Novel approaches to scaling foundation models while maintaining efficiency and performance."
      },
      {
        title: "Theoretical Guarantees for Adaptive Optimization",
        authors: "Ilija Bogunovic, Research Team",
        venue: "International Conference on Machine Learning (ICML)",
        year: "2023",
        description: "Theoretical analysis providing convergence guarantees for adaptive optimization algorithms in deep learning."
      }
    ],
    socialLinks: [
      {
        type: "email" as const,
        url: "mailto:ilija.bogunovic@unibas.ch",
        label: "Email"
      },
      {
        type: "scholar" as const,
        url: "https://scholar.google.com/citations?user=xMvt3NEAAAAJ&hl=en",
        label: "Google Scholar"
      },
      {
        type: "linkedin" as const,
        url: "https://linkedin.com/in/ilija-bogunovic",
        label: "LinkedIn"
      },
      {
        type: "twitter" as const,
        url: "https://x.com/ilijabogunovic",
        label: "Twitter"
      },
      {
        type: "external" as const,
        url: "https://ilijabogunovic.com",
        label: "External Website"
      }
    ]
  };

  return <ProfilePage {...profileData} />;
};

export default IlijaBogunovic;