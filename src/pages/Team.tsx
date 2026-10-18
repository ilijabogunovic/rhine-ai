
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/brand/PageHeader";
import Reveal from "@/components/brand/Reveal";
import { Link } from "react-router-dom";
import { getImagePath } from "@/utils/imageUtils";

const teamMembers = [
  {
    name: "Prof. Dr. Ilija Bogunovic",
    role: "Associate Professor",
    expertise: "",
    bio: "University of Basel\nUniversity College London",
    image: "/ilija-bogunovic-proper.jpg",
    link: "/team/ilija-bogunovic"
  },
  {
    name: "William Bankes",
    role: "PhD Student",
    expertise: "",
    bio: "",
    image: "/william-bankes-new.jpg",
    link: "/team/william-bankes"
  },
  {
    name: "Shyam Sundhar Ramesh",
    role: "PhD Student",
    expertise: "",
    bio: "",
    image: "/shyam-ramesh-proper.jpg",
    link: "/team/shyam-sundhar-ramesh"
  },
  {
    name: "Xiaohang Tang",
    role: "PhD Student",
    bio: "University College London",
    expertise: "",
    image: "/xiaohang-tang-profile.png",
    link: "/team/xiaohang-tang"
  },
  {
    name: "Theo Brown",
    role: "PhD Student",
    expertise: "",
    bio: "With UKAEA",
    image: "/theo-brown-resized.jpg",
    link: "/team/theo-brown"
  },
  {
    name: "Seongho Son",
    role: "PhD Student",
    expertise: "",
    bio: "With B. Paige (UCL)",
    image: "/seong-ho-resized.jpg",
    link: "/team/seong-ho"
  },
  {
    name: "Zhe Wang",
    role: "PhD Student",
    expertise: "",
    bio: "With Google DeepMind",
    image: "/zhe-wang-proper.jpg",
    link: "/team/zhe-wang"
  },
  {
    name: "Ahmet H. Guzel",
    role: "PhD Student",
    expertise: "",
    bio: "With J. Parker-Holder (Google DeepMind)",
    image: "/ahmet-guzel-proper.jpg",
    link: "/team/ahmet-h-guzel"
  },
  {
    name: "Abdelhamid Ezzerg",
    role: "PhD Student",
    expertise: "",
    bio: "With J. Knoblauch (UCL)",
    image: "/abdelhamid-ezzerg-profile.jpg",
    link: "/team/abdelhamid-ezzerg"
  },
  {
    name: "Dr. Sangwoong Yoon",
    role: "Research Fellow",
    expertise: "",
    bio: "University College London\nIncoming assistant professor at UNIST",
    image: "/sangwoong-yoon-resized.jpg",
    link: "/team/sangwoong-yoon"
  },
  {
    name: "Robin Faro",
    role: "PhD Student",
    expertise: "",
    bio: "University of Basel \nWith A. Lucchi",
    image: "/robin-faro-profile.jpg",
    link: "/team/robin-faro"
  },
  {
    name:"Andrea Miele",
    role: "PhD Student",
    expertise: "",
    bio: "University of Basel \nWith C. Gulcehre (EPFL)",
    image: "/andrea-miele-profile.jpg",
    link: "/team/andrea-miele"
  },
  {
    name: "Antonio Lopardo",
    role: "PhD Student",
    expertise: "",
    bio: "University of Basel \nWith A. Lucchi",
    image: "/antonio-lopardo-profile.jpg",
    link: "/team/antonio-lopardo"
  },
  {
    name: "Your Name Here?",
    role: "Join Our Team",
    expertise: "",
    bio: "We're always looking for passionate AI researchers to join our lab. Contact us if you're interested!",
    image: "🚀",
    link: "/join-us"
  }
];

const collaborators = [
  {
    name: "Lorenz Wolf",
    role: "PhD Student",
    expertise: "",
    bio: "University College London\nThe Alan Turing Institute",
    image: "/lorenz-wolf-profile-2.jpg"
  },
  {
    name: "Rares Dolga",
    role: "PhD Student",
    expertise: "",
    bio: "",
    image: ""
  },
  {
    name: "Colin Doumont",
    role: "PhD Student",
    expertise: "",
    bio: "Tübingen AI Center (with Philipp Hennig)",
    image: "/colin-doumont.jpg",
    link: "/team/colin-doumont"
  },
  {
    name: "Juliusz Ziomek",
    role: "PhD Student",
    expertise: "",
    bio: "",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  }
];

