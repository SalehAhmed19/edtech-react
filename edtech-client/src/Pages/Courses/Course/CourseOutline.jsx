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

  const accordionData = [
    {
      title: "Module 1: Photoshop Fundamentals and Interface Mastery",
      content:
        "Begin your journey by understanding the core interface of Adobe Photoshop. This module covers workspace customization, essential navigation techniques, and an introduction to basic image manipulation, including setting up new projects and managing transparency.",
    },
    {
      title: "Module 2: Advanced Selections and Masking Techniques",
      content:
        "Master the art of precise selections using various tools like Quick Selection, Lasso, and Pen Tool. Learn to refine edges, utilize layer masks for non-destructive editing, and apply adjustment layers to enhance specific areas of an image.",
    },
    {
      title: "Module 3: Image Retouching and Enhancement",
      content:
        "Delve into professional retouching. This module covers healing tools for blemish removal, the Liquify tool for reshaping, and advanced techniques for adjusting light and color using Levels, Curves, and Dodge/Burn tools. Explore frequency separation for high-end skin retouching.",
    },
    {
      title: "Module 4: Color Theory, Blending Modes, and Filters",
      content:
        "Gain a deep understanding of color theory and its application in Photoshop. Explore various blending modes to create stunning visual effects, and learn to apply and customize filters, including Smart Filters and Camera Raw filters for advanced color grading.",
    },
    {
      title: "Module 5: Compositing, Smart Objects, and Automation",
      content:
        "Learn to seamlessly combine multiple images into cohesive compositions. This module covers the use of Smart Objects for non-destructive transformations, creating realistic shadows and reflections, and automating repetitive tasks using Actions and batch processing for an efficient workflow.",
    },
    {
      title: "Module 6: Text, Vector Graphics, and Web Optimization",
      content:
        "Explore typography in Photoshop, including text effects and working with the Type Tool. Understand the difference between raster and vector graphics, and learn to use vector tools like the Pen Tool. Finally, optimize your images for web and print, understanding file formats and color management.",
    },
  ];
  return (
    <div>
      <SectionTitleTwo title={"Course Outline"} />
      {course?.courseOutline.map((item, index) => (
        <CourseOutlineAccordant
          key={index} // Using index as key is generally fine for static lists without reordering
          item={item}
          index={index}
          activeIndex={activeIndex}
          onToggle={handleToggle}
        />
      ))}
    </div>
  );
}
