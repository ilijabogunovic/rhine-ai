import ProfilePage from "@/components/ProfilePage";

const ZheWang = () => {
  const profileData = {
    name: "Zhe Wang",
    role: "PhD Student",
    affiliation: "University of Basel & UCL AI Centre (With Google DeepMind)",
    image: "/zhe-wang-profile.jpg",
    about: [
      "Zhe Wang is a PhD student at the University of Basel and a member of the UCL AI Centre, working in collaboration with Google DeepMind. His research focuses on advanced deep learning architectures and their applications to complex reasoning tasks.",
      "He specializes in developing novel neural network architectures that can perform sophisticated reasoning and planning. His work at the intersection of academia and industry brings cutting-edge research to practical applications.",
      "Zhe's research combines theoretical insights with large-scale implementations, contributing to both fundamental understanding and real-world deployment of advanced AI systems."
    ],
    researchInterests: [
      {
        title: "Deep Learning Architectures",
        description: "Novel neural network designs for complex reasoning and learning tasks"
      },
      {
        title: "Reasoning and Planning",
        description: "AI systems that can perform logical reasoning and strategic planning"
      },
      {
        title: "Large-Scale ML Systems",
        description: "Scalable machine learning systems and distributed training methods"
      },
      {
        title: "AI Research & Development",
        description: "Bridging fundamental research with practical AI applications"
      }
    ],
    publications: [],
    socialLinks: [
      {
        type: "email" as const,
        url: "mailto:zhe.wang@example.com",
        label: "Email"
      },
      {
        type: "scholar" as const,
        url: "https://scholar.google.com/citations?user=zwang",
        label: "Google Scholar"
      },
      {
        type: "linkedin" as const,
        url: "https://linkedin.com/in/zhe-wang",
        label: "LinkedIn"
      },
      {
        type: "twitter" as const,
        url: "https://twitter.com/zhe_wang",
        label: "Twitter"
      },
      {
        type: "external" as const,
        url: "https://zhewang.com",
        label: "External Website"
      }
    ]
  };

  return <ProfilePage {...profileData} />;
};

export default ZheWang;