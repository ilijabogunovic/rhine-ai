import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        target.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return (
    <div id="top" className="flex min-h-screen flex-col bg-background">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-carmine focus:px-4 focus:py-2 focus:text-paper"
      >
        Skip to content
      </a>
      <Navigation />
      <main id="main" className="flex-1 pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
