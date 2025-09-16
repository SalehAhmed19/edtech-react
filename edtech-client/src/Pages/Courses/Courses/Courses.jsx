import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import CourseCard from "../../../Components/Cards/CourseCard";
import PopularCourses from "../../../Components/Courses/PopularCourses";
import NewCourses from "../../../Components/Courses/NewCourses";
import FreeCourses from "../../../Components/FreeCourses/FreeCourses";
import { IoIosArrowUp } from "react-icons/io";
import ScrollToTop from "react-scroll-to-top";

import { Fade } from "react-awesome-reveal";
import SmoothTabs from "../../../Components/UI/Tabs/Tabs";

export default function Courses() {
  return (
    <div className="md:max-w-[920px] lg:max-w-[1280px] mx-auto my-10">
      <Fade direction="up" cascade={true} duration={800}>
        <h2 className="text-[35px] md:text-[45px] font-bold text-center">
          Our <span className="text-primary"> Courses</span>
        </h2>
        <p className="text-center text-secondary">
          Unlock Your Potential with Our Courses.
        </p>
      </Fade>

      <div className="flex flex-col gap-20">
        <Fade direction="down" cascade={true} duration={800}>
          <SmoothTabs />
        </Fade>
        <PopularCourses />
        <NewCourses />
        <FreeCourses />
      </div>

      <ScrollToTop
        smooth
        style={{
          backgroundColor: "#CE2823",
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
