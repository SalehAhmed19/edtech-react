import { useState } from "react";
import useGetCourses from "../../../Hooks/Courses/useGetCourses";
import CourseCard from "../../Cards/CourseCard";

export default function SmoothTabs() {
  const { courses } = useGetCourses();

  const programmingCourses = courses.filter(
    (course) => course.category === "Programming"
  );

  const webDevelopmentCourses = courses.filter(
    (course) => course.category === "Web Development"
  );

  const dataScienceCourses = courses.filter(
    (course) => course.category === "Data Science"
  );

  const graphicsDesignCourses = courses.filter(
    (course) => course.category === "Graphic Design"
  );

  const machineLearningCourses = courses.filter(
    (course) => course.category === "Machine Learning"
  );

  const cyberSecurityCourses = courses.filter(
    (course) => course.category === "Cybersecurity"
  );

  const databaseCourses = courses.filter(
    (course) => course.category === "Databases"
  );

  const projectManagementCourses = courses.filter(
    (course) => course.category === "Project Management"
  );

  const uiuxCourses = courses.filter(
    (course) => course.category === "UX/UI Design"
  );

  const cloudComputingCourses = courses.filter(
    (course) => course.category === "Cloud Computing"
  );

  const gameDevelopmentCourses = courses.filter(
    (course) => course.category === "Game Development"
  );

  const bioinformaticsCourses = courses.filter(
    (course) => course.category === "Bioinformatics"
  );

  const financeCourses = courses.filter(
    (course) => course.category === "Finance"
  );

  const marketingCourses = courses.filter(
    (course) => course.category === "Marketing"
  );

  const aiCourses = courses.filter(
    (course) => course.category === "Artificial Intelligence"
  );

  const ioTCourses = courses.filter((course) => course.category === "IoT");

  const arVrDevCourses = courses.filter(
    (course) => course.category === "AR/VR Development"
  );

  const blockchainCourses = courses.filter(
    (course) => course.category === "Blockchain"
  );

  const bigDataCourses = courses.filter(
    (course) => course.category === "Big Data"
  );

  const networkingCourses = courses.filter(
    (course) => course.category === "Networking"
  );

  const mobileDevelopmentCourses = courses.filter(
    (course) => course.category === "Mobile Development"
  );

  const devOpsCourses = courses.filter(
    (course) => course.category === "DevOps"
  );

  const productManagementCourses = courses.filter(
    (course) => course.category === "Product Management"
  );

  const softwareEngineeringCourses = courses.filter(
    (course) => course.category === "Software Engineering"
  );

  const softwareSkillsCourses = courses.filter(
    (course) => course.category === "Software Skills"
  );

  const photographyCourses = courses.filter(
    (course) => course.category === "Photography"
  );

  const softSkillsCourses = courses.filter(
    (course) => course.category === "Soft Skills"
  );

  const healthCourses = courses.filter(
    (course) => course.category === "Health & Wellness"
  );

  const tabs = [
    { tab: "Programming", items: programmingCourses },
    { tab: "Web Development", items: webDevelopmentCourses },
    { tab: "Data Science", items: dataScienceCourses },
    { tab: "Graphic Design", items: graphicsDesignCourses },
    { tab: "Machine Learning", items: machineLearningCourses },
    { tab: "Cybersecurity", items: cyberSecurityCourses },
    { tab: "Databases", items: databaseCourses },
    { tab: "Project Management", items: projectManagementCourses },
    { tab: "UX/UI Design", items: uiuxCourses },
    { tab: "Cloud Computing", items: cloudComputingCourses },
    { tab: "Game Development", items: gameDevelopmentCourses },
    { tab: "Bioinformatics", items: bioinformaticsCourses },
    { tab: "Finance", items: financeCourses },
    { tab: "Marketing", items: marketingCourses },
    { tab: "Artificial Intelligence", items: aiCourses },
    { tab: "AR/VR Development", items: arVrDevCourses },
    { tab: "Blockchain", items: blockchainCourses },
    { tab: "Big Data", items: bigDataCourses },
    { tab: "Networking", items: networkingCourses },
    { tab: "Mobile Development", items: mobileDevelopmentCourses },
    { tab: "DevOps", items: devOpsCourses },
    { tab: "Product Management", items: productManagementCourses },
    { tab: "Software Engineering", items: softwareEngineeringCourses },
    { tab: "Software Skills", items: softwareSkillsCourses },
    { tab: "Photography", items: photographyCourses },
    { tab: "IoT", items: ioTCourses },
    { tab: "Soft Skills", items: softSkillsCourses },
    { tab: "Health & Wellness", items: healthCourses },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].tab);
  const activeTabContent =
    tabs.find((tab) => tab.tab === activeTab)?.items || [];

  return (
    <div className="flex items-center justify-center mt-10">
      <div className="w-full bg-white">
        {/* Tab Headers with Horizontal Scroll */}
        {/* <div className="flex overflow-x-auto whitespace-nowrap space-x-2 sm:space-x-4 mb-6 pb-2"> */}
        <div className="flex flex-wrap gap-2 whitespace-nowrap w-full mb-6 pb-2">
          {tabs.map((tab) => (
            <button
              key={tab.tab}
              onClick={() => setActiveTab(tab.tab)}
              className={`
                px-4 py-3 text-sm sm:text-base font-medium rounded-full
                transition-all duration-300 w-48
                ${
                  activeTab === tab.tab
                    ? "bg-primary text-white shadow-md"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }
              `}
            >
              {tab.tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="relative overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 transition-opacity duration-300 pb-5">
            {activeTabContent.length > 0 ? (
              activeTabContent.map((course) => (
                <CourseCard
                  key={course.courseId}
                  avatar={course.courseBannerImage}
                  title={course.courseTitle}
                  lesson={course.lessionsNumber}
                  level={course.lessionLevel}
                  id={course.courseId}
                  course={course}
                  fee={course.courseFee}
                />
              ))
            ) : (
              <div className="col-span-full text-center text-gray-500">
                No courses found in this category.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
