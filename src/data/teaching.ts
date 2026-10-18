import type { ComponentType } from "react";
import { compareSemesters, currentSemester, type SemesterKey } from "@/lib/semester";
import ModernRL2026 from "@/pages/teaching/ModernRL2026";

/**
 * Everything on the Teaching page comes from this file.
 *
 * To add a course: write its page under src/pages/teaching/, import it above and add an entry to `courses`.
 * Its page is served at /teaching/<slug>. To add a student project topic, add an entry to `topics`
 * (no page needed). The current semester is worked out from today's date: its courses appear under
 * /teaching/courses, and every earlier course moves to /teaching/archive on its own.
 */

export interface Course {
  kind: "course";
  slug: string;
  semester: SemesterKey;
  title: string;
  subtitle?: string;
  code?: string;
  institution: string;
  schedule?: string;
  summary: string;
  instructors: string[];
  page: ComponentType;
}

export interface Topic {
  kind: "topic";
  /** Unique id, used in links: /teaching?view=topics#<id> */
  id: string;
  semester: SemesterKey;
  title: string;
  /** What kind of student work the topic suits. */
  level: ("Master thesis" | "Master project" | "Bachelor thesis" | "Semester project")[];
  institution: string;
  summary: string;
  supervisors: string[];
  /** Email that applications go to; the subject line is filled in for the student. */
  contact: string;
  /** Set to false once the topic is taken; it then stays visible but marked as taken. */
  open?: boolean;
}

export type TeachingEntry = Course | Topic;

export const courses: Course[] = [
  {
    kind: "course",
    slug: "modern-rl-spring-2026",
    semester: "2026-spring",
    title: "Modern Reinforcement Learning",
    subtitle: "From Agents to LLMs",
    code: "78174",
    institution: "University of Basel",
    schedule: "Fridays, 14:00–17:00 · Seminar room 00.003, Spiegelgasse 1",
    summary:
      "A modern, technically rigorous introduction to reinforcement learning, with a focus on how RL ideas power the post-training and alignment pipelines behind large language models.",
    instructors: ["Prof. Ilija Bogunovic"],
    page: ModernRL2026,
  },
];

export const topics: Topic[] = [
  // Example:
  // {
  //   kind: "topic",
  //   id: "rl-for-diffusion-llms",
  //   semester: "2026-autumn",
  //   title: "Reinforcement learning for diffusion language models",
  //   level: ["Master thesis", "Master project"],
  //   institution: "University of Basel",
  //   summary: "One or two sentences on the question and what the student would do.",
  //   supervisors: ["Prof. Ilija Bogunovic"],
  //   contact: "ilija.bogunovic@unibas.ch",
  // },
];

export const teachingEntries: TeachingEntry[] = [...courses, ...topics];

/** Courses running this semester. */
export const currentCourses = () => courses.filter((c) => c.semester === currentSemester());

/** Earlier courses, grouped by semester, newest first. */
export const archivedCourses = () => {
  const now = currentSemester();
  const past = courses.filter((c) => compareSemesters(c.semester, now) > 0);
  const semesters = Array.from(new Set(past.map((c) => c.semester))).sort(compareSemesters);
  return semesters.map((semester) => ({ semester, courses: past.filter((c) => c.semester === semester) }));
};

/** Topics, open ones first, then newest first. */
export const sortedTopics = () =>
  [...topics].sort(
    (a, b) => Number(b.open !== false) - Number(a.open !== false) || compareSemesters(a.semester, b.semester)
  );
