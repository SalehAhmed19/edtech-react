import { Link } from "react-router-dom";
import tutor from "../../assets/images/tutor.png";

export default function BecomeInstructor() {
  return (
    <div>
      <img src={tutor} alt="" className="w-76 mx-auto" />
      <div className="px-10">
        <h3 className="text-center font-semibold text-[40px] mt-5">
          Become an Instructor?
        </h3>
        <p className="text-center">
          Love teaching? Don't get tired of explaining the same topics? <br />{" "}
          Want to put your teaching skills to good use? <br /> Then join Skilofy
          as an instructor now!
        </p>

        <Link to="/become-instructor">
          <button className="px-5 py-2 bg-[#333] block mx-auto mt-5 rounded-md text-white">
            Become a teacher
          </button>
        </Link>
      </div>
    </div>
  );
}
