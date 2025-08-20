import ProfilePage from "@/components/ProfilePage";

const SeongHo = () => {
  const profileData = {
    name: "Seong Ho",
    role: "PhD Student",
    affiliation: "University of Basel & UCL AI Centre (With B. Paige, UCL)",
    image: "/seong-ho-profile.jpg",
    about: [
      "Seong Ho is a PhD student at the University of Basel and a member of the UCL AI Centre, working in collaboration with B. Paige at UCL. His research focuses on probabilistic machine learning and Bayesian methods.",
      "He specializes in developing scalable Bayesian inference methods and probabilistic models that can handle uncertainty in complex machine learning systems. His work aims to make AI systems more reliable and interpretable.",
      "Seong Ho's research combines theoretical foundations in probability theory with practical implementations, contributing to both the understanding and application of probabilistic machine learning methods."
    ],
    researchInterests: [
      {
        title: "Bayesian Machine Learning",
        description: "Probabilistic models, Bayesian inference, and uncertainty quantification"
      },
      {
        title: "Variational Methods",
        description: "Variational inference and approximate Bayesian computation techniques"
      },
      {
        title: "Probabilistic Programming",
        description: "Tools and methods for probabilistic programming and model specification"
      },
      {
        title: "Uncertainty Quantification",
        description: "Methods for quantifying and propagating uncertainty in ML systems"
      }
    ],
    publications: [],
    socialLinks: [
      {
        type: "email" as const,
        url: "mailto:seong.ho@example.com",
        label: "Email"
      },
      {
        type: "scholar" as const,
        url: "https://scholar.google.com/citations?user=sho",
        label: "Google Scholar"
      },
      {
        type: "linkedin" as const,
        url: "https://linkedin.com/in/seong-ho",
        label: "LinkedIn"
      },
      {
        type: "twitter" as const,
        url: "https://twitter.com/seong_ho",
        label: "Twitter"
      },
      {
        type: "external" as const,
        url: "https://seongho.com",
        label: "External Website"
      }
    ]
  };

  return <ProfilePage {...profileData} />;
};

export default SeongHo;