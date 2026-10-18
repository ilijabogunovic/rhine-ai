import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Mark } from "@/components/brand/Motif";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="wrap grid min-h-[70svh] items-center gap-12 py-20 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h1 className="t-5 font-semibold text-ink">Page not found</h1>
          <p className="t-2 mt-6 max-w-[46ch] text-ink-soft">
            There is nothing at <span className="font-medium text-ink">{location.pathname}</span>. The page may have
            moved; the links below cover the whole site.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
            <Link to="/" className="btn">
              Return to home <span className="arrow" aria-hidden="true">→</span>
            </Link>
            <Link to="/publications" className="link t-1 font-medium">Publications</Link>
            <Link to="/news" className="link t-1 font-medium">News</Link>
            <Link to="/team" className="link t-1 font-medium">Team</Link>
          </div>
        </div>
        <Mark className="mx-auto w-2/3 max-w-[22rem] -rotate-12 lg:col-span-4 lg:col-start-9 lg:w-full" />
      </section>
    </Layout>
  );
};

export default NotFound;
