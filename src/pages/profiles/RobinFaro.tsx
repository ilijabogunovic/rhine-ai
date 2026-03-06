import ProfilePage from "@/components/ProfilePage";
import { getAuthorPublications } from "@/utils/publicationUtils";
import { getImagePath } from "@/utils/imageUtils";

const RobinFaro = () => {
  const profileData = {
    name: "Robin Faro",
    role: "PhD Student",
    affiliation: "University of Basel",
    image: getImagePath("/robin-faro-profile.jpg"),
    about: [
      "Robin Faro is a PhD student at the University of Basel, jointly supervised by Prof. Ilija Bogunovic and Prof. Aurelien Lucchi."
    ],
    researchInterests: [],
    publications: getAuthorPublications("Robin Faro"),
    socialLinks: []
  };

  return <ProfilePage {...profileData} />;
};

export default RobinFaro;
