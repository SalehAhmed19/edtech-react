import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

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
          <button className="bg-[#fc5a57] text-white px-5 py-2 rounded-md cursor-pointer">
            Enroll Now
          </button>
          <button className="bg-white text-[#fc5a57] px-5 py-2 rounded-md cursor-pointer border border-dashed">
            About us
          </button>
        </div>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
          impedit cupiditate expedita. Fugit explicabo voluptatum vitae
          laboriosam, aliquam quos ea iure amet, quibusdam eius nihil enim ipsam
          eligendi laudantium aut.
        </p>

        <div className="my-5 flex items-center gap-5 text-[#FC5A57] text-2xl">
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
      <div className="grid grid-cols-2 gap-5">
        <img
          className="w-full rounded-l-full rounded-tr-full border-6 border-[#f0f0f0]"
          src="https://plus.unsplash.com/premium_photo-1682787494765-44d02d12f5be?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <img
          className="w-full rounded-tl-full rounded-br-full border-6 border-[#f0f0f0]"
          src="https://plus.unsplash.com/premium_photo-1682787494765-44d02d12f5be?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <img
          className="w-full border-6 border-[#f0f0f0]"
          src="https://plus.unsplash.com/premium_photo-1682787494765-44d02d12f5be?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <img
          className="w-full rounded-full border-6 border-[#f0f0f0]"
          src="https://plus.unsplash.com/premium_photo-1682787494765-44d02d12f5be?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
    </div>
  );
}
