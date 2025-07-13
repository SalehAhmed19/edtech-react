import SectionTitleTwo from "../../Components/SectionTitle/SectionTitleTwo";
import man from "../../assets/images/man.png";
import ReasonToStart from "./ReasonToStart";

export default function BecomeInstructorPage() {
  return (
    <div>
      <div className="md:max-w-[920px] lg:max-w-[1280px] mx-auto flex flex-col gap-22">
        <div className="grid grid-cols-2 gap-5 items-center">
          <div className="pr-20">
            <SectionTitleTwo title={"Become an Instructor?"} />
            <p>
              Love teaching? Don't get tired of explaining the same topics? Want
              to put your teaching skills to good use? Then join Skilofy as an
              instructor now!
            </p>
            <button className="bg-[#333] px-5 py-2 rounded-md text-white mt-5">
              Start Now
            </button>
          </div>
          <div>
            <img src={man} alt="" />
          </div>
        </div>
      </div>
      <ReasonToStart />
    </div>
  );
}
