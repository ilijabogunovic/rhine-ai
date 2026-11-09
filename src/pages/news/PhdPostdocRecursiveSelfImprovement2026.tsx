import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import Layout from "@/components/layout/Layout";
import { Bullet, CategoryTag } from "@/components/brand/Tags";
import { Link } from "react-router-dom";
import { ArrowUpRight, Clock } from "lucide-react";

// Job portal listings. Leave `url` empty until a listing is published: the page then says the link is coming soon.
const portal = [
  {
    label: "PhD positions",
    url: "",
  },
  {
    label: "Postdoc position",
    url: "",
  },
];
const portalReady = portal.every((p) => p.url);

/** A portal button whose listing is not out yet: on hover, focus or tap it explains where the link will appear. */
const ComingSoonButton = ({ label }: { label: string }) => {
  const [open, setOpen] = useState(false);
  const wrapper = useRef<HTMLDivElement>(null);
  const noteId = useId();

  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (!wrapper.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div
      ref={wrapper}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-describedby={noteId}
        aria-expanded={open}
        onClick={() => setOpen(true)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        className="btn w-full justify-between"
      >
        {label}
        <span className="inline-flex items-center gap-1.5 text-sm font-normal opacity-80">
          <Clock aria-hidden="true" strokeWidth={2.25} className="h-4 w-4" />
          Soon
        </span>
      </button>
      <div
        id={noteId}
        role="tooltip"
        className={`soon-note absolute bottom-full left-0 right-0 z-20 mb-3 rounded-2xl bg-paper p-5 text-ink shadow-[0_18px_40px_-14px_rgb(0_0_0/0.22)] transition-[opacity,transform] duration-200 ease-out ${
          open ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-1 opacity-0"
        }`}
      >
        <p className="t-1 inline-flex items-center gap-2 font-semibold text-carmine">
          <Clock aria-hidden="true" strokeWidth={2.25} className="h-4 w-4" />
          Coming soon
        </p>
        <p className="t-1 mt-1.5 leading-relaxed text-ink-soft">
          The announcement will appear soon on the official University of Basel job portal. Check back on this page:
          we will post the link here as soon as it is available.
        </p>
        <span
          aria-hidden="true"
          className="absolute -bottom-1.5 left-8 h-3 w-3 rotate-45 rounded-[2px] bg-paper"
        />
      </div>
    </div>
  );
};

const facts = [
  ["Positions", "PhD and Postdoc"],
  ["Workload", "100%"],
  ["Start", "Flexible"],
  ["Location", "Basel, Switzerland"],
  ["Applications", "Reviewed on a rolling basis"],
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

const PhdPostdocRecursiveSelfImprovement2026 = () => {
  return (
    <Layout>
      <div className="wrap pb-[var(--section)] pt-10">
        <Link to="/news" className="link t-1 mb-10 inline-block font-medium">
          &larr; Back to News
        </Link>

        <h1 className="t-4 mb-6 max-w-[28ch] font-semibold text-ink">
          PhD and Postdoc positions in Recursive Self-Improvement
        </h1>

        <div className="mb-10 mt-4">
          <CategoryTag type="Opportunity" />
          <span className="t-1 ml-3 text-ink-soft">November 2026</span>
        </div>

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="max-w-[68ch] space-y-14 lg:col-span-8">
            <div className="space-y-6">
              <p className="t-2 leading-relaxed text-ink">
                The research group Rhine AI of Prof. I. Bogunovic at the{" "}
                <a href="https://dmi.unibas.ch/de/" target="_blank" rel="noopener noreferrer" className="link">
                  Department of Mathematics and Computer Science
                </a>{" "}
                at the University of Basel is inviting applications for PhD and Postdoc positions in recursive
                self-improvement (RSI) and open-ended learning.
              </p>
              <p className="t-2 leading-relaxed text-ink">
                Today’s most capable AI systems still depend on people to curate their data, build their training
                environments, and decide what they should learn next. RSI asks whether AI systems can increasingly close
                this loop themselves: generating their own tasks and environments, checking their own progress, and
                improving the very procedures used to train them, so that each round of improvement enables the next.
                We see this as one of the most consequential open questions in AI, and we want to understand what makes
                open-ended self-improvement work, where it stalls, and how to keep it reliable and aligned.
              </p>
              <p className="t-2 leading-relaxed text-ink">
                The successful candidates will investigate how large language models (LLMs) and AI agents can drive
                their own improvement. The Postdoc will lead research in this area and help shape the group’s agenda.
                Research directions include:
              </p>
              <List
                items={[
                  <>
                    <strong className="font-semibold">Post-training LLMs with reinforcement learning</strong> for
                    long-horizon, multi-step reasoning and agentic tasks
                  </>,
                  <>
                    <strong className="font-semibold">Frontier learning:</strong> an open-ended post-training approach
                    that keeps generating new training problems at the edge of a model’s capabilities and tracks that
                    edge as the model improves
                  </>,
                  <>
                    <strong className="font-semibold">Building RL environments for agentic tasks</strong> such as
                    search, terminal use, and games, including synthetic environments, tasks, and rewards that LLMs
                    generate and verify themselves
                  </>,
                  <>
                    <strong className="font-semibold">Weight-space programming:</strong> agents that improve open-weight
                    models by acting directly on their weights, opening a path to models that improve themselves
                  </>,
                  <>
                    <strong className="font-semibold">World models</strong> that let agents plan, imagine, and learn
                    from simulated experience
                  </>,
                  <>
                    <strong className="font-semibold">Open-ended and evolutionary search</strong> over programs, agents,
                    and training recipes
                  </>,
                ]}
              />
              <p className="t-2 leading-relaxed text-ink">
                These directions are closely connected, and there is plenty of room to shape your own path through
                them, or, as a Postdoc, to define your own research program within them. The ideal candidates have a
                strong background in machine learning and are excited about large-scale experimentation with frontier AI
                systems, supported by principled analysis where it helps.
              </p>
              <p className="t-2 leading-relaxed text-ink">
                Starting dates are flexible. The duration of a PhD in Switzerland is 4 years.
              </p>
            </div>

            <Section title="Your position">
              <p className="t-2 text-ink">Your tasks include:</p>
              <List
                items={[
                  "Conduct research on recursive self-improvement and open-ended learning, from new ideas to working systems",
                  "Design and run large-scale experiments with state-of-the-art open LLMs and agents",
                  "Write research papers and present results at leading international conferences. We publish in venues such as ICML, NeurIPS, and ICLR",
                  "Interact with national and international teams of AI and machine learning experts, as well as industrial collaborators",
                  "For the Postdoc: take a leading role in shaping and driving the group’s research in this area, mentor PhD students, and help coordinate projects across the group",
                ]}
              />
            </Section>

            <Section title="Your profile">
              <p className="t-2 leading-relaxed text-ink">
                PhD applicants must possess a Master’s degree in computer science, mathematics, physics, or a related
                field, and have an exceptional academic record. Postdoc applicants must hold a PhD in machine learning or
                a related field, with a strong publication record at leading machine learning venues.
              </p>
              <p className="t-2 leading-relaxed text-ink">
                All candidates should have a solid mathematical foundation and strong coding and implementation skills,
                with the ability to run large-scale experiments. Experience with LLM post-training, reinforcement
                learning, world models, generative modeling, or evolutionary and open-ended methods is a plus. Research
                experience is advantageous for PhD applicants but not mandatory.
              </p>
              <p className="t-2 leading-relaxed text-ink">
                Above all, we are looking for curious, ambitious people who want to work on hard, open problems, and,
                for the Postdoc, independent researchers who want to help define a new research area.
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
                The positions are based in Basel, a lively city where the borders of Switzerland, France, and Germany
                meet. In addition, we offer:
              </p>
              <List
                items={[
                  "The chance to work on one of the most consequential open questions in AI, with the freedom to pursue ambitious ideas",
                  "Substantial compute for large-scale experiments, including the lab’s own GPU servers and access to national supercomputing facilities",
                  "Close supervision and mentoring, working with and access to national and international collaborators",
                  "For the Postdoc: opportunities to mentor PhD students, shape the group’s research agenda, and build your own profile toward an independent career in academia or industry",
                  <>
                    A growing group supported by a recent{" "}
                    <Link to="/news/erc-starting-grant-2026" className="link">
                      ERC Starting Grant
                    </Link>{" "}
                    and the{" "}
                    <Link to="/news/snsf-project-grant-2026" className="link">
                      Swiss National Science Foundation (SNSF)
                    </Link>
                  </>,
                  "The possibility of traveling to international conferences to meet distinguished scientists",
                  "Excellent salary, benefits, and working conditions",
                ]}
              />
            </Section>

            <Section title="How to apply">
              <p className="t-2 leading-relaxed text-ink">
                Applications go through the University of Basel job portal, where each position has its own
                listing
                {portalReady ? (
                  <>
                    :{" "}
                    <a href={portal[0].url} target="_blank" rel="noopener noreferrer" className="link font-semibold">
                      PhD positions
                    </a>{" "}
                    and{" "}
                    <a href={portal[1].url} target="_blank" rel="noopener noreferrer" className="link font-semibold">
                      Postdoc position
                    </a>
                    .
                  </>
                ) : (
                  <>
                    . <strong className="font-semibold">The links to both listings are coming soon</strong> and will
                    appear on this page.
                  </>
                )}{" "}
                Your application consists of{" "}
                <strong className="font-semibold text-carmine">two pdf files</strong>:
              </p>
              <ol className="space-y-6">
                <li className="space-y-3">
                  <h3 className="t-2 font-semibold text-ink">1. Your CV</h3>
                  <List items={["Curriculum vitae, including a list of publications (if applicable for PhD applicants)"]} />
                </li>
                <li className="space-y-3">
                  <h3 className="t-2 font-semibold text-ink">2. A single pdf containing:</h3>
                  <List
                    items={[
                      "Short motivation statement (maximum 150 words) explaining your interest in the position, which research directions excite you most (Postdoc applicants: which directions you would like to lead), and why your background is a good fit",
                      "PhD applicants: scanned transcripts of your bachelor’s and master’s degrees",
                      "Contact information (no direct recommendation letters) for people who can recommend you",
                      "PhD applicants: your latest thesis and/or one of your publications, if applicable. Postdoc applicants: your PhD thesis or up to two representative publications",
                    ]}
                  />
                </li>
              </ol>
              <p className="t-2 leading-relaxed text-ink">
                Applications will be reviewed on a rolling basis, and the positions will remain open until suitable
                candidates are found.
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
                {portal.map((p) =>
                  !p.url ? (
                    <ComingSoonButton key={p.label} label={p.label} />
                  ) : (
                  <a
                    key={p.label}
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
                  ),
                )}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </Layout>
  );
};

export default PhdPostdocRecursiveSelfImprovement2026;
