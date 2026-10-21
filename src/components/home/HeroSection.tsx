import { Link } from "react-router-dom";
import Reveal from "@/components/brand/Reveal";
import { getImagePath } from "@/utils/imageUtils";

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
          width={1672}
          height={557}
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
          A research group in the{" "}
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
    </div>
    <style>{`
      @media (prefers-reduced-motion: no-preference) {
        .hero-image { animation: hero-image-in 1.8s var(--ease-soft) both; }
        @keyframes hero-image-in { from { transform: scale(1.06); opacity: 0.6; } }
      }
    `}</style>
  </section>
  );
};

export default HeroSection;
