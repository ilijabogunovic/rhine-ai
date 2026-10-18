import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/brand/PageHeader";
import Reveal from "@/components/brand/Reveal";
import TeachingNav from "@/components/brand/TeachingNav";
import { TopicRow } from "@/components/brand/TeachingRows";
import { sortedTopics } from "@/data/teaching";

/** Research topics for master theses and master projects. */
const Topics = () => {
  const list = sortedTopics();
  return (
    <Layout>
      <TeachingNav />
      <PageHeader
        title="Project topics"
        intro="Research questions open for master theses and master projects, in Basel or at UCL."
      />
      <div className="wrap pb-[var(--section)]">
        {list.length > 0 ? (
          <Reveal mode="rows" className="divide-y divide-beige">
            {list.map((t) => (
              <TopicRow key={t.id} topic={t} />
            ))}
          </Reveal>
        ) : (
          <div className="bg-paper-2 p-8 sm:p-12">
            <p className="t-3 font-display text-ink">New topics will be posted here.</p>
            <p className="t-2 mt-3 text-ink-soft">
              Interested in a thesis or project with the lab in the meantime? Write to{" "}
              <a href="mailto:ilija.bogunovic@unibas.ch" className="link font-medium">
                Ilija Bogunovic
              </a>
              .
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Topics;
