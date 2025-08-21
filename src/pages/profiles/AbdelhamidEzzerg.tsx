import ProfilePage from "@/components/ProfilePage";

const AbdelhamidEzzerg = () => {
  const profileData = {
    name: "Abdelhamid Ezzerg",
    role: "PhD Student",
    affiliation: "University College London (With J. Knoblauch, UCL)",
    image: "/abdelhamid-ezzerg-profile.jpg",
    about: [
      "Abdelhamid Ezzerg is a PhD student at University College London, working in collaboration with J. Knoblauch at UCL. His research focuses on statistical machine learning and computational methods for data analysis.",
      "He specializes in developing robust statistical methods that can handle complex, high-dimensional data. His work combines statistical theory with computational efficiency to create practical solutions for modern data challenges.",
      "Abdelhamid's research contributes to both the theoretical understanding of statistical learning and the development of practical algorithms that can be applied to real-world data analysis problems."
    ],
    researchInterests: [
      {
        title: "Statistical Learning",
        description: "Statistical methods for machine learning and data analysis"
      },
      {
        title: "Robust Methods",
        description: "Statistical methods that are robust to outliers and model misspecification"
      },
      {
        title: "Computational Statistics",
        description: "Efficient computational methods for statistical inference"
      },
      {
        title: "High-Dimensional Statistics",
        description: "Methods for analyzing complex, high-dimensional datasets"
      }
    ],
    publications: [],
    socialLinks: [
      {
        type: "email" as const,
        url: "mailto:abdelhamid.ezzerg.24@ucl.ac.uk",
        label: "Email"
      },
      {
        type: "scholar" as const,
        url: "https://scholar.google.com/citations?user=Sltvi4AAAAAJ&hl",
        label: "Google Scholar"
      },
      {
        type: "linkedin" as const,
        url: "https://www.linkedin.com/in/abdelhamid-ezzerg-274437a6/",
        label: "LinkedIn"
      },
      {
        type: "twitter" as const,
        url: "https://x.com/ezzergabdelham1",
        label: "Twitter"
      },
      {
        type: "external" as const,
        url: "https://ezzerg.github.io/",
        label: "External Website"
      }
    ]
  };

  return <ProfilePage {...profileData} />;
};

export default AbdelhamidEzzerg;