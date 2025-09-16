import { Link } from "react-router-dom";
import SectionTitleTwo from "../../Components/SectionTitle/SectionTitleTwo";
import Stats from "../../Components/Stats/Stats";
import man from "../../assets/images/man.png";
import ReasonToStart from "./ReasonToStart";
import { Fade } from "react-awesome-reveal";

export default function BecomeInstructorPage() {
  return (
    <div>
      <div className="md:max-w-[920px] lg:max-w-[1280px] mx-auto flex flex-col gap-22">
        <div className="grid md:grid-cols-2 gap-5 items-center p-5">
          <div className="md:pr-20 text-center md:text-left order-2 md:order-1">
            <Fade direction="up" cascade={true} duration={800}>
              <SectionTitleTwo title={"Become an Instructor?"} />
              <p>
                Love teaching? Don't get tired of explaining the same topics?
                Want to put your teaching skills to good use? Then join Skilofy
                as an instructor now!
              </p>
              <Link to="/become-instructor/get-started">
                <button className="bg-primary px-5 py-3 rounded-full text-white mt-5">
                  Start Now
                </button>
              </Link>
            </Fade>
          </div>
          <div className="order-1 md:order-2">
            <Fade direction="right" cascade={true} duration={800}>
              <img src={man} alt="man" />
            </Fade>
          </div>
        </div>
      </div>
      <ReasonToStart />
      <Stats />
    </div>
  );
}
