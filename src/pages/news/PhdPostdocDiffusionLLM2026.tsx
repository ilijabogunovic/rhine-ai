import type { ReactNode } from "react";
import Layout from "@/components/layout/Layout";
import { Bullet, CategoryTag } from "@/components/brand/Tags";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const portal = [
  {
    label: "PhD position",
    url: "https://jobs.unibas.ch/offene-stellen/phd-position-in-post-training-of-diffusion-language-models-prof-i-bogunovic/69e46779-c5dc-47c2-b000-d2bffb100240",
  },
  {
    label: "Postdoc position",
    url: "https://jobs.unibas.ch/offene-stellen/postdoc-position-in-post-training-of-diffusion-language-models-prof-i-bogunovic/1c8e7b49-8c0b-4002-89fa-268adb152f96",
  },
];

const facts = [
  ["Positions", "PhD and Postdoc"],
  ["Workload", "100%"],
  ["Start", "January 2027 or later"],
  ["Location", "Basel, Switzerland"],
  ["Funding", "Swiss National Science Foundation (SNSF)"],
  ["Apply by", "November 20, 2026 (preferred)"],
];

const List = ({ items }: { items: ReactNode[] }) => (
  <ul className="space-y-3">
    {items.map((item, i) => (
      <li key={i} className="t-2 flex items-baseline gap-3 text-ink">
        <Bullet />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const Section = ({ title, children }: { title: string; children: ReactNode }) => (
  <section className="space-y-5">
    <h2 className="t-3 font-semibold text-ink">{title}</h2>
    {children}
  </section>
);

const PhdPostdocDiffusionLLM2026 = () => {
  return (
    <Layout>
      <div className="wrap pb-[var(--section)] pt-10">
        <Link to="/news" className="link t-1 mb-10 inline-block font-medium">
          &larr; Back to News
        </Link>

        <h1 className="t-4 mb-6 max-w-[28ch] font-semibold text-ink">
          PhD and Postdoc positions in Post-Training of Diffusion Language Models
        </h1>

        <div className="mb-10 mt-4">
          <CategoryTag type="Opportunity" />
          <span className="t-1 ml-3 text-ink-soft">October 2026</span>
        </div>

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="max-w-[68ch] space-y-14 lg:col-span-8">
            <div className="space-y-6">
              <p className="t-2 leading-relaxed text-ink">
                The research group Rhine AI of Prof. I. Bogunovic at the{" "}
                <a href="https://dmi.unibas.ch/de/" target="_blank" rel="noopener noreferrer" className="link">
                  Department of Mathematics and Computer Science
                </a>{" "}
                at the University of Basel is inviting applications for PhD and Postdoc positions funded by
                the Swiss National Science Foundation (SNSF) project{" "}
                <Link to="/news/snsf-project-grant-2026" className="link">
                  “Foundations of Post-Training for Reasoning in Diffusion Large Language Models.”
                </Link>
              </p>
              <p className="t-2 leading-relaxed text-ink">
                The positions focus on post-training large diffusion-based language models (dLLMs), an emerging
                alternative to standard autoregressive LLMs, to improve their reasoning capabilities. The successful
                candidates will develop reinforcement learning methods for post-training large dLLMs, explore
                reasoning-aware generation strategies such as adaptive unmasking and credit assignment, and help build
                benchmarks for evaluating reasoning across domains, including mathematical problem solving.
              </p>
              <p className="t-2 leading-relaxed text-ink">
                The ideal candidates have a strong background in machine learning and are excited about large-scale
                experimentation with modern AI systems, supported by principled analysis where it helps. This work will
                push the boundaries of what modern AI systems can reliably reason about.
              </p>
              <p className="t-2 leading-relaxed text-ink">
                Positions available starting January 2027 or later. The duration of a PhD in Switzerland is 4 years.
              </p>
            </div>

            <Section title="Your position">
              <p className="t-2 text-ink">Your tasks include:</p>
              <List
                items={[
                  "Conduct research in machine learning and artificial intelligence",
                  "Write research papers, articles, and present results at leading international conferences. We publish in venues such as ICML, NeurIPS, and ICLR",
                  "Interact with national and international teams of AI and machine learning experts",
                  "For the Postdoc: take a leading role in the project’s research directions and help mentor PhD students",
                ]}
              />
            </Section>

            <Section title="Your profile">
              <p className="t-2 leading-relaxed text-ink">
                PhD applicants must possess a Master’s degree in computer science, mathematics, physics, or a related
                field. Postdoc applicants must hold a PhD in machine learning or a related field, with a strong
                publication record at leading machine learning venues.
              </p>
              <p className="t-2 leading-relaxed text-ink">
                All candidates should have an exceptional academic record and a solid mathematical foundation. They are
                also expected to have strong coding and implementation skills, with the ability to run large-scale
                experiments. Experience with LLMs, reinforcement learning, or generative modeling is a plus. While
                research experience is advantageous for PhD applicants, it is not mandatory.
              </p>
              <p className="t-2 leading-relaxed text-ink">
                Excellent communication skills and fluency in English (spoken and written) are required.
              </p>
              <p className="t-2 leading-relaxed text-ink-soft">
                We also seek to increase the number of women and other groups in areas where they are underrepresented
                and therefore explicitly encourage such groups to apply.
              </p>
            </Section>

            <Section title="We offer you">
              <p className="t-2 text-ink">
                The positions will be based in Basel, Switzerland. In addition, we also offer the following:
              </p>
              <List
                items={[
                  "Close supervision and mentoring, working with and access to national (EPFL and ETH among others) and international collaborators",
                  "A diverse range of tasks in a dynamic environment",
                  "The possibility of traveling to international conferences to meet with distinguished scientists",
                  "Excellent salary, benefits, and working conditions",
                ]}
              />
            </Section>

            <Section title="How to apply">
              <p className="t-2 leading-relaxed text-ink">
                Applications go through the University of Basel job portal, where each position has its own
                listing:{" "}
                <a href={portal[0].url} target="_blank" rel="noopener noreferrer" className="link font-semibold">
                  PhD position
                </a>{" "}
                and{" "}
                <a href={portal[1].url} target="_blank" rel="noopener noreferrer" className="link font-semibold">
                  Postdoc position
                </a>
                . Your application consists of{" "}
                <strong className="font-semibold text-carmine">two pdf files</strong>:
              </p>
              <ol className="space-y-6">
                <li className="space-y-3">
                  <h3 className="t-2 font-semibold text-ink">1. Your CV</h3>
                  <List items={["Curriculum vitae, including a list of publications if applicable"]} />
                </li>
                <li className="space-y-3">
                  <h3 className="t-2 font-semibold text-ink">2. A single pdf containing:</h3>
                  <List
                    items={[
                      "Short motivation statement (maximum 150 words) explaining your interest in the position and justifying why your background is a good fit for the position",
                      "PhD applicants: scanned transcripts of bachelor’s and master’s degree",
                      "Contact info (no direct recommendation letters) for peers who can recommend you",
                      "PhD applicants: your latest thesis (and/or one of your publications, if applicable). Postdoc applicants: your PhD thesis or up to two representative publications",
                    ]}
                  />
                </li>
              </ol>
              <p className="t-2 leading-relaxed text-ink">
                You are encouraged to send your application before November 20, 2026. However, there is no deadline for
                applying, and the positions will be open until suitable candidates are found. If your application is
                short-listed, we will contact you within 4–5 weeks. Due to an anticipated large volume of applications,
                we cannot inform you if your application is not selected for an interview.
              </p>
            </Section>
          </div>

          <aside className="lg:col-span-4">
            <div className="space-y-6 rounded-2xl bg-paper-2 p-7 lg:sticky lg:top-24">
              <dl className="space-y-4">
                {facts.map(([term, value]) => (
                  <div key={term}>
                    <dt className="t-1 text-ink-soft">{term}</dt>
                    <dd className="t-2 font-medium text-ink">{value}</dd>
                  </div>
                ))}
              </dl>
              <div className="space-y-3 border-t border-beige pt-6">
                <p className="t-1 text-ink-soft">Apply on the University of Basel job portal</p>
                {portal.map((p) => (
                  <a
                    key={p.url}
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn group w-full justify-between"
                  >
                    {p.label}
                    <ArrowUpRight
                      aria-hidden="true"
                      strokeWidth={2.25}
                      className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </Layout>
  );
};

export default PhdPostdocDiffusionLLM2026;
