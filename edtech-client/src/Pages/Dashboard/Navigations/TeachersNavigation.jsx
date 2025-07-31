import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo-transparent.png";
import course from "../../../assets/images/online-learning.png";
import cart from "../../../assets/images/shopping-cart.png";
import order from "../../../assets/images/order-now.png";
import skill from "../../../assets/images/skills.png";
import useGetTeacher from "../../../Hooks/Users/useGetTeacher";

export default function TeachersNavigation() {
  const { teacher, isLoading } = useGetTeacher();

  return (
    <div className="rounded-md">
      <Link to="/">
        <div className="py-5">
          <img src={logo} className="w-20 mx-auto" alt="" />
        </div>
      </Link>

      <Link to="/dashboard">
        <div className="border-t border-b border-slate-300 p-3 flex gap-4 items-center">
          {isLoading ? (
            <div className="w-20 h-20 rounded-full bg-slate-300 animate-pulse"></div>
          ) : (
            <>
              {teacher.photo === "" ? (
                <div className="w-20 h-20 rounded-full bg-slate-300 animate-pulse"></div>
              ) : (
                <img
                  src={`${teacher?.photo}`}
                  alt=""
                  className="rounded-full w-20 border-2 border-slate-300 border-dashed"
                />
              )}
            </>
          )}

          <p className="font-semibold text-xl">{teacher?.name}</p>
        </div>
      </Link>
      <ul className="my-5 flex flex-col gap-2 px-10 h-[50vh] overflow-y-auto scroll-smooth">
        <Link to="/dashboard/teacher-profile">
          <li className="hover:bg-slate-200 duration-500 p-2 rounded-md cursor-pointer">
            Profile
          </li>
        </Link>
        <Link to="/dashboard/student-review">
          <li className="hover:bg-slate-200 duration-500 p-2 rounded-md cursor-pointer flex items-center gap-5">
            <img className="w-6" src={course} alt="" /> Students Review
          </li>
        </Link>
        <Link to="/dashboard/assignments">
          <li className="hover:bg-slate-200 duration-500 p-2 rounded-md cursor-pointer flex items-center gap-5">
            <img className="w-6" src={skill} alt="" /> Assignments
          </li>
        </Link>
        <Link to="/dashboard/resources">
          <li className="hover:bg-slate-200 duration-500 p-2 rounded-md cursor-pointer flex items-center gap-5">
            <img className="w-6" src={cart} alt="" /> Resourses
          </li>
        </Link>
        <Link to="/dashboard/support">
          <li className="hover:bg-slate-200 duration-500 p-2 rounded-md cursor-pointer flex items-center gap-5">
            <img className="w-6" src={order} alt="" /> Support
          </li>
        </Link>
      </ul>
    </div>
  );
}
