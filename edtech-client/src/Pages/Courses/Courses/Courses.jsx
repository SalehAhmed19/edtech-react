import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import CourseCard from "../../../Components/Cards/CourseCard";
import PopularCourses from "../../../Components/Courses/PopularCourses";
import NewCourses from "../../../Components/Courses/NewCourses";
import FreeCourses from "../../../Components/FreeCourses/FreeCourses";
import { IoIosArrowUp } from "react-icons/io";
import ScrollToTop from "react-scroll-to-top";
import useGetCourses from "../../../Hooks/Courses/useGetCourses";
import CoursesTabs from "../../../Components/UI/Tabs/CoursesTabs";

export default function Courses() {
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
  const tabItems = tabs.map((tab) => tab.items);
  // console.log(tabItems);

  return (
    <div className="md:max-w-[920px] lg:max-w-[1280px] mx-auto my-10">
      <SectionTitle title={"Our Courses"} />
      <div className="flex flex-col gap-20">
        <CoursesTabs data={tabs} />
        <PopularCourses />
        <NewCourses />
        <FreeCourses />
      </div>

      <ScrollToTop
        smooth
        style={{
          backgroundColor: "#333",
          borderRadius: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        component={<IoIosArrowUp className="text-white" />}
      />
    </div>
  );
}
