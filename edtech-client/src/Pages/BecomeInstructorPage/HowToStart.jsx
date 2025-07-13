import { useState } from "react";
import BecomeTeacherAccordant from "../../Components/Accordant/BecomeTeacherAccordant";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

export default function HowToStart() {
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
      <SectionTitle title={"How to start"} />
      <BecomeTeacherAccordant
        // key={index} // Using index as key is generally fine for static lists without reordering
        // item={item}
        // index={index}
        activeIndex={activeIndex}
        onToggle={handleToggle}
      />
    </div>
  );
}
