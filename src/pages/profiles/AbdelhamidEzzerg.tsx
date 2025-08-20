import ProfilePage from "@/components/ProfilePage";

const AbdelhamidEzzerg = () => {
  const profileData = {
    name: "Abdelhamid Ezzerg",
    role: "PhD Student",
    affiliation: "University of Basel & UCL AI Centre (With J. Knoblauch, UCL)",
    image: "/abdelhamid-ezzerg-profile.jpg",
    about: [
      "Abdelhamid Ezzerg is a PhD student at the University of Basel and a member of the UCL AI Centre, working in collaboration with J. Knoblauch at UCL. His research focuses on statistical machine learning and computational methods for data analysis.",
      "He specializes in developing robust statistical methods that can handle complex, high-dimensional data. His work combines statistical theory with computational efficiency to create practical solutions for modern data challenges.",
      "Abdelhamid's research contributes to both the theoretical understanding of statistical learning and the development of practical algorithms that can be applied to real-world data analysis problems."
    ],
    researchInterests: [
      {
        title: "Statistical Learning",
        description: "Statistical methods for machine learning and data analysis"
      },
      {
        title: "High-Dimensional Statistics",
        description: "Methods for analyzing complex, high-dimensional datasets"
      },
      {
        title: "Computational Statistics",
        description: "Efficient computational methods for statistical inference"
      },
      {
        title: "Robust Methods",
        description: "Statistical methods that are robust to outliers and model misspecification"
      }
    ],
    publications: [],
    socialLinks: [
      {
        type: "email" as const,
        url: "mailto:abdelhamid.ezzerg@example.com",
        label: "Email"
      },
      {
        type: "scholar" as const,
        url: "https://scholar.google.com/citations?user=aezzerg",
        label: "Google Scholar"
      },
      {
        type: "linkedin" as const,
        url: "https://linkedin.com/in/abdelhamid-ezzerg",
        label: "LinkedIn"
      },
      {
        type: "twitter" as const,
        url: "https://twitter.com/abdelhamid_ezzerg",
        label: "Twitter"
      },
      {
        type: "external" as const,
        url: "https://abdelhamidezzerg.com",
        label: "External Website"
      }
    ]
  };

  return <ProfilePage {...profileData} />;
};

export default AbdelhamidEzzerg;