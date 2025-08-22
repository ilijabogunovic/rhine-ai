import ProfilePage from "@/components/ProfilePage";

const AhmetHGuzel = () => {
  const profileData = {
    name: "Ahmet H. Guzel",
    role: "PhD Student",
    affiliation: "University College London AI Centre (With Dr. J. Parker-Holder, Google DeepMind) and University of Basel (With Prof. Ilija Bogunovic)",
    image: "/ahmet-guzel-profile.jpg",
    about: [
      "Ahmet H. Guzel is a PhD student at University College London, working in collaboration with J. Parker-Holder at Google DeepMind. His research focuses on advancing reinforcement learning through world models, synthetic data generation, and decision-making in complex environments.",
      "His work centers on developing world models for offline reinforcement learning, where he explores how to learn effective internal representations of environments using limited offline data for long-horizon planning and decision-making. He has demonstrated that synthetic data can be sufficient for achieving zero-shot generalization in procedurally generated environments.",
      "Ahmet specializes in creating artificial datasets to augment training and improve model performance, particularly focusing on how synthetic data generation can address data scarcity challenges in offline RL. His research also extends to AI systems for complex decision-making under uncertainty in open-ended environments, bridging theoretical advances with practical applications in dynamic and challenging scenarios."
    ],
    researchInterests: [
      {
        title: "Reinforcement Learning",
        description: "Advanced RL algorithms, policy optimization, and sample efficiency"
      },
      {
        title: "World Models in Offline RL",
        description: "Learning internal representations of environments via limited offline data for long-horizon planning and decision-making"
      },
      {
        title: "Synthetic Data Generation",
        description: "Creating artificial datasets to augment training and improve model performance"
      },
      {
        title: "Decision Making in Open-Ended Environments",
        description: "AI systems for complex decision-making under uncertainty and open-ended environments"
      }
    ],
    publications: [
      {
        title: "Synthetic Data is Sufficient for Zero-shot Generalization from Offline Data",
        authors: "Ahmet H. Guzel, Ilija Bogunovic, Jack Parker-Holder",
        venue: "Transactions on Machine Learning Research (TMLR)",
        year: "2025",
        description: "For offline RL generalization in procedurally generated environments, synthetic data based on two step generation method improves generalization performance and outperforms SOTA model-free methods"
      }
    ],
    socialLinks: [
      {
        type: "email" as const,
        url: "mailto:ahmet.guzel.23@ucl.ac.uk",
        label: "Email"
      },
      {
        type: "scholar" as const,
        url: "https://scholar.google.com/citations?user=fwq9yQ4AAAAJ&hl=en",
        label: "Google Scholar"
      },
      {
        type: "linkedin" as const,
        url: "https://www.linkedin.com/in/ahmethamdiguzel/",
        label: "LinkedIn"
      },
      {
        type: "twitter" as const,
        url: "https://x.com/ahguzelUK",
        label: "Twitter"
      },
      {
        type: "external" as const,
        url: "https://aguzel.github.io/",
        label: "External Website"
      }
    ]
  };

  return <ProfilePage {...profileData} />;
};

export default AhmetHGuzel;