import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/brand/PageHeader";
import Reveal from "@/components/brand/Reveal";
import { currentCourses, topics } from "@/data/teaching";
import { currentSemester, semesterLabel } from "@/lib/semester";

/** The way into teaching: courses on one side, project topics on the other. */
const Teaching = () => {
  const now = currentSemester();
  const running = currentCourses();
  const openTopics = topics.filter((t) => t.open !== false);

  return (
    <Layout>
      <PageHeader title="Teaching" intro="Courses taught by the lab, and research topics for master theses and projects." />

      <Reveal className="wrap grid gap-4 pb-[var(--section)] md:grid-cols-2">
        <Link
          to="/teaching/courses"
          className="group flex min-h-[22rem] flex-col justify-between bg-paper-2 p-8 transition-colors duration-200 hover:bg-beige sm:p-12"
        >
          <div>
            <h2 className="t-4 font-semibold text-ink">Courses</h2>
            <p className="t-2 mt-4 max-w-[40ch] text-ink-soft">
              Lectures, exercises and schedules for the courses we teach in {semesterLabel(now)}.
            </p>
          </div>
          <div className="mt-10">
            {running.length > 0 ? (
              <ul className="t-2 space-y-1 font-display text-ink">
                {running.map((c) => (
                  <li key={c.slug}>{c.title}</li>
                ))}
              </ul>
            ) : (
              <p className="t-2 text-ink-soft">No courses this semester. Past courses are in the archive.</p>
            )}
            <p className="t-1 mt-6 font-medium text-carmine">
              {running.length > 0 ? "Go to courses" : "Open the archive"}{" "}
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
            </p>
          </div>
        </Link>

        <Link
          to="/teaching/topics"
          className="group flex min-h-[22rem] flex-col justify-between bg-carmine p-8 text-paper transition-colors duration-200 hover:bg-carmine-deep sm:p-12"
        >
          <div>
            <h2 className="t-4 font-semibold text-paper">Project topics</h2>
            <p className="t-2 mt-4 max-w-[40ch] text-paper opacity-80">
              Research questions open for master theses and master projects, in Basel or at UCL.
            </p>
          </div>
          <div className="mt-10">
            <p className="t-2 font-display text-paper">
              {openTopics.length > 0
                ? `${openTopics.length} open topic${openTopics.length === 1 ? "" : "s"}`
                : "New topics will be posted here."}
            </p>
            <p className="t-1 mt-6 font-medium text-paper">
              See project topics{" "}
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
            </p>
          </div>
        </Link>
      </Reveal>
    </Layout>
  );
};

export default Teaching;
