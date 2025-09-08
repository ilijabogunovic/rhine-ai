import ProfilePage from "@/components/ProfilePage";
import { getAuthorPublications } from "@/utils/publicationUtils";
import { getImagePath } from "@/utils/imageUtils";

const XiaohangTang = () => {
  const profileData = {
    name: "Xiaohang Tang",
    role: "PhD Student",
    affiliation: "University College London",
    image: getImagePath("/xiaohang-tang-profile.jpg"),
    about: [
      "Xiaohang Tang is a PhD student at the UCL Statistical Science. His research focuses on self-improving AI, spanning reinforcement learning, game theory, and Large Language Models.",
    ],
    researchInterests: [
      {
        title: "Reinforcement Learning",
        description: "Offline RL, Multi-agent RL, Robust RL, and RL with Large Language Models"
      },
      {
        title: "Game Theory",
        description: "Online Learning, Game Solving."
      },
      {
        title: "Large Language Models",
        description: "Alignment, Reasoning, and Diffusion-based LLMs"
      }
    ],
    publications: getAuthorPublications("Xiaohang Tang"),
    socialLinks: [
      {
        type: "email" as const,
        url: "xiaohang.tang20@ucl.ac.uk",
        label: "Email"
      },
      {
        type: "scholar" as const,
        url: "https://scholar.google.co.uk/citations?user=VVaL9mwAAAAJ&hl=en&oi=ao",
        label: "Google Scholar"
      },
      {
        type: "twitter" as const,
        url: "https://x.com/xiaohang_tang?s=21&t=ALSNVDQfZZ3DP1N01YSQag",
        label: "Twitter"
      }
    ]
  };

  return <ProfilePage {...profileData} />;
};

export default XiaohangTang;