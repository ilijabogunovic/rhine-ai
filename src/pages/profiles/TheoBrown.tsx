import ProfilePage from "@/components/ProfilePage";

const TheoBrown = () => {
  const profileData = {
    name: "Theo Brown",
    role: "PhD Student",
    affiliation: "University of Basel & UCL AI Centre (With UKAEA)",
    image: "/theo-brown-profile.jpg",
    about: [
      "Theo Brown is a PhD student at the University of Basel and a member of the UCL AI Centre, working in collaboration with the UK Atomic Energy Authority (UKAEA). His research focuses on the intersection of machine learning and energy applications.",
      "He specializes in developing AI solutions for complex energy systems, with particular emphasis on fusion energy and sustainable energy technologies. His work combines cutting-edge machine learning techniques with domain expertise in energy physics.",
      "Theo's interdisciplinary approach brings together computational methods, theoretical physics, and practical engineering to address some of the most challenging problems in sustainable energy research."
    ],
    researchInterests: [
      {
        title: "AI for Energy Systems",
        description: "Machine learning applications in fusion energy and sustainable energy systems"
      },
      {
        title: "Physics-Informed ML",
        description: "Incorporating physical constraints and domain knowledge into learning algorithms"
      },
      {
        title: "Control Systems",
        description: "AI-driven control and optimization of complex energy systems"
      },
      {
        title: "Scientific Computing",
        description: "Computational methods for large-scale physics simulations and modeling"
      }
    ],
    publications: [],
    socialLinks: [
      {
        type: "email" as const,
        url: "mailto:theo.brown@example.com",
        label: "Email"
      },
      {
        type: "scholar" as const,
        url: "https://scholar.google.com/citations?user=tbrown",
        label: "Google Scholar"
      },
      {
        type: "linkedin" as const,
        url: "https://linkedin.com/in/theo-brown",
        label: "LinkedIn"
      },
      {
        type: "twitter" as const,
        url: "https://twitter.com/theo_brown",
        label: "Twitter"
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