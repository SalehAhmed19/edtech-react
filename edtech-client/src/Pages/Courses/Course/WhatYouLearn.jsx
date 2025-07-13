import SectionTitleTwo from "../../../Components/SectionTitle/SectionTitleTwo";

export default function WhatYouLearn({ course }) {
  return (
    <div>
      <SectionTitleTwo title={"What you learn form this course"} />
      <ul className="list-disc pl-10 flex flex-col gap-4">
        {course?.whatYouLearn.map((learn, idx) => (
          <li key={idx}>{learn}</li>
        ))}
      </ul>
    </div>
  );
}
