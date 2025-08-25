import ProfilePage from "@/components/ProfilePage";

const TheoBrown = () => {
  const profileData = {
    name: "Theo Brown",
    role: "PhD Student",
    affiliation: "UCL AI Centre (with Prof. Sarah Spurgeon), UK Atomic Energy Authority (with Dr. Lorenzo Zanisi)",
    image: "/theo-brown-profile.jpg",
    about: [
      "Theo is a PhD student at UCL, jointly supervised with Prof. Sarah Spurgeon (Electronic & Electrical Engineering). He is a visiting researcher at the UK's national lab for nuclear fusion research (UKAEA), where he works with the plasma scenario development team for the UK's next-generation fusion device.",
      "Motivated by challenging problems from nuclear fusion and plasma physics, Theo's research involves developing new ML methods for robust, efficient optimization and online control, with a focus on situations where gathering data is expensive.",
    ],
    researchInterests: [
      {
        title: "Probabilistic machine learning",
        description: "Principled ML methods that learn distributions rather than point estimates, including Bayesian optimization, Gaussian processes and generative modelling"
      },
      {
        title: "Physics-Informed ML",
        description: "Incorporating prior knowledge from physics and geometry into learning-based algorithms"
      },
      {
        title: "Robust Optimization and Control",
        description: "Algorithms that provably maintain performance under modifications to the environment"
      },
      {
        title: "Scientific Computing",
        description: "Computational methods for large-scale, multi-fidelity physics simulations"
      }
    ],
    publications: [
      {
        title: "Sample-efficient Bayesian Optimisation Using Known Invariances",
        authors: "Theodore Brown, Alexandru Cioba, Ilija Bogunovic",
        venue: "Neural Information Processing Systems (NeurIPS)",
        year: "2024",
        description: "Proving bounds on the improvements to an optimizer's performance gained by incorporating known symmetries",
      },
      {
        title: "Multi-objective Bayesian optimization for design of Pareto-optimal current drive profiles in STEP",
        authors: "Theodore Brown, Stephen Marsden, Vignesh Gopakumar, Alexander Terenin, Hong Ge, Francis Casson",
        venue: "IEEE Transactions on Plasma Science",
        year: "2024",
        description: "Developing new reactor designs that balance tradeoffs between competing objectives",
      }
    ],
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
