import ProfilePage from "@/components/ProfilePage";

const WilliamBankes = () => {
  const profileData = {
    name: "William Bankes",
    role: "PhD Student",
    affiliation: "University of Basel & UCL AI Centre",
    image: "/william-bankes-profile.jpg",
    about: [
      "William Bankes is a PhD student at the University of Basel and a member of the UCL AI Centre. His research focuses on advancing machine learning through novel algorithmic approaches and theoretical insights.",
      "He is particularly interested in developing efficient learning algorithms that can handle complex, real-world data distributions. His work combines theoretical analysis with practical implementation to create robust AI systems.",
      "Prior to his PhD studies, William gained experience in both academic research and industry applications of machine learning, bringing a unique perspective to his current research endeavors."
    ],
    researchInterests: [
      {
        title: "Learning Theory",
        description: "Statistical learning theory, generalization bounds, and theoretical foundations"
      },
      {
        title: "Optimization Methods",
        description: "Novel optimization algorithms for machine learning and deep networks"
      },
      {
        title: "Robust Learning",
        description: "Learning algorithms that are robust to noise and distribution shifts"
      },
      {
        title: "Computational Efficiency",
        description: "Efficient algorithms for large-scale machine learning problems"
      }
    ],
    publications: [],
    socialLinks: [
      {
        type: "email" as const,
        url: "mailto:william.bankes@example.com",
        label: "Email"
      },
      {
        type: "scholar" as const,
        url: "https://scholar.google.com/citations?user=wbankes",
        label: "Google Scholar"
      },
      {
        type: "linkedin" as const,
        url: "https://linkedin.com/in/william-bankes",
        label: "LinkedIn"
      },
      {
        type: "twitter" as const,
        url: "https://twitter.com/william_bankes",
        label: "Twitter"
      },
      {
        type: "external" as const,
        url: "https://williambankes.com",
        label: "External Website"
      }
    ]
  };

  return <ProfilePage {...profileData} />;
};

export default WilliamBankes;