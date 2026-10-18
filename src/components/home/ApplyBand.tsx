import { Link } from "react-router-dom";
import Reveal from "@/components/brand/Reveal";

const ApplyBand = () => (
  <section className="wrap pb-[var(--section)]" aria-labelledby="apply-title">
    <Reveal className="grid items-end gap-8 border-t-2 border-ink pt-12 lg:grid-cols-12">
      <div className="lg:col-span-7">
        <h2 id="apply-title" className="t-4 font-semibold text-ink">
          Join the lab
        </h2>
        <p className="t-2 mt-4 max-w-[52ch] text-ink-soft">
          PhD, postdoc and student supervision routes: what to send, and the subject line to use.
        </p>
      </div>
      <div className="lg:col-span-4 lg:col-start-9 lg:justify-self-end">
        <Link to="/join-us" className="btn">
          How to apply <span className="arrow" aria-hidden="true">→</span>
        </Link>
      </div>
    </Reveal>
  </section>
);

export default ApplyBand;
