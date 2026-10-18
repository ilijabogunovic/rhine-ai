import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/brand/PageHeader";
import Reveal from "@/components/brand/Reveal";
import TeachingNav from "@/components/brand/TeachingNav";
import { CourseRow } from "@/components/brand/TeachingRows";
import { archivedCourses } from "@/data/teaching";
import { semesterLabel } from "@/lib/semester";

/** Every earlier course, grouped by semester. */
const Archive = () => {
  const groups = archivedCourses();
  return (
    <Layout>
      <TeachingNav />
      <PageHeader title="Course archive" intro="Courses from previous semesters, with their slides, exercises and schedules." />
      <div className="wrap space-y-20 pb-[var(--section)]">
        {groups.length > 0 ? (
          groups.map(({ semester, courses }) => (
            <section key={semester} aria-labelledby={`sem-${semester}`}>
              <h2 id={`sem-${semester}`} className="t-4 font-semibold text-ink">
                {semesterLabel(semester)}
              </h2>
              <Reveal mode="rows" className="mt-4 divide-y divide-beige">
                {courses.map((c) => (
                  <CourseRow key={c.slug} course={c} />
                ))}
              </Reveal>
            </section>
          ))
        ) : (
          <p className="t-2 text-ink-soft">No past courses yet.</p>
        )}
      </div>
    </Layout>
  );
};

export default Archive;
