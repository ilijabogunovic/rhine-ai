import { useParams } from "react-router-dom";
import { courses } from "@/data/teaching";
import NotFound from "./NotFound";

/** Serves /teaching/:slug from the course list in src/data/teaching.ts. */
const TeachingCourse = () => {
  const { slug } = useParams();
  const course = courses.find((c) => c.slug === slug);
  if (!course) return <NotFound />;
  const Page = course.page;
  return <Page />;
};

export default TeachingCourse;
