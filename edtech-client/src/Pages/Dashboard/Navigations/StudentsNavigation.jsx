import { Link } from "react-router-dom";
import useGetStudents from "../../../Hooks/Users/useGetStudent";
import logo from "../../../assets/images/logo-transparent.png";
import course from "../../../assets/images/online-learning.png";
import cart from "../../../assets/images/shopping-cart.png";
import order from "../../../assets/images/order-now.png";
import skill from "../../../assets/images/skills.png";
import certificate from "../../../assets/images/certificate.png";

export default function studentNavigation() {
  const { student, isLoading } = useGetStudents();

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
              {student.photo === "null" ? (
                <div className="w-20 h-20 rounded-full bg-slate-300 animate-pulse"></div>
              ) : (
                <img
                  src={`${
                    student?.photo === null
                      ? "https://i.ibb.co/ynG5yN4H/man-beard-vector-35281418.png"
                      : student?.photo
                  }`}
                  alt=""
                  className="rounded-full w-20 border-2 border-slate-300 border-dashed"
                />
              )}
            </>
          )}

          <p className="font-semibold text-xl">{student?.name}</p>
          {/* <p className="text-[#787878]">{student?.studentId}</p>
          <p className="text-[#787878]">{student?.email}</p>
          <p className="text-[#787878]">
            {student?.phone ? student.phone : "N/A"}
          </p> */}
        </div>
      </Link>
      <ul className="my-5 flex flex-col gap-2 px-10 h-[50vh] overflow-y-auto scroll-smooth">
        <Link to="/dashboard/student-profile">
          <li className="hover:bg-slate-200 duration-500 p-2 rounded-md cursor-pointer">
            Profile
          </li>
        </Link>
        <Link to="/dashboard/student-courses">
          <li className="hover:bg-slate-200 duration-500 p-2 rounded-md cursor-pointer flex items-center gap-5">
            <img className="w-6" src={course} alt="" /> My Courses
          </li>
        </Link>
        <Link to="/dashboard/student-skillset">
          <li className="hover:bg-slate-200 duration-500 p-2 rounded-md cursor-pointer flex items-center gap-5">
            <img className="w-6" src={skill} alt="" /> My Skillset
          </li>
        </Link>
        <Link to="/dashboard/carts">
          <li className="hover:bg-slate-200 duration-500 p-2 rounded-md cursor-pointer flex items-center gap-5">
            <img className="w-6" src={cart} alt="" /> Carts
          </li>
        </Link>
        <Link to="/dashboard/order-history">
          <li className="hover:bg-slate-200 duration-500 p-2 rounded-md cursor-pointer flex items-center gap-5">
            <img className="w-6" src={order} alt="" /> Order History
          </li>
        </Link>
        <Link to="/dashboard/certificates">
          <li className="hover:bg-slate-200 duration-500 p-2 rounded-md cursor-pointer flex items-center gap-5">
            <img className="w-6" src={certificate} alt="" /> My Certificet
          </li>
        </Link>
      </ul>
    </div>
  );
}
