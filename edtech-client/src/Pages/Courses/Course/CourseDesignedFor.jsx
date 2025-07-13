import SectionTitleTwo from "../../../Components/SectionTitle/SectionTitleTwo";

export default function CourseDesignedFor({ course }) {
  return (
    <div>
      <SectionTitleTwo title={"For whom this course is designed"} />
      <p>{course?.courseDesignedFor}</p>
    </div>
  );
}