// Master students currently working with the lab. `role` says "Master Thesis" or "Master Project";
// leave `image` empty to show their initials.
const masterStudents: Person[] = [
  {
    name: "Pakeeza Ehsan",
    role: "Master Thesis",
    bio: "University of Basel",
    image: "",
  },
];

// Former lab members. `bio` can say where they are now.
const alumni: Person[] = [
  {
    name: "Jue Du",
    role: "Master Thesis",
    bio: "University of Basel",
    image: "",
  },
  {
    name: "Akshat Mittal",
    role: "Master Thesis",
    bio: "University College London",
    image: "",
  },
];

type Person = { name: string; role: string; bio: string; image: string; link?: string };

const isPhoto = (image: string) => image.startsWith("/") || image.startsWith("https://");
const photoSrc = (image: string) => (image.startsWith("/") ? getImagePath(image) : image);
const initials = (name: string) =>
  name.replace(/^(Prof\. |Dr\. )+/g, "").split(" ").map((n) => n[0]).join("").slice(0, 2);

/** A round portrait over an offset disc: beige at rest, carmine and shifted under the pointer. */
const Portrait = ({ person, size }: { person: Person; size: "lg" | "sm" | "xl" }) => {
  const disc =
    size === "xl"
      ? "translate-x-[7%] -translate-y-[5%] bg-carmine"
      : "translate-x-[5%] translate-y-[5%] bg-beige group-hover:translate-x-[8%] group-hover:translate-y-[2%] group-hover:bg-carmine";
  return (
    <div className={`relative aspect-square w-full ${size === "sm" ? "max-w-[8.5rem]" : ""}`}>
      <span
        aria-hidden="true"
        className={`absolute inset-0 rounded-full transition-[transform,background-color] duration-500 ease-out ${disc}`}
      />
      {isPhoto(person.image) && !person.image.includes("unsplash.com") ? (
        <img
          src={photoSrc(person.image)}
          alt={person.name}
          loading={size === "xl" ? "eager" : "lazy"}
          className="relative aspect-square w-full rounded-full bg-paper-2 object-cover object-[50%_25%] transition-transform duration-500 ease-out group-hover:-translate-y-1"
        />
      ) : (
        <span
          aria-hidden="true"
          className="t-4 relative flex aspect-square w-full items-center justify-center rounded-full bg-paper-2 font-display text-ink"
        >
          {initials(person.name)}
        </span>
      )}
    </div>
  );
};

const PersonCard = ({ person, size = "lg" }: { person: Person; size?: "lg" | "sm" }) => {
  const body = (
    <>
      <Portrait person={person} size={size} />
      <h3 className={`mt-6 font-semibold text-ink transition-colors group-hover:text-carmine ${size === "lg" ? "t-3" : "t-2 font-body"}`}>
        {person.name}
      </h3>
      <p className="t-1 mt-1 font-medium text-carmine">{person.role}</p>
      {person.bio && <p className="t-1 mt-1 whitespace-pre-line text-ink-soft">{person.bio}</p>}
    </>
  );
  return person.link ? (
    <Link to={person.link} className="group block">
      {body}
    </Link>
  ) : (
    <div className="group">{body}</div>
  );
};

/** A secondary group of people: heading and intro on the left, smaller portraits on the right. */
const PeopleGroup = ({
  id,
  title,
  intro,
  people,
  empty,
  action,
}: {
  id: string;
  title: string;
  intro: string;
  people: Person[];
  empty?: string;
  action?: React.ReactNode;
}) => (
  <section className="wrap grid gap-12 pb-[var(--section)] lg:grid-cols-12" aria-labelledby={`${id}-title`}>
    <div className="lg:col-span-4">
      <h2 id={`${id}-title`} className="t-4 font-semibold text-ink">
        {title}
      </h2>
      <p className="t-2 mt-5 max-w-[40ch] text-ink-soft">{intro}</p>
      {action}
    </div>
    {people.length > 0 ? (
      <Reveal as="ul" mode="rows" className="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-4 lg:col-span-8">
        {people.map((person) => (
          <li key={person.name}>
            <PersonCard person={person} size="sm" />
          </li>
        ))}
      </Reveal>
    ) : (
      <p className="t-2 text-ink-soft lg:col-span-8 lg:pt-3">{empty}</p>
    )}
  </section>
);

