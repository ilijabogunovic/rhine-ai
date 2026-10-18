import { Link } from "react-router-dom";
import Reveal from "@/components/brand/Reveal";
import { getImagePath } from "@/utils/imageUtils";
import { THEMES, useTheme } from "@/lib/theme";

const acronym = [
  ["R", "easoning, "],
  ["H", "uman-aligned "],
  ["I", "ntelligence and "],
  ["N", "ovel "],
  ["E", "xploration"],
];

const HeroSection = () => {
  const { theme } = useTheme();
  return (
  <section aria-labelledby="hero-title">
    {/* The Rhine at Basel: one illustration per lab colour, crossfading when the colour changes */}
    <div className="relative h-[12rem] overflow-hidden sm:aspect-[4/1] sm:h-auto">
      {THEMES.map((t) => (
        <picture key={t.id}>
          <source srcSet={getImagePath(`/${t.header}.webp`)} type="image/webp" />
          <img
            src={getImagePath(t.id === "blue" ? "/rhine-ai-header.png" : `/${t.header}.png`)}
            alt={t.id === theme ? `Illustration of the Rhine in Basel with the Mittlere Brücke and the Münster, in ${t.label.toLowerCase()} tones` : ""}
            width={2172}
            height={724}
            className={`hero-image absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-700 ease-out ${
              t.id === theme ? "opacity-100" : "opacity-0"
            }`}
            {...{ fetchpriority: t.id === theme ? "high" : "low" }}
          />
        </picture>
      ))}
      <div className="absolute inset-x-0 top-[8%] text-center sm:top-[4%]">
        <h1 id="hero-title" className="hero-title t-5 font-semibold text-[#141414]">
          Rhine AI Lab
        </h1>
      </div>
    </div>

    <div className="wrap pb-16 pt-14 sm:pb-20 sm:pt-20">
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
        .hero-title { animation: hero-title-in 1.1s var(--ease-out) 0.2s both; }
        @keyframes hero-image-in { from { transform: scale(1.06); opacity: 0.6; } }
        @keyframes hero-title-in { from { opacity: 0; transform: translateY(16px); } }
      }
    `}</style>
  </section>
  );
};

export default HeroSection;
