import { Link } from "react-router-dom";
// import tutor from "../../assets/images/tutor.png";
import teacher from "../../assets/images/teacher.png";
import { Fade } from "react-awesome-reveal";

export default function BecomeInstructor() {
  return (
    <div>
      <Fade direction="up" cascade={true} duration={800}>
        <img src={teacher} alt="" className="w-76 mx-auto" />
        <div className="px-10">
          <h2 className="text-[45px] font-bold text-center">
            Become an
            <span className="text-primary"> Instructor</span>
          </h2>
          <p className="text-center text-secondary">
            Share Your Expertise. Shape the Future.
          </p>

          <Link to="/become-instructor">
            <button className="px-5 py-3 bg-primary block mx-auto mt-5 rounded-full text-white">
              Become a teacher
            </button>
          </Link>
        </div>
      </Fade>
    </div>
  );
}
