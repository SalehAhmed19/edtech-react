export default function CourseTitle({ course }) {
  return (
    <>
      <h2 className="text-[40px] font-bold text-primary">
        {course?.courseTitle}
      </h2>
      <p>{course?.courseSubtitle}</p>
    </>
  );
}
