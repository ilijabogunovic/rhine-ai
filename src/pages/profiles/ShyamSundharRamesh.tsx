import ProfilePage from "@/components/ProfilePage";

const ShyamSundharRamesh = () => {
  const profileData = {
    name: "Shyam Sundhar Ramesh",
    role: "PhD Student",
    affiliation: "University of Basel & UCL AI Centre",
    image: "/shyam-ramesh-profile.jpg",
    about: [
      "Shyam Sundhar Ramesh is a PhD student at the University of Basel and a member of the UCL AI Centre. His research focuses on developing innovative machine learning algorithms with strong theoretical foundations.",
      "He is passionate about bridging the gap between theory and practice in machine learning, with particular interest in scalable algorithms and their real-world applications. His work aims to create more efficient and robust AI systems.",
      "Shyam brings a strong background in mathematics and computer science to his research, contributing fresh perspectives to challenging problems in artificial intelligence and machine learning."
    ],
    researchInterests: [
      {
        title: "Algorithmic Foundations",
        description: "Fundamental algorithms for machine learning and their theoretical properties"
      },
      {
        title: "Scalable Learning",
        description: "Algorithms that scale efficiently with data size and computational resources"
      },
      {
        title: "Mathematical Optimization",
        description: "Optimization theory and methods for machine learning applications"
      },
      {
        title: "Applied Machine Learning",
        description: "Practical applications of ML algorithms to real-world problems"
      }
    ],
    publications: [],
    socialLinks: [
      {
        type: "email" as const,
        url: "mailto:shyam.ramesh@example.com",
        label: "Email"
      },
      {
        type: "scholar" as const,
        url: "https://scholar.google.com/citations?user=sramesh",
        label: "Google Scholar"
      },
      {
        type: "linkedin" as const,
        url: "https://linkedin.com/in/shyam-ramesh",
        label: "LinkedIn"
      },
      {
        type: "twitter" as const,
        url: "https://twitter.com/shyam_ramesh",
        label: "Twitter"
      },
      {
        type: "external" as const,
        url: "https://shyamramesh.com",
        label: "External Website"
      }
    ]
  };

  return <ProfilePage {...profileData} />;
};

export default ShyamSundharRamesh;