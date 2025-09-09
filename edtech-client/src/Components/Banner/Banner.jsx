import { ArrowBendDownRightIcon } from "@phosphor-icons/react";
import banner from "../../assets/images/banner.png";
import { Zoom } from "react-awesome-reveal";

export default function Banner() {
  return (
    <div className="pt-24 text-center">
      <Zoom cascade={true} duration={800}>
        <h1 className="text-[65px] font-bold" style={{ lineHeight: "1" }}>
          <span className="text-primary">Learn</span> Without Limits: Your
          Digital
          <span className="text-primary"> Classroom</span>
        </h1>
        <p className="text-secondary">
          Unlock Your Potential with Expert-Led Courses.
        </p>

        <div className="flex justify-center gap-5 mt-10 mb-5">
          <button className="bg-[#CE2823] hover:bg-[#ad211c] duration-300 px-7 py-3 text-xl rounded-full text-white flex items-center gap-2 shadow">
            Enroll Now
            <ArrowBendDownRightIcon size={32} />
          </button>
          <button className="bg-[#fff] border-2 border-[#CE2823] px-7 py-3 text-xl rounded-full flex items-center gap-2 shadow">
            Explore More
          </button>
        </div>

        <img src={banner} alt="banner-image-01" className="mx-auto w-1/2" />
      </Zoom>
    </div>
  );
}
