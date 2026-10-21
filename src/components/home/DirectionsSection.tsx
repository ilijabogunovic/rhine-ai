import { Bot, Compass, RefreshCw } from "lucide-react";
import { Bullet } from "@/components/brand/Tags";
import Reveal from "@/components/brand/Reveal";

export const directions = [
  {
    title: "Agentic AI Systems",
    description:
      "We design self-evolving agents based on large language models that reason, adapt, and operate in complex environments.",
    icon: Bot,
  },
  {
    title: "Reinforcement Learning",
    description:
      "We create AI systems that learn optimal behaviors through trial and error, adapting to dynamic environments and improving performance over time.",
    icon: RefreshCw,
  },
  {
    title: "Exploration & Discovery",
    description:
      "Leveraging AI to accelerate discovery by exploring vast hypothesis spaces and uncovering novel patterns in complex data.",
    icon: Compass,
  },
];

const topics = [
  "Human alignment",
  "Novel discovery",
  "Post-training",
  "Large language models",
  "Diffusion models",
  "Foundation models",
  "Reasoning",
  "Planning",
];

const DirectionsSection = () => (
  <section id="research" className="scroll-mt-16 pb-[var(--section)]" aria-labelledby="research-title">
    <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-8">
      <Reveal className="lg:col-span-4">
        <h2 id="research-title" className="t-4 font-semibold text-ink">
          Three research directions
        </h2>
        <p className="t-2 mt-5 max-w-[40ch] text-ink-soft">
          Our research is built on three fundamental directions that guide our approach to advancing artificial
          intelligence.
        </p>
      </Reveal>

      <div className="lg:col-span-7 lg:col-start-6">
        <Reveal as="ul" className="space-y-10">
          {directions.map((d) => (
            <li key={d.title} className="grid grid-cols-[2.5rem_1fr] gap-x-4">
              <d.icon aria-hidden="true" strokeWidth={1.5} className="mt-1 h-7 w-7 text-carmine" />
              <div>
                <h3 className="t-3 font-semibold text-ink">{d.title}</h3>
                <p className="t-2 mt-2 max-w-[52ch] text-ink-soft">{d.description}</p>
              </div>
            </li>
          ))}
        </Reveal>

        <div className="mt-16 rounded-2xl bg-paper-2 p-7 sm:p-9">
          <h3 className="t-2 font-body font-semibold text-ink">What we work on, day to day</h3>
          <Reveal as="ul" mode="rows" className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-4">
            {topics.map((t) => (
              <li key={t} className="t-1 flex items-baseline gap-2.5 text-ink">
                <Bullet />
                {t}
              </li>
            ))}
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);

export default DirectionsSection;
