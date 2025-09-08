import ProfilePage from "@/components/ProfilePage";
import { getAuthorPublications } from "@/utils/publicationUtils";
import { getImagePath } from "@/utils/imageUtils";

const ShyamSundharRamesh = () => {
  const profileData = {
    name: "Shyam Sundhar Ramesh",
    role: "PhD Student",
    affiliation: "University College London",
    image: getImagePath("/shyam-ramesh-new-2.jpg"),
    about: [
      "Shyam Sundhar Ramesh is a PhD student at the University College London. His research lies at the intersection of reinforcement learning, robust optimization, and large language model alignment. His work focuses on developing principled methods that ensure reliability, safety, and robustness in machine learning systems, with applications ranging from safe alignment to sustainable energy. More recently, he is interested in the challenges of language model alignment, exploring robust and group-fair decoding strategies, inference-time safety, and pluralistic alignment approaches."
    ],
    researchInterests: [
      {
        title: "Reinforcement Learning",
        description: "Designing fundamental algorithms and analyzing their theoretical guarantees for sequential decision-making."
      },
      {
        title: "Robust Optimization",
        description: "Developing scalable methods that remain reliable under distributional shifts and limited resources."
      },
      {
        title: "Large Language Model Alignment",
        description: "Creating optimization-based approaches to ensure safe and fair behavior in language models."
      },
      {
        title: "Bayesian Optimization",
        description: "Advancing probabilistic optimization techniques for impactful real-world applications such as energy systems."
      }
    ],
    publications: getAuthorPublications("Shyam Sundhar Ramesh"),
    socialLinks: [
      {
        type: "email" as const,
        url: "mailto:shyam.ramesh.22@ucl.ac.uk",
        label: "Email"
      },
      {
        type: "scholar" as const,
        url: "https://scholar.google.com/citations?user=-d5usyUAAAAJ&hl=en",
        label: "Google Scholar"
      },
      {
        type: "linkedin" as const,
        url: "https://www.linkedin.com/in/shyamsundharr/",
        label: "LinkedIn"
      },
      {
        type: "twitter" as const,
        url: "https://x.com/shyam91019594",
        label: "Twitter"
      },
      {
        type: "external" as const,
        url: "https://github.com/rsshyam",
        label: "GitHub"
      }
    ]
  };

  return <ProfilePage {...profileData} />;
};

export default ShyamSundharRamesh;