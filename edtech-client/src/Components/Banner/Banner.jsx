import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import banner from "../../assets/images/banner.jpg";

export default function Banner() {
  return (
    <div className="grid grid-cols-2 items-center gap-5 min-h-screen">
      <div className="flex flex-col gap-5">
        <h1 className="text-[65px] font-semibold">
          Develop your <br />
          <Typewriter
            words={["Skills", "Confidence", "Project", "Repeat!"]}
            loop={5}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            //   onLoopDone={handleDone}
            //   onType={handleType}
          />
        </h1>

        <div className="flex gap-5">
          <button className="bg-[#333] text-white px-5 py-2 rounded-md cursor-pointer">
            Enroll Now
          </button>
          <button className="bg-white text-[#333] px-5 py-2 rounded-md cursor-pointer border border-dashed">
            About us
          </button>
        </div>

        <p>
          Our cutting-edge edTech platform is revolutionizing learning by
          offering personalized, on-demand education for all. We provide
          interactive courses, expert-led tutorials, and real-time feedback to
          help you master new skills. Join our community and unlock your
          potential with a smarter, more engaging way to learn.
        </p>

        <div className="my-5 flex items-center gap-5 text-[#333] text-2xl">
          <p>
            <FaFacebook />
          </p>
          <p>
            <FaTwitter />
          </p>
          <p>
            <FaLinkedin />
          </p>
          <p>
            <FaYoutube />
          </p>
        </div>
      </div>
      {/*  */}
      <div>
        <img src={banner} alt="banner" />
      </div>
    </div>
  );
}
