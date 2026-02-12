import ProfilePage from "@/components/ProfilePage";
import { getAuthorPublications } from "@/utils/publicationUtils";

const RobinFaro = () => {
  const profileData = {
    name: "Robin Faro",
    role: "PhD Student",
    affiliation: "University of Basel",
    image: "",
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
