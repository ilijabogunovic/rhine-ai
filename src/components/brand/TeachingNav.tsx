import { NavLink } from "react-router-dom";

const links = [
  { to: "/teaching", label: "Teaching", end: true },
  { to: "/teaching/courses", label: "Current courses", end: true },
  { to: "/teaching/topics", label: "Project topics", end: true },
  { to: "/teaching/archive", label: "Archive", end: true },
];

/** The small row of links at the top of every teaching page. */
const TeachingNav = () => (
  <nav className="wrap pt-10" aria-label="Teaching">
    <ul className="t-1 flex flex-wrap gap-x-6 gap-y-2">
      {links.map((l) => (
        <li key={l.to}>
          <NavLink
            to={l.to}
            end={l.end}
            className={({ isActive }) =>
              `font-medium transition-colors ${isActive ? "text-ink underline decoration-carmine decoration-2 underline-offset-[6px]" : "text-carmine hover:text-carmine-deep"}`
            }
          >
            {l.label}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default TeachingNav;
