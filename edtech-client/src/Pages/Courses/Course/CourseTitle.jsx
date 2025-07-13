export default function CourseTitle({ course }) {
  return (
    <>
      <h2 className="text-[40px] font-bold">{course?.courseTitle}</h2>
      <p>{course?.courseSubtitle}</p>
    </>
  );
}
