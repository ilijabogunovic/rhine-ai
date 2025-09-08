import ProfilePage from "@/components/ProfilePage";
import { getAuthorPublications } from "@/utils/publicationUtils";

const ZheWang = () => {
  const profileData = {
    name: "Zhe Wang",
    role: "PhD Student",
    affiliation: "UCL AI Centre (With Google DeepMind)",
    image: "/zhe-wang-profile.jpg",
    about: [],
    researchInterests: [],
    publications: getAuthorPublications("Zhe Wang"),
    socialLinks: [
      {
        type: "email" as const,
        url: "mailto:zhe.wang@example.com",
        label: "Email"
      },
      {
        type: "scholar" as const,
        url: "https://scholar.google.com/citations?user=zwang",
        label: "Google Scholar"
      },
      {
        type: "linkedin" as const,
        url: "https://linkedin.com/in/zhe-wang",
        label: "LinkedIn"
      },
      {
        type: "twitter" as const,
        url: "https://twitter.com/zhe_wang",
        label: "Twitter"
      },
      {
        type: "external" as const,
        url: "https://zhewang.com",
        label: "External Website"
      }
    ]
  };

  return <ProfilePage {...profileData} />;
};

export default ZheWang;