import { useState } from "react";
import SectionTitleTwo from "../../../Components/SectionTitle/SectionTitleTwo";
import CourseOutlineAccordant from "../../../Components/Accordant/CourseOutlineAccordant";

export default function CourseOutline({ course }) {
  const [activeIndex, setActiveIndex] = useState(null);

  /**
   * Toggles the active accordion panel.
   * If the clicked panel is already open, it closes it.
   * Otherwise, it opens the clicked panel.
   * @param {number} index - The index of the panel to toggle.
   */
  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <SectionTitleTwo title={"Course Outline"} />
      {course?.courseOutline.map((item, index) => (
        <CourseOutlineAccordant
          key={index}
          item={item}
          index={index}
          activeIndex={activeIndex}
          onToggle={handleToggle}
        />
      ))}
    </div>
  );
}
