import {
  FacebookLogoIcon,
  LinkedinLogoIcon,
  XLogoIcon,
  YoutubeLogoIcon,
} from "@phosphor-icons/react";
import logo from "../../../assets/images/logo-ligth.png";
import logoDark from "../../../assets/images/logo.png";

export default function Footer() {
  const date = new Date().getFullYear();
  return (
    <>
      <div className="bg-[#1e1e1e] text-white grid grid-cols-4 gap-5 px-10 py-20">
        <div className="flex flex-col justify-between">
          <div>
            <img src={logo} alt="logo" className="w-36" />
            <p>Online education platform</p>
          </div>
          <p>Connected to our community-</p>

          <div className="flex items-center gap-5 mt-5">
            <a href="#">
              <FacebookLogoIcon size={32} />
            </a>
            <a href="#">
              <XLogoIcon size={32} />
            </a>
            <a href="#">
              <LinkedinLogoIcon size={32} />
            </a>
            <a href="#">
              <YoutubeLogoIcon size={32} />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h5 className="font-semibold">Quick Link</h5>
          <p>Upcoming Live Batch</p>
          <p>Free Live Class</p>
          <p>Live Workshop</p>
        </div>
        <div className="flex flex-col gap-3">
          <h5 className="font-semibold">Quick Link</h5>
          <p>Upcoming Live Batch</p>
          <p>Free Live Class</p>
          <p>Live Workshop</p>
        </div>
        <div className="flex flex-col gap-3">
          <h5 className="font-semibold">Quick Link</h5>
          <p>Upcoming Live Batch</p>
          <p>Free Live Class</p>
          <p>Live Workshop</p>
        </div>
      </div>
      <div className="bg-[#fff] p-5 text-center">
        <img src={logoDark} alt="logo" className="w-10 mx-auto" />
        <p>
          &copy; All rights reserved{" "}
          <span className="text-primary">{date}</span>.
        </p>
      </div>
    </>
  );
}
