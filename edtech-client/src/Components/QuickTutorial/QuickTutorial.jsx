// import tutorial from "../../assets/images/tutorial.svg";
import { Fade, Zoom } from "react-awesome-reveal";
import tutorial from "../../assets/images/online-session.png";

export default function QuickTutorial() {
  return (
    <>
      <div className="bg-[#1e1e1e] pt-10 text-center text-white">
        <Fade direction="down" cascade={true} duration={800}>
          <h2 className="text-[40px] font-semibold">
            Quick <span className="text-primary">Tutorial</span>
          </h2>
          <p>Get Up to Speed in Minutes.</p>
        </Fade>

        <div className="mt-5 bg-white p-5 md:max-w-[920px] lg:max-w-[1280px] mx-auto rounded-t-2xl">
          <Zoom cascade={true} duration={800}>
            <img
              src={tutorial}
              alt="online-session"
              className="mx-auto mt-5 w-1/2"
            />
          </Zoom>
        </div>
      </div>

      <Fade direction="up" cascade={true} duration={800}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/X8BYu3dMKf0?si=XYRsthIyysjXI_bw"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          className="w-1/2 h-[500px] mx-auto mt-5 rounded-2xl shadow-lg"
        ></iframe>
      </Fade>
    </>
  );
}
