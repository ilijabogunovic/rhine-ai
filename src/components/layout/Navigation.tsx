import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Mark } from "@/components/brand/Motif";
import PaintPicker from "@/components/brand/PaintPicker";

export const navItems = [
  { name: "Publications", path: "/publications" },
  { name: "Team", path: "/team" },
  { name: "Teaching", path: "/teaching" },
  { name: "News", path: "/news" },
  { name: "Blog", path: "/blog" },
  { name: "About", path: "/about" },
  { name: "Join us", path: "/join-us" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setIsOpen(false), [location.pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-paper">
      <nav className="wrap flex h-16 items-center justify-between gap-6" aria-label="Main">
        <Link to="/" className="group flex min-w-0 items-center gap-3" aria-label="Rhine AI Lab, home">
          <Mark className="h-9 w-9 shrink-0 transition-transform duration-300 ease-out group-hover:-rotate-6" />
          <span className="whitespace-nowrap font-display text-[1.375rem] leading-none text-ink">
            <span className="font-semibold">Rhine AI</span>{" "}
            <span className="text-ink-muted">Lab</span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 xl:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `relative py-1 text-base transition-colors duration-150 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:bg-carmine after:transition-transform after:duration-300 after:ease-out ${
                  isActive
                    ? "text-ink after:scale-x-100"
                    : "text-ink-soft hover:text-ink after:scale-x-0 hover:after:scale-x-100"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
          <PaintPicker />
          <Link to="/contact" className="btn !min-h-[2.5rem] !px-5">
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-1 xl:hidden">
          <PaintPicker />
        <button
          type="button"
          className="-mr-2 flex h-11 w-11 items-center justify-center text-ink"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
        </div>
      </nav>

      {isOpen && (
        <div id="mobile-menu" className="h-[calc(100svh-4rem)] overflow-y-auto bg-paper xl:hidden">
          <div className="wrap flex flex-col pb-10 pt-4">
            <Link to="/" className="py-2 font-display text-4xl text-ink">
              Home
            </Link>
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `py-2 font-display text-4xl ${isActive ? "text-carmine" : "text-ink"}`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <Link to="/contact" className="btn mt-8 self-start">
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
