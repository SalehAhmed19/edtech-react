import { Fade, Zoom } from "react-awesome-reveal";
import notFound from "../../assets/images/404-v1.png";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@phosphor-icons/react";

export default function NotFound() {
  return (
    <div className="h-screen grid grid-cols-2 place-content-center place-items-center">
      <Zoom cascade={true} duration={800}>
        <img src={notFound} alt="not-found" />
      </Zoom>
      <div className="text-center">
        <Fade direction="up" cascade={true} duration={800}>
          <h2 className="font-bold text-9xl text-[#cacaca] animate-bounce">
            404
          </h2>
          <h5 className="font-bold text-5xl">Page Not found!</h5>

          <Link to="/" className="text-primary font-bold my-5 inline-block">
            <span className="flex items-center gap-2 bg-gray-100 px-5 py-3 rounded-full">
              Return to Home Page{" "}
              <ArrowRightIcon size={32} className="animate-pulse" />
            </span>
          </Link>
        </Fade>
      </div>
    </div>
  );
}
