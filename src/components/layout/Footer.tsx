import { Link } from "react-router-dom";
import { Mark } from "@/components/brand/Motif";

const columns = [
  {
    title: "The lab",
    links: [
      { name: "About", to: "/about" },
      { name: "Team", to: "/team" },
      { name: "Join us", to: "/join-us" },
      { name: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Research",
    links: [
      { name: "Publications", to: "/publications" },
      { name: "News", to: "/news" },
      { name: "Blog", to: "/blog" },
      { name: "Teaching", to: "/teaching" },
    ],
  },
  {
    title: "Elsewhere",
    links: [
      { name: "Google Scholar", href: "https://scholar.google.com/citations?user=xMvt3NEAAAAJ&hl=en" },
      { name: "X (Twitter)", href: "https://x.com/ilijabogunovic" },
      { name: "DMI, University of Basel", href: "https://dmi.unibas.ch/de/" },
      {
        name: "UCL Centre for AI",
        href: "https://www.ucl.ac.uk/engineering/research/centres-institutes-and-labs/ucl-centre-artificial-intelligence",
      },
    ],
  },
];

const linkClass = "text-ink-soft transition-colors hover:text-carmine";

const Footer = () => (
  <footer className="bg-paper-2 text-ink">
    <div className="wrap grid gap-10 py-14 lg:grid-cols-12">
      <div className="lg:col-span-3">
        <Link to="/" className="group inline-flex items-center gap-3" aria-label="Rhine AI Lab, home">
          <Mark className="h-9 w-9 transition-transform duration-300 ease-out group-hover:-rotate-6" />
          <span className="font-display text-[1.375rem] leading-none">
            <span className="font-semibold">Rhine AI</span> <span className="text-ink-muted">Lab</span>
          </span>
        </Link>
        <p className="t-1 mt-4 max-w-[30ch] text-ink-soft">
          Reasoning, Human-aligned Intelligence and Novel Exploration.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-5">
        {columns.map((col) => (
          <div key={col.title}>
            <h2 className="t-1 font-body font-semibold text-ink">{col.title}</h2>
            <ul className="t-1 mt-3 space-y-1.5">
              {col.links.map((l) => (
                <li key={l.name}>
                  {"to" in l && l.to ? (
                    <Link to={l.to} className={linkClass}>
                      {l.name}
                    </Link>
                  ) : (
                    <a href={(l as { href: string }).href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                      {l.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="t-1 grid gap-6 sm:grid-cols-2 lg:col-span-4 lg:grid-cols-1">
        <address className="not-italic text-ink-soft">
          <span className="font-semibold text-ink">Basel</span>
          <br />
          Department of Mathematics and Computer Science, Spiegelgasse 1, 4051 Basel
        </address>
        <address className="not-italic text-ink-soft">
          <span className="font-semibold text-ink">London</span>
          <br />
          Centre for Artificial Intelligence, University College London
        </address>
      </div>
    </div>
    <div className="wrap pb-8">
      <p className="t-1 text-ink-soft">© {new Date().getFullYear()} Rhine AI Lab · Bogunovic Lab</p>
    </div>
  </footer>
);

export default Footer;
