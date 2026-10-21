import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/brand/PageHeader";
import Reveal from "@/components/brand/Reveal";
import TeachingNav from "@/components/brand/TeachingNav";
import { CourseRow } from "@/components/brand/TeachingRows";
import { currentCourses } from "@/data/teaching";
import { currentSemester, semesterLabel } from "@/lib/semester";

/** This semester's courses. With exactly one, its page is shown directly. */
const Courses = () => {
  const running = currentCourses();
  if (running.length === 1) {
    const Page = running[0].page;
    return <Page />;
  }

  return (
    <Layout>
      <TeachingNav />
      <PageHeader title="Courses" intro={`Courses we teach in ${semesterLabel(currentSemester())}.`} />
      <div className="wrap pb-[var(--section)]">
        {running.length > 0 ? (
          <Reveal mode="rows" className="divide-y divide-beige">
            {running.map((c) => (
              <CourseRow key={c.slug} course={c} />
            ))}
          </Reveal>
        ) : (
          <div className="rounded-2xl bg-paper-2 p-8 sm:p-12">
            <p className="t-3 font-display text-ink">No courses this semester.</p>
            <p className="t-2 mt-3 text-ink-soft">Slides, exercises and schedules of past courses stay available.</p>
            <Link to="/teaching/archive" className="btn mt-6">
              Open the archive <span className="arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Courses;
