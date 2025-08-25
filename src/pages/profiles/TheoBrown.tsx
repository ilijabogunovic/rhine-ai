import ProfilePage from "@/components/ProfilePage";

const TheoBrown = () => {
  const profileData = {
    name: "Theo Brown",
    role: "PhD Student",
    affiliation: "UCL AI Centre, UK Atomic Energy Authority",
    image: "/theo-brown-profile.jpg",
    about: [
      ""
    ],
    researchInterests: [
      {
        title: "Probabilistic machine learning",
        description: ""
      },
      {
        title: "Physics-Informed ML",
        description: ""
      },
      {
        title: "Robust Optimization and Control",
        description: ""
      },
      {
        title: "Scientific Computing",
        description: "Computational methods for large-scale, multi-fidelity physics simulations"
      }
    ],
    publications: [],
    socialLinks: [
      {
        type: "email" as const,
        url: "mailto:theodore.brown@ucl.ac.uk",
        label: "Email"
      },
      {
        type: "scholar" as const,
        url: "https://scholar.google.com/citations?user=m4LY31gAAAAJ",
        label: "Google Scholar"
      },
      {
        type: "linkedin" as const,
        url: "https://linkedin.com/in/theo-brown-uk",
        label: "LinkedIn"
      },
      {
        type: "github" as const,
        url: "https://github.com/theo-brown",
        label: "Github"
      },
      {
        type: "external" as const,
        url: "https://theobrown.com",
        label: "External Website"
      }
    ]
  };

  return <ProfilePage {...profileData} />;
};

export default TheoBrown;
