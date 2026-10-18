import { Link } from "react-router-dom";
import type { Course, Topic } from "@/data/teaching";
import { semesterLabel } from "@/lib/semester";

export const CourseRow = ({ course }: { course: Course }) => (
  <article className="grid gap-x-10 gap-y-4 py-10 lg:grid-cols-12">
    <div className="t-1 text-ink-soft lg:col-span-3">
      <p className="font-medium text-ink">{semesterLabel(course.semester)}</p>
      <p>{[course.code, course.institution].filter(Boolean).join(" · ")}</p>
    </div>
    <div className="lg:col-span-9">
      <h3 className="t-3 font-semibold text-ink">
        <Link to={`/teaching/${course.slug}`} className="transition-colors hover:text-carmine">
          {course.title}
        </Link>
      </h3>
      {course.subtitle && <p className="t-2 mt-1 font-display text-ink">{course.subtitle}</p>}
      <p className="t-2 mt-4 text-ink-soft">{course.summary}</p>
      <p className="t-1 mt-4 text-ink-soft">
        {course.instructors.join(", ")}
        {course.schedule && ` · ${course.schedule}`}
      </p>
      <Link to={`/teaching/${course.slug}`} className="btn mt-6">
        Course page <span className="arrow" aria-hidden="true">→</span>
      </Link>
    </div>
  </article>
);

export const TopicRow = ({ topic }: { topic: Topic }) => {
  const open = topic.open !== false;
  const subject = encodeURIComponent(`[Student project inquiry] ${topic.title}`);
  return (
    <article id={topic.id} className="grid scroll-mt-24 gap-x-10 gap-y-4 py-10 lg:grid-cols-12">
      <div className="t-1 text-ink-soft lg:col-span-3">
        <p className="font-medium text-ink">{semesterLabel(topic.semester)}</p>
        <p>{topic.institution}</p>
      </div>
      <div className="lg:col-span-9">
        <p className="flex flex-wrap gap-2">
          {topic.level.map((l) => (
            <span key={l} className="bg-paper-2 px-2 py-0.5 text-sm font-medium text-ink">
              {l}
            </span>
          ))}
          {!open && <span className="bg-ink px-2 py-0.5 text-sm font-medium text-paper">Taken</span>}
        </p>
        <h3 className="t-3 mt-3 font-semibold text-ink">{topic.title}</h3>
        <p className="t-2 mt-4 text-ink-soft">{topic.summary}</p>
        <p className="t-1 mt-4 text-ink-soft">Supervised by {topic.supervisors.join(", ")}</p>
        {open && (
          <a href={`mailto:${topic.contact}?subject=${subject}`} className="btn btn-quiet mt-6">
            Ask about this topic <span className="arrow" aria-hidden="true">→</span>
          </a>
        )}
      </div>
    </article>
  );
};
