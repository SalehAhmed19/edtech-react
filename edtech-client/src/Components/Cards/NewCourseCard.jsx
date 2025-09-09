// import { Link } from "react-router-dom";

// export default function NewCourseCard({ course }) {
//   const { courseTitle, courseBannerImage } = course;
//   return (
//     <div className="flex gap-5 items-center border border-dashed border-slate-300">
//       <img src={courseBannerImage} alt="" className="w-46" />
//       <div className="py-3">
//         <h3 className="text-primary font-semibold text-xl">{courseTitle}</h3>
//         <p className="text-[#787878] mt-3">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
//           accusantium quam ex, expedita tempora voluptatem velit doloribus
//           corrupti veritatis magnam!
//         </p>
//         <div className="flex justify-between items-center mt-3 pr-7">
//           <p className="text-primary font-semibold my-2">
//             Price: {course.courseFee} BDT
//           </p>
//           <Link to={`/courses/${course.courseId}`}>
//             <button className="border border-dashed border-slate-300 hover:border-0 hover:bg-[#333] px-5 py-1 rounded-md hover:text-white duration-500">
//               Details
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }
import React from "react";
import { Link } from "react-router-dom";

export default function NewCourseCard({ course }) {
  const { courseTitle, courseBannerImage, courseDesignedFor, courseFee } =
    course;
  return (
    <div className="flex items-center gap-5">
      <img
        src={courseBannerImage}
        alt="course-thumnail"
        className="w-40 rounded-l-xl"
      />
      <div>
        <h4 className="font-bold">{courseTitle}</h4>
        <p className="text-secondary" style={{ fontSize: "14px" }}>
          For {courseDesignedFor}
        </p>

        <div className="flex justify-between items-center mt-5">
          <p className="font-bold">
            {courseFee} <span className="text-primary">BDT</span>
          </p>

          <Link
            to={`/courses/${course.courseId}`}
            className="font-bold hover:text-[#CE2823] duration-300"
          >
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
}
