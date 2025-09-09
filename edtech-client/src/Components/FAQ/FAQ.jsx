// import faq from "../../assets/images/faq1.svg";
import faq from "../../assets/images/faq.png";
import { useState } from "react";
import Accordant from "../Accordant/Accordant";

export default function FAQ() {
  // State to manage which accordion item is currently open.
  // null means no item is open.
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
      title: "What is EdTech?",
      content:
        "EdTech is an online learning platform dedicated to providing high-quality, practical technology courses. Our goal is to equip individuals with the skills needed to thrive in the fast-evolving tech industry.",
    },
    {
      title: "Who are these courses for?",
      content:
        "Our courses cater to a wide range of learners, from absolute beginners looking to start a career in tech, to experienced professionals wanting to upskill or specialize in new technologies. We offer courses at Beginner, Intermediate, Advanced, and Expert levels.",
    },
    {
      title: "Are there any prerequisites for your courses?",
      content:
        "Each course page clearly lists its prerequisites. Many beginner courses require no prior experience, while intermediate and advanced courses may require foundational knowledge in specific areas. We recommend reviewing the Prerequisites section on each course detail page.",
    },
    {
      title: "How long does it take to complete a course?",
      content:
        "The lessionsNumber for each course indicates the number of lessons. The total time varies greatly depending on the course's complexity, your prior knowledge, and your learning pace. We design our courses to be flexible, allowing you to learn at your own speed.",
    },
    {
      title: "Are the courses updated regularly?",
      content:
        "Yes, we strive to keep our course content current with the latest industry trends and technology updates. Major updates are announced, and minor revisions are made continuously.",
    },
  ];

  return (
    <div>
      <div className="mt-10">
        <div>
          <img src={faq} alt="" className="mx-auto" />
          <h2 className="text-[45px] font-bold text-center">
            <span className="text-primary">FAQ</span>s
          </h2>
          <p className="text-center text-secondary">
            Everything You Need to Know.
          </p>
        </div>
        <div className="order-2 md:order-1">
          {accordionData.map((item, index) => (
            <Accordant
              key={index} // Using index as key is generally fine for static lists without reordering
              title={item.title}
              content={item.content}
              index={index}
              activeIndex={activeIndex}
              onToggle={handleToggle}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
