import ProfilePage from "@/components/ProfilePage";

const SeongHo = () => {
  const profileData = {
    name: "Seongho Son (손성호, /sung-ho/)",
    role: "PhD Student",
    affiliation: "University of Basel & UCL AI Centre (With B. Paige, UCL)",
    image: "/seong-ho-profile.jpg",
    about: [
      "Seongho is a PhD student at the University of Basel and a member of the UCL AI Centre, working in collaboration with B. Paige at UCL. His research focuses on Reinforcement Learning (RL) and its applications to Large Language Models (LLMs).",
      "His work aims to make AI systems more robust and reliable. He specializes in Reinforcement Learning from Human Feedback (RLHF), multi-objective optimziation and test-time alignment methods.",
      "He is also exploring the application of multi-agent systems and diffusion models for language model tasks.",
    ],
    researchInterests: [
      {
        title: "Reinforcement Learning",
        description: "RLHF, Multi-objective optimization"
      },
      {
        title: "Large Language Models",
        description: "Preference Optimization under temporal drift, robust test-time alignment, efficient use of compute for LLM fine-tuning"
      },
      {
        title: "Multi-agent systems",
        description: "Mixture-of-Agents, synergistic collaboration of diverse agents"
      },
      {
        title: "Diffusion Models",
        description: "Discrete Diffusion Models, efficient training and inference techniques for diffusion LLMs" 
      }
    ],
    publications: [],
    socialLinks: [
      {
        type: "email" as const,
        url: "mailto:geronest@gmail.com",
        label: "Email"
      },
      {
        type: "scholar" as const,
        url: "https://scholar.google.com/citations?user=jBSBdecAAAAJ&hl=en&oi=ao",
        label: "Google Scholar"
      },
      {
        type: "linkedin" as const,
        url: "https://www.linkedin.com/in/seong-ho-son-528bb892/",
        label: "LinkedIn"
      },
      {
        type: "twitter" as const,
        url: "https://x.com/seongho_son_ml",
        label: "Twitter"
      },
      // {
      //   type: "external" as const,
      //   url: "https://seongho.com",
      //   label: "External Website"
      // }
    ]
  };

  return <ProfilePage {...profileData} />;
};

export default SeongHo;