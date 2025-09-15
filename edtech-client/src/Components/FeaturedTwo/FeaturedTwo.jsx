import { Fade, Zoom } from "react-awesome-reveal";
import Laptop from "../Laptop/Laptop";

export default function FeaturedTwo() {
  return (
    <div className="bg-white p-10 rounded-md flex justify-between items-center">
      <Fade direction="left" cascade={true} duration={800}>
        <div>
          <h2 className="text-[40px] font-semibold text-primary">
            Pioneering the Future of Technology
          </h2>
          <p className="text-xl mt-5">
            Explore our curated selection of cutting-edge courses designed to
            keep you at the forefront of innovation.
          </p>
          <button className="bg-primary rounded-full text-white px-5 py-3 mt-5">
            Explore Courses
          </button>
        </div>
      </Fade>
      <Zoom cascade={true} duration={800}>
        <Laptop />
      </Zoom>
    </div>
  );
}
