import SectionTitleTwo from "../../../Components/SectionTitle/SectionTitleTwo";

export default function WhatYouLearn() {
  return (
    <div>
      <SectionTitleTwo title={"What you learn form this course"} />
      <ul className="list-disc pl-10 flex flex-col gap-4">
        <li>
          Usage of Essential Tools and Panels in Adobe Photoshop / Illustrator
        </li>
        <li>Setting up project work</li>
        <li>Creating business card and flyer designs</li>
      </ul>
    </div>
  );
}
