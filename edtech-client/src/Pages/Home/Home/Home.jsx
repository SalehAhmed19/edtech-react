import ScrollToTop from "react-scroll-to-top";
import Banner from "../../../Components/Banner/Banner";
import BecomeInstructor from "../../../Components/BecomeInstructor/BecomeInstructor";
import ContactSection from "../../../Components/ContactSection/ContactSection";
import Courses from "../../../Components/Courses/Courses";
import NewCourses from "../../../Components/Courses/NewCourses";
import PopularCourses from "../../../Components/Courses/PopularCourses";
import TrendyCourses from "../../../Components/Courses/TrendyCourses";
import FAQ from "../../../Components/FAQ/FAQ";
import FeatureCard from "../../../Components/FeatureCard/FeatureCard";
import FeaturedTwo from "../../../Components/FeaturedTwo/FeaturedTwo";
import FreeCourses from "../../../Components/FreeCourses/FreeCourses";
import HighLights from "../../../Components/HighLights/HighLights";
import NewsLetter from "../../../Components/NewsLetter/NewsLetter";
import QuickTutorial from "../../../Components/QuickTutorial/QuickTutorial";
import Review from "../../../Components/Review/Review";
import Stats from "../../../Components/Stats/Stats";
import { IoIosArrowUp } from "react-icons/io";

export default function Home() {
  return (
    <>
      <div className="md:max-w-[920px] lg:max-w-[1280px] mx-auto flex flex-col gap-22">
        <Banner />
        {/* <Courses /> */}
        <PopularCourses />
        <TrendyCourses />
        <NewCourses />
        <HighLights />
        <FeatureCard />
        <Review />
        <FAQ />
        <FeaturedTwo />
        <BecomeInstructor />
      </div>
      <FreeCourses />
      <QuickTutorial />
      <Stats />
      <div className="md:max-w-[1180px] lg:max-w-[1280px] mx-auto flex flex-col gap-22">
        <NewsLetter />
        <ContactSection />
      </div>
    </>
  );
}