const Team = () => {
  const [lead, ...members] = teamMembers.filter((m) => m.link !== "/join-us");
  const joinCard = teamMembers.find((m) => m.link === "/join-us");

  return (
    <Layout>
      <PageHeader
        title="Our team"
        intro="We're a diverse group of researchers passionate about advancing artificial intelligence and making meaningful discoveries together."
      />

      <figure className="wrap">
        <Reveal mode="open">
          <div className="overflow-hidden">
            <img
              src={getImagePath("/team-photo.jpg")}
              alt="The Rhine AI team on a terrace in Agadir, Morocco"
              className="aspect-[4/3] w-full object-cover sm:aspect-[16/8]"
              style={{ objectPosition: "50% 45%" }}
            />
          </div>
        </Reveal>
        <figcaption className="t-1 mt-4 text-ink-soft">Group retreat in Agadir, Morocco, 2025</figcaption>
      </figure>

      {/* The lab's lead, set large: the portrait sits over a carmine disc like the sun over the Rhine */}
      <section className="wrap pt-[var(--section)]" aria-labelledby="lead-title">
        <Link to={lead.link ?? "/team"} className="group grid items-center gap-10 sm:grid-cols-12 sm:gap-12">
          <Reveal className="mx-auto w-[72%] max-w-[24rem] sm:col-span-5 sm:w-full lg:col-span-4">
            <Portrait person={lead} size="xl" />
          </Reveal>
          <Reveal className="sm:col-span-7 lg:col-span-7 lg:col-start-6">
            <h2 id="lead-title" className="t-4 font-semibold text-ink transition-colors group-hover:text-carmine">
              {lead.name}
            </h2>
            <p className="t-3 mt-3 font-display text-ink">{lead.role}</p>
            <p className="t-2 mt-2 whitespace-pre-line text-ink-soft">{lead.bio}</p>
            <p className="link t-1 mt-6 inline-block font-medium">View profile →</p>
          </Reveal>
        </Link>
      </section>

      <section className="wrap py-[var(--section)]" aria-labelledby="members-title">
        <h2 id="members-title" className="t-4 font-semibold text-ink">
          Researchers
        </h2>
        <Reveal
          as="ul"
          mode="rows"
          className="mt-14 grid grid-cols-2 gap-x-6 gap-y-16 sm:gap-x-10 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-14"
        >
          {members.map((member) => (
            <li key={member.name}>
              <PersonCard person={member} />
            </li>
          ))}
          {joinCard && (
            <li>
              <Link to="/join-us" className="group block">
                <span className="flex aspect-square w-full flex-col items-center justify-center rounded-full bg-carmine p-[14%] text-center text-paper transition-transform duration-500 ease-out group-hover:scale-[1.03] group-hover:bg-carmine-deep">
                  <span className="t-3 font-display font-semibold">{joinCard.name}</span>
                  <span className="t-1 mt-2 hidden text-paper opacity-80 sm:block">{joinCard.role} →</span>
                </span>
                <p className="t-1 mt-6 text-ink-soft">{joinCard.bio}</p>
              </Link>
            </li>
          )}
        </Reveal>
      </section>

      <PeopleGroup
        id="collaborators"
        title="Our collaborators"
        intro="We collaborate with distinguished researchers and leading institutions globally to advance the frontiers of artificial intelligence."
        people={collaborators}
      />
      <PeopleGroup
        id="masters"
        title="Master students"
        intro="Students carrying out their master thesis or a master project with the lab, in Basel or at UCL."
        people={masterStudents}
        empty="Master students will be listed here soon."
        action={
          <Link to="/teaching/topics" className="link t-2 mt-5 inline-block font-medium">
            Open project topics →
          </Link>
        }
      />
      <PeopleGroup
        id="alumni"
        title="Alumni"
        intro="Former members of the lab and where their research has taken them."
        people={alumni}
        empty="Alumni will be listed here soon."
      />
    </Layout>
  );
};

export default Team;
