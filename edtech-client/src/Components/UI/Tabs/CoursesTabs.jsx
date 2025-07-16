import React, { useState } from "react";
import CourseCard from "../../Cards/CourseCard";

/**
 * TabsProps defines the props for the Tabs component.
 * @typedef {object} TabsProps
 * @property {Array<Object>} data - An array of objects, each representing a tab.
 * @property {string} data[].title - The title displayed on the tab header.
 * @property {React.ReactNode} data[].content - The content to be displayed when this tab is active.
 * @property {string} [className] - Additional Tailwind CSS classes for the main tabs container.
 * @property {string} [headerClassName] - Additional Tailwind CSS classes for the tab headers container.
 * @property {string} [panelClassName] - Additional Tailwind CSS classes for the tab panels container.
 */

/**
 * Tabs component creates a set of navigable tabs with associated content panels.
 * @param {TabsProps} props
 */
const CoursesTabs = ({
  data,
  className = "",
  headerClassName = "",
  panelClassName = "",
}) => {
  // State to keep track of the currently active tab's index.
  // Defaults to the first tab (index 0).
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={`w-full ${className} mt-5`}>
      {/* Tab Headers */}
      <div
        className={`flex border-b border-slate-300 border-dashed mb-5 ${headerClassName} overflow-scroll`}
      >
        {data.map((tab, index) => (
          <button
            key={index} // Using index as key is acceptable for static lists
            onClick={() => setActiveIndex(index)}
            className={`
              px-6 py-3 font-medium border-b-2
              transition-all duration-300 ease-in-out
              ${
                activeIndex === index
                  ? "border-slate-600 text-slate-600 bg-blue-50" // Active tab styles
                  : "border-transparent text-gray-600 hover:text-gray-800 hover:border-gray-300" // Inactive tab styles
              }
              focus:outline-none 
              rounded-t-lg
            `}
            role="tab"
            aria-selected={activeIndex === index}
            id={`tab-${index}`}
            aria-controls={`panel-${index}`}
            tabIndex={activeIndex === index ? 0 : -1} // Make only active tab keyboard focusable
          >
            {tab.tab}
          </button>
        ))}
      </div>

      {/* Tab Panels */}
      <div className={`p-6 bg-white rounded-lg ${panelClassName}`}>
        {data.map((tab, index) => (
          <div
            key={index} // Using index as key is acceptable for static lists
            role="tabpanel"
            aria-labelledby={`tab-${index}`}
            id={`panel-${index}`}
            // Conditionally render the content based on activeIndex
            className={`${activeIndex === index ? "block" : "hidden"}
                       transition-opacity duration-300 ease-in-out grid grid-cols-4 gap-5`}
          >
            {tab.items.map((course) => (
              <CourseCard
                key={course.courseId}
                avatar={course.courseBannerImage}
                title={course.courseTitle}
                lesson={course.lessionsNumber}
                level={course.lessionLevel}
                id={course.courseId}
                course={course}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesTabs;
