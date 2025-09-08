import ProfilePage from "@/components/ProfilePage";

const IlijaBogunovic = () => {
  const profileData = {
    name: "Prof. Dr. Ilija Bogunovic",
    role: "Associate Professor",
    affiliation: "University of Basel\nUniversity College London (honorary)\nUCL AI Centre",
    image: "/ilija-bogunovic-profile.jpg",
    about: [
      "Prof. Dr. Ilija Bogunovic is an Associate Professor at the University of Basel, Department of Mathematics and Computer Science, and a member of University College London. He leads Rhine AI, focusing on cutting-edge research in machine learning and artificial intelligence.",
      "His research focuses on developing models and algorithms for AI/ML. He has published widely in leading venues such as NeurIPS, ICML, ICLR, AISTATS, JMLR, and TMLR, making significant contributions to the advancement of the field.",
      "Before joining the University of Basel in 2025, Prof. Bogunovic founded the lab at University College London (UCL), where he continues to maintain close ties with the UCL AI Centre. His work has been recognized through an ETH Postdoctoral fellowship, Google Research Scholar Program Award and EPSRC New Investigator Award."
    ],
    researchInterests: [
      {
        title: "Agentic AI Systems",
        description: "Self-evolving LLM agents that reason, adapt, and operate in complex environments."
      },
      {
        title: "Reinforcement Learning",
        description: "Algorithms for sequential decision making under uncertainty, emphasizing robustness, efficiency, and alignment."
      },
      {
        title: "Exploration & Discovery",
        description: "Foundation models for exploring hypothesis spaces, uncovering knowledge, and accelerating discovery."
      }
    ],
    publications: [],
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

  return <ProfilePage {...profileData} hidePublications={true} />;
};

export default IlijaBogunovic;