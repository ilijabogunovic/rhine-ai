import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/brand/PageHeader";
import Reveal from "@/components/brand/Reveal";
import { BookOpen, HeartHandshake, Microscope, Users } from "lucide-react";

const values = [
  {
    title: "Scientific Rigor",
    icon: Microscope,
    text: "We uphold the highest standards of scientific methodology, theoretical foundations, and reproducibility in all our research.",
  },
  {
    title: "Collaborative Teamwork",
    icon: Users,
    text: "We foster an inclusive environment where diverse perspectives and interdisciplinary collaboration drive innovation.",
  },
  {
    title: "Human-Aligned AI",
    icon: HeartHandshake,
    text: "We develop AI systems that remain aligned with human values and serve the broader benefit of society.",
  },
  {
    title: "Open Science",
    icon: BookOpen,
    text: "We believe in sharing knowledge, tools, and discoveries to accelerate progress across the global AI community.",
  },
];

const subjects = [
  ["[Research Inquiry]", "for research questions"],
  ["[Collaboration]", "for partnership opportunities"],
  ["[Media Inquiry]", "for press and media requests"],
  ["[General Inquiry]", "for other questions"],
];

const About = () => {
  return (
    <Layout>
      <PageHeader title="About Rhine AI Lab" intro="Developing intelligent agents that reason, learn, and discover." />

      {/* Mission */}
      <section className="bg-carmine text-paper" aria-labelledby="mission-title">
        <Reveal className="wrap grid gap-8 py-20 sm:py-28 lg:grid-cols-12">
          <h2 id="mission-title" className="t-4 font-semibold text-paper lg:col-span-4">
            Our mission
          </h2>
          <p className="t-3 font-display text-paper lg:col-span-8">
            Rhine AI Lab focuses on agentic AI systems with capabilities for reasoning, adaptation, and self-evolution,
            developing reliable and theory-inspired algorithms that can autonomously explore complex problems while
            staying aligned with human values and advancing scientific knowledge.
          </p>
        </Reveal>
      </section>

      {/* Story */}
      <section className="wrap grid gap-14 py-[var(--section)] lg:grid-cols-12" aria-labelledby="story-title">
        <Reveal className="lg:col-span-8">
          <h2 id="story-title" className="t-4 font-semibold text-ink">
            Our story
          </h2>
          <div className="t-2 mt-8 max-w-[62ch] space-y-5 text-ink">
            <p>
              Rhine AI Lab was founded by Prof. Ilija Bogunovic with a vision to develop intelligent systems that can
              reason about complex problems, adapt to new challenges, and evolve their capabilities while remaining
              aligned with human values and advancing scientific discovery.
            </p>
            <p>
              Originally established at University College London (UCL), the lab transitioned to the University of
              Basel's Department of Mathematics and Computer Science in 2025, while maintaining strong collaborative ties
              with the UCL AI Centre. This dual affiliation enables us to leverage the strengths of both institutions and
              foster international research partnerships.
            </p>
            <p>
              Our research spans three core directions: agentic AI systems, reinforcement learning, and exploration &
              discovery. We develop reliable, theory-inspired algorithms for sequential decision making, human-AI
              collaboration, and autonomous problem solving. Our work appears in top venues including NeurIPS, ICML,
              ICLR, AISTATS, and JMLR, contributing to both theoretical understanding and practical applications of AI.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Values */}
      <section className="bg-paper-2" aria-labelledby="values-title">
        <div className="wrap py-[var(--section)]">
          <h2 id="values-title" className="t-4 font-semibold text-ink">
            Our values
          </h2>
          <Reveal as="ul" className="mt-14 grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <li key={v.title}>
                <v.icon aria-hidden="true" strokeWidth={1.5} className="h-7 w-7 text-carmine" />
                <h3 className="t-3 mt-5 font-semibold text-ink">{v.title}</h3>
                <p className="t-2 mt-3 text-ink-soft">{v.text}</p>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Contact */}
      <section className="wrap grid gap-12 py-[var(--section)] lg:grid-cols-12" aria-labelledby="touch-title">
        <Reveal className="lg:col-span-5">
          <h2 id="touch-title" className="t-4 font-semibold text-ink">
            Get in touch
          </h2>
          <p className="t-2 mt-6 text-ink-soft">For all inquiries, please contact:</p>
          <p className="t-3 mt-3 font-display">
            <a href="mailto:ilija.bogunovic@unibas.ch" className="link">ilija.bogunovic@unibas.ch</a>
            <span className="text-ink-soft"> or </span>
            <a href="mailto:i.bogunovic@ucl.ac.uk" className="link">i.bogunovic@ucl.ac.uk</a>
          </p>
        </Reveal>
        <Reveal className="rounded-2xl bg-paper-2 p-7 sm:p-10 lg:col-span-6 lg:col-start-7">
          <p className="t-2 font-semibold text-ink">Please use an appropriate subject line such as:</p>
          <dl className="mt-6 space-y-3">
            {subjects.map(([subject, use]) => (
              <div key={subject} className="grid gap-x-6 sm:grid-cols-[13rem_1fr]">
                <dt className="t-2 font-semibold text-carmine">"{subject}"</dt>
                <dd className="t-2 text-ink-soft">{use}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>
    </Layout>
  );
};

export default About;
