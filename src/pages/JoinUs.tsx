import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { Check, Copy } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/brand/PageHeader";
import Reveal from "@/components/brand/Reveal";
import { Bullet } from "@/components/brand/Tags";

const interests = [
  "Human alignment",
  "Novel discovery",
  "Reinforcement learning",
  "Large language models (LLMs)",
  "Diffusion models",
  "Foundation models",
  "Reasoning",
  "Planning",
];

/** The subject line to use, with a one-tap copy. */
const SubjectLine = ({ label, subject }: { label: string; subject: string }) => {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(subject);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };
  return (
    <div className="rounded-2xl bg-paper-2 p-5 sm:p-6">
      <p className="t-1 text-ink-soft">{label}</p>
      <div className="mt-2 flex flex-wrap items-center justify-between gap-4">
        <p className="t-3 font-display font-semibold text-carmine">{subject}</p>
        <button
          type="button"
          onClick={copy}
          aria-label={copied ? "Subject line copied" : `Copy the subject line ${subject}`}
          className={`flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 active:scale-[0.97] ${
            copied ? "bg-carmine text-paper" : "bg-beige text-ink hover:bg-carmine hover:text-paper"
          }`}
        >
          {copied ? (
            <Check aria-hidden="true" strokeWidth={2.25} className="copy-pop h-4 w-4" />
          ) : (
            <Copy aria-hidden="true" strokeWidth={1.75} className="h-4 w-4" />
          )}
          <span aria-live="polite">{copied ? "Copied" : "Copy"}</span>
        </button>
      </div>
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .copy-pop { animation: copy-pop 320ms var(--ease-out) both; }
          @keyframes copy-pop { from { transform: scale(0.4) rotate(-20deg); opacity: 0; } }
        }
      `}</style>
    </div>
  );
};

const Route = ({
  id,
  title,
  question,
  children,
}: {
  id: string;
  title: string;
  question: string;
  children: ReactNode;
}) => (
  <section id={id} className="scroll-mt-20 py-16 sm:py-20" aria-labelledby={`${id}-title`}>
    <Reveal className="grid gap-8 lg:grid-cols-12">
      <div className="lg:col-span-5">
        <h2 id={`${id}-title`} className="t-4 font-semibold text-ink">
          {title}
        </h2>
        <p className="t-3 mt-4 max-w-[24ch] font-display text-ink-soft">{question}</p>
      </div>
      <div className="t-2 max-w-[62ch] space-y-5 text-ink lg:col-span-7">{children}</div>
    </Reveal>
  </section>
);

const JoinUs = () => {
  return (
    <Layout>
      <PageHeader title="Join the lab">
        <p className="t-2 mt-8 max-w-[60ch] text-ink">
          We are looking for exceptional applicants who have a strong background in areas such as machine learning, data
          science, computer science, and mathematics. Applicants for the postdoctoral scholar position should have a
          strong publication record in leading conferences and journals.
        </p>
        <p className="t-2 mt-6 max-w-[56ch] text-ink-soft">
          Unfortunately, we are not able to respond to all emails. Please follow the appropriate route depending on your
          situation.
        </p>
        <nav className="t-2 mt-8 flex flex-wrap gap-x-7 gap-y-2" aria-label="Routes">
          <a href="#phd" className="link font-medium">PhD student</a>
          <a href="#ucl-phd" className="link font-medium">PhD at UCL</a>
          <a href="#students" className="link font-medium">Student supervision</a>
          <a href="#postdoc" className="link font-medium">Postdoctoral scholar</a>
        </nav>
      </PageHeader>

      <div className="wrap pb-[var(--section)]">
        <Route
          id="phd"
          title="PhD students"
          question="You are a prospective PhD student?"
        >
          <p>
            Please reach out directly. A strong background in machine learning, AI, coding & experimentation is
            necessary, with particular interest in any of:
          </p>
          <ul className="grid grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2">
            {interests.map((t) => (
              <li key={t} className="flex items-baseline gap-3">
                <Bullet />
                {t}
              </li>
            ))}
          </ul>
          <p>
            We have open PhD positions at the University of Basel, Department of Mathematics and Computer Science, and we
            can also co-supervise PhDs at University College London (UCL) AI Centre.
          </p>
          <p>
            To reach out, please contact:{" "}
            <a href="mailto:ilija.bogunovic@unibas.ch" className="link font-semibold">Ilija Bogunovic</a>
          </p>
          <SubjectLine label="When reaching out for a PhD position, please use the subject line:" subject="[PhD position application]" />
        </Route>

        <Route
          id="ucl-phd"
          title="PhD students at UCL"
          question="You are a PhD student at UCL seeking supervision or co-supervision?"
        >
          <p>We can supervise or co-supervise PhD students at the UCL AI Centre.</p>
          <p>
            To reach out, please contact:{" "}
            <a href="mailto:i.bogunovic@ucl.ac.uk" className="link font-semibold">Ilija Bogunovic</a>
          </p>
          <SubjectLine label="When reaching out for UCL PhD supervision, please use the subject line:" subject="[UCL PhD supervision inquiry]" />
        </Route>

        <Route
          id="students"
          title="Student supervision"
          question="You are a master student looking for a thesis or project?"
        >
          <p>
            We supervise master theses and master projects. Open research questions are listed under{" "}
            <Link to="/teaching/topics" className="link font-semibold">project topics</Link>.
          </p>
          <p>
            To reach out, please contact:{" "}
            <a href="mailto:ilija.bogunovic@unibas.ch" className="link font-semibold">Ilija Bogunovic</a>
          </p>
          <SubjectLine label="When reaching out for a student project, please use the subject line:" subject="[Student project inquiry]" />
        </Route>

        <Route
          id="postdoc"
          title="Postdocs"
          question="You are a prospective Postdoctoral Scholar?"
        >
          <p>
            Please reach out via email to{" "}
            <a href="mailto:ilija.bogunovic@unibas.ch" className="link font-semibold">ilija.bogunovic@unibas.ch</a> or{" "}
            <a href="mailto:i.bogunovic@ucl.ac.uk" className="link font-semibold">i.bogunovic@ucl.ac.uk</a>
          </p>
          <SubjectLine label="Using the subject line:" subject="[PostDoc application]" />
          <p>Applicants can inquire if there are available positions first before applying.</p>
          <p className="font-semibold">Your application should include:</p>
          <ol className="list-decimal space-y-2 pl-6 marker:font-semibold marker:text-carmine">
            <li>Your CV, including a list of publications</li>
            <li>Contact information for three referees</li>
            <li>
              A cover letter describing your prior research experience and explaining why you are interested in joining
              our group
            </li>
          </ol>
          <p className="text-ink-soft">
            Applications are reviewed on a rolling basis. We encourage applications from candidates with diverse
            backgrounds and experiences.
          </p>
        </Route>
      </div>
    </Layout>
  );
};

export default JoinUs;
