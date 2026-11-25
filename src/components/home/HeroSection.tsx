import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/brand/Reveal";
import { getImagePath } from "@/utils/imageUtils";
import { openOpenings } from "@/data/openings";

const acronym = [
  ["R", "easoning, "],
  ["H", "uman-aligned "],
  ["I", "ntelligence and "],
  ["N", "ovel "],
  ["E", "xploration"],
];

const HeroSection = () => {
  return (
  <section aria-labelledby="hero-title">
    {/* The Rhine at Basel at sunset */}
    <div className="relative h-[12rem] overflow-hidden sm:aspect-[4/1] sm:h-auto">
      <picture>
        <source srcSet={getImagePath("/rhine-ai-header-sunset.webp")} type="image/webp" />
        <img
          src={getImagePath("/rhine-ai-header-sunset.png")}
          alt="Illustration of the Rhine in Basel with the Mittlere Brücke and the Münster"
          width={6688}
          height={2229}
          className="hero-image absolute inset-0 h-full w-full object-cover object-top"
          {...{ fetchpriority: "high" }}
        />
      </picture>
    </div>

    <div className="wrap pb-16 pt-14 sm:pb-20 sm:pt-20">
      <h1 id="hero-title" className="sr-only">
        Rhine AI Lab
      </h1>
      <Reveal className="mx-auto flex max-w-[64rem] flex-col items-center text-center">
        <p className="t-4 font-display text-ink [text-wrap:balance] max-sm:!text-[1.75rem]">
          {acronym.map(([initial, rest]) => (
            <span key={initial}>
              <span className="font-semibold text-carmine">{initial}</span>
              {rest}
            </span>
          ))}
        </p>
        <p className="t-2 mt-8 max-w-[64ch] text-ink-soft">
          Rhine AI is a research group in the{" "}
          <a href="https://dmi.unibas.ch/de/" target="_blank" rel="noopener noreferrer" className="link">
            Department of Mathematics and Computer Science (DMI)
          </a>{" "}
          at the University of Basel and the{" "}
          <a
            href="https://www.ucl.ac.uk/engineering/research/centres-institutes-and-labs/ucl-centre-artificial-intelligence"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Centre for Artificial Intelligence
          </a>{" "}
          at University College London, led by <Link to="/team/ilija-bogunovic" className="link">Ilija Bogunovic</Link>.
          We develop agentic AI systems that reason, adapt, and self-evolve, focusing on sequential decision making and
          generative AI to drive novel discoveries and build robust, intelligent systems for real-world challenges.
        </p>
      </Reveal>
        {/* Featured release: the latest blog post and its leaderboard */}
        <div className="mt-12 flex flex-col gap-6 rounded-3xl bg-paper-2 p-7 sm:mt-14 sm:flex-row sm:items-center sm:gap-8 sm:px-9 sm:py-7">
          <img
            src={getImagePath("/blog/bench-the-weights/logo.png")}
            alt=""
            width={320}
            height={320}
            className="h-20 w-20 shrink-0 sm:h-24 sm:w-24"
          />
          <div className="min-w-0 flex-1">
            <span className="t-1 inline-flex items-center gap-2 font-semibold text-carmine">
              <span
                aria-hidden="true"
                className="new-badge inline-block text-[1.25em] font-extrabold leading-none text-carmine"
              >
                !
              </span>
              New on the research blog
            </span>
            <a href="/blog/bench-the-weights/" className="t-3 mt-2 block font-display font-semibold text-ink transition-colors hover:text-carmine">
              Bench the Weights: Can AI Agents Debug Neural Networks?
            </a>
            <span className="t-1 mt-2 block text-ink-soft">
              19 models from seven labs try to find and fix hidden bugs in the weights of 42 networks, without gradients.
            </span>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3 sm:flex-col">
            <a href="/blog/bench-the-weights/" className="btn group">
              Read the post
              <ArrowRight strokeWidth={2.25} className="arrow h-4 w-4" />
            </a>
            <a href="https://benchtheweights.com" target="_blank" rel="noopener noreferrer" className="btn btn-quiet bg-paper hover:bg-beige">
              Leaderboard
              <ArrowUpRight strokeWidth={2.25} className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className={`mt-4 grid gap-4 ${openOpenings().length > 1 ? "md:grid-cols-2" : ""}`}>
        {openOpenings().map((o) => (
          <Link
            key={o.url}
            to={o.url}
            className="group flex h-full w-full flex-col gap-6 rounded-3xl bg-paper-2 p-7 text-left transition-colors duration-300 hover:bg-beige sm:flex-row sm:justify-between sm:px-9 sm:py-7"
          >
            <span className="block">
              <span className="t-1 inline-flex items-center gap-2 font-semibold text-carmine">
                <span aria-hidden="true" className="hiring-dot h-2 w-2 rounded-full bg-carmine" />
                We're hiring
              </span>
              <span className="t-3 mt-2 block max-w-[44ch] font-display font-semibold text-ink">{o.title}</span>
              <span className="t-1 mt-2 block text-ink-soft">{o.summary}</span>
            </span>
            <span
              aria-hidden="true"
              className="grid h-12 w-12 shrink-0 place-items-center sm:self-center rounded-full bg-paper text-ink transition-transform duration-300 ease-out group-hover:scale-110"
            >
              <ArrowRight
                strokeWidth={2.5}
                className="h-5 w-5 transition-transform duration-300 ease-out group-hover:translate-x-0.5"
              />
            </span>
          </Link>
        ))}
        </div>
    </div>
    <style>{`
      @media (prefers-reduced-motion: no-preference) {
        .hero-image { animation: hero-image-in 1.8s var(--ease-soft) both; }
        @keyframes hero-image-in { from { transform: scale(1.06); opacity: 0.6; } }
        .hiring-dot { animation: hiring-dot 1.8s ease-in-out infinite; }
        @keyframes hiring-dot { 50% { opacity: 0.35; transform: scale(0.7); } }
        .new-badge { animation: new-badge 1.8s ease-in-out infinite; }
        @keyframes new-badge { 50% { transform: scale(1.15); } }
      }
    `}</style>
  </section>
  );
};

export default HeroSection;
