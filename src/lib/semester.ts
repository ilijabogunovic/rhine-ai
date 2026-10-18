// Semesters are written as "2026-spring" or "2026-autumn".
// Spring runs February to July, autumn August to January (January belongs to the previous year's autumn).
export type Season = "spring" | "autumn";
export type SemesterKey = `${number}-${Season}`;

export const semesterOf = (date: Date): SemesterKey => {
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  if (month >= 2 && month <= 7) return `${year}-spring`;
  return month === 1 ? `${year - 1}-autumn` : `${year}-autumn`;
};

export const currentSemester = (): SemesterKey => semesterOf(new Date());

export const semesterLabel = (key: SemesterKey) => {
  const [year, season] = key.split("-");
  return `${season === "spring" ? "Spring" : "Autumn"} ${year}`;
};

const rank = (key: SemesterKey) => {
  const [year, season] = key.split("-");
  return Number(year) * 2 + (season === "autumn" ? 1 : 0);
};

/** Newest first. */
export const compareSemesters = (a: SemesterKey, b: SemesterKey) => rank(b) - rank(a);

export const isSemesterKey = (value: string | null): value is SemesterKey =>
  !!value && /^\d{4}-(spring|autumn)$/.test(value);
