import ProfilePage from "@/components/ProfilePage";

const AhmetHGuzel = () => {
  const profileData = {
    name: "Ahmet H. Guzel",
    role: "PhD Student",
    affiliation: "University of Basel & UCL AI Centre (With J. Parker-Holder, Google DeepMind)",
    image: "/ahmet-guzel-profile.jpg",
    about: [
      "Ahmet H. Guzel is a PhD student at the University of Basel and a member of the UCL AI Centre, working in collaboration with J. Parker-Holder at Google DeepMind. His research focuses on reinforcement learning and its applications to complex decision-making problems.",
      "He specializes in developing novel reinforcement learning algorithms that can learn efficiently in challenging environments. His work combines theoretical analysis with practical implementations in real-world scenarios.",
      "Ahmet's research aims to bridge the gap between theoretical reinforcement learning and practical applications, contributing to both algorithmic advances and their deployment in complex systems."
    ],
    researchInterests: [
      {
        title: "Reinforcement Learning",
        description: "Advanced RL algorithms, policy optimization, and sample efficiency"
      },
      {
        title: "Multi-Agent Systems",
        description: "Learning and coordination in multi-agent environments"
      },
      {
        title: "Decision Making",
        description: "AI systems for complex decision-making under uncertainty"
      },
      {
        title: "Algorithm Design",
        description: "Novel algorithms for learning and optimization in dynamic environments"
      }
    ],
    publications: [],
    socialLinks: [
      {
        type: "email" as const,
        url: "mailto:ahmet.guzel@example.com",
        label: "Email"
      },
      {
        type: "scholar" as const,
        url: "https://scholar.google.com/citations?user=aguzel",
        label: "Google Scholar"
      },
      {
        type: "linkedin" as const,
        url: "https://linkedin.com/in/ahmet-guzel",
        label: "LinkedIn"
      },
      {
        type: "twitter" as const,
        url: "https://twitter.com/ahmet_guzel",
        label: "Twitter"
      },
      {
        type: "external" as const,
        url: "https://ahmetguzel.com",
        label: "External Website"
      }
    ]
  };

  return <ProfilePage {...profileData} />;
};

export default AhmetHGuzel;