export default function VerticalCard({ course }) {
  return (
    <div className="border border-gray-200 rounded-xl p-2 flex items-center gap-3 bg-white">
      <img
        src={course.image}
        alt="course-thumbnail"
        className="w-36 rounded-lg"
      />
      <div>
        <h5 className="text-primary font-bold" style={{ fontSize: "14px" }}>
          {course.courseName}
        </h5>
        <p className="text-secondary" style={{ fontSize: "14px" }}>
          {course.courseId}
        </p>
        <p className="font-bold">
          Price: {course.courseFee} <span className="text-primary">BDT</span>
        </p>
      </div>
    </div>
  );
}
