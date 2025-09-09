import { Fade } from "react-awesome-reveal";
import laptop from "../../assets/images/laptop.png";

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
      <Fade direction="right" cascade={true} duration={800}>
        <img src={laptop} alt="" />
      </Fade>
    </div>
  );
}
