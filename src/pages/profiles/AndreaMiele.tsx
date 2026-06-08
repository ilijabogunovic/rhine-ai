import ProfilePage from "@/components/ProfilePage";
import { getAuthorPublications } from "@/utils/publicationUtils";
import { getImagePath } from "@/utils/imageUtils";

const AndreaMiele = () => {
  const profileData = {
    name: "Andrea Miele",
    role: "PhD Student",
    affiliation: "University of Basel",
    image: getImagePath("/andrea-miele-profile.jpg"),
    about: [
      "Andrea Miele is a PhD student at the University of Basel."
    ],
    researchInterests: [
      {
        title: "Alignment and Reasoning",
        description: "Alignment, Reinforcement Learning, and Inference Time Algorithms for Large Language Models"
      },
      {
        title: "Diffusion-based LLMs",
        description: "Efficient architecture, post-training, benchmarking"
      },
    ],
    publications: getAuthorPublications("Andrea Miele"),
    socialLinks: [
        {
        type: "email" as const,
        url: "mailto:andrea.miele@unibas.ch",
        label: "Email"
      },
      {
        type: "twitter" as const,
        url: "https://x.com/andreamiele_",
        label: "Twitter"
      },
      {
        type: "external" as const,
        url: "https://www.andreamiele.fr",
        label: "External Website"
      }
    ]
  };

  return <ProfilePage {...profileData} />;
};

export default AndreaMiele;
