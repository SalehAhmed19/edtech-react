import { Link } from "react-router-dom";

import { Toaster } from "react-hot-toast";
import logo from "../../../assets/images/logo.png";
import useFirebaseAuthenticationHooks from "../../../Hooks/firebaseAuthenticationHooks/useFirebaseAuthenticationHooks";
import Loader from "../../Loader/Loader";
// import useGetAllUsers from "../../../Hooks/Users/useGetAllUsers";
import useGetTeacher from "../../../Hooks/Users/useGetTeacher";
import useGetAllUsers from "../../../Hooks/Users/useGetAllUsers";
import {
  AtIcon,
  PhoneCallIcon,
  SignInIcon,
  SignOutIcon,
  UserGearIcon,
} from "@phosphor-icons/react";

export default function Navbar() {
  const { handleSignOut, user } = useFirebaseAuthenticationHooks();
  const { singleUser, isLoading } = useGetAllUsers();

  if (isLoading) {
    <div className="h-[80vh] flex justify-center items-center">
      <Loader />
    </div>;
  }

  // // console.log(teachers.role);
  // // console.log(students.role);

  return (
    <div className="sticky top-0 z-50 font-bold">
      <div className="bg-[#fff] p-2 text-[#333] sticky top-0 z-50 backdrop-blur-3xl border-b-2 border-b-gray-200">
        {" "}
        <div className="md:max-w-[1180px] lg:max-w-[1280px] mx-auto flex items-center justify-between">
          {" "}
          <Link to="/">
            {/* <h3 className="font-semibold text-xl">EdTech</h3> */}
            <img src={logo} alt="" className="w-20" />
          </Link>
          <div>
            <ul className="flex items-center gap-5">
              <Link to="/courses">
                <li className="hover:bg-[#CE2823] hover:shadow-lg hover:text-white duration-300 px-5 py-2 rounded-full cursor-pointer">
                  Courses
                </li>
              </Link>

              <Link to="/contact">
                <li className="hover:bg-[#CE2823] hover:shadow-lg hover:text-white duration-300 px-5 py-2 rounded-full cursor-pointer">
                  Contact
                </li>
              </Link>
              {user && (
                <>
                  <Link to="/become-instructor/">
                    <li
                      className={`font-semibold hover:bg-[#CE2823] hover:shadow-lg hover:text-white duration-300 px-5 py-2 rounded-full cursor-pointer ${
                        singleUser?.role === "teacher" && "hidden"
                      }`}
                    >
                      Become Instructor
                    </li>
                  </Link>

                  {singleUser?.role === "student" && (
                    <Link to="/dashboard/student-home">
                      <li className="font-semibold bg-[#CE2823] hover:shadow-lg text-white duration-300 px-5 py-2 rounded-full cursor-pointer flex items-center gap-2">
                        <UserGearIcon size={32} />
                        Student Dashboard
                      </li>
                    </Link>
                  )}
                  {singleUser?.role === "teacher" && (
                    <Link to="/dashboard/teacher-home">
                      <li className="font-semibold bg-[#CE2823] hover:shadow-lg text-white duration-300 px-5 py-2 rounded-full cursor-pointer flex items-center gap-2">
                        <UserGearIcon size={32} />
                        Teacher Dashboard
                      </li>
                    </Link>
                  )}
                </>
              )}
            </ul>
          </div>
          {user ? (
            <button
              onClick={handleSignOut}
              className="bg-[#CE2823] text-white hover:border hover:border-gray-200 hover:bg-[#fff] hover:text-[#333] duration-300 px-5 py-2 rounded-full cursor-pointer flex items-center gap-2"
            >
              <SignOutIcon size={32} />
              Sign out
            </button>
          ) : (
            <Link
              to="/authentication/login"
              className="bg-[#CE2823] text-white hover:border hover:border-gray-200 hover:bg-[#fff] hover:text-[#333] duration-300 px-5 py-2 rounded-full cursor-pointer"
            >
              <button className="flex items-center gap-2">
                <SignInIcon size={32} />
                Login
              </button>
            </Link>
          )}
        </div>
        <Toaster />
      </div>
      <div className="py-2 bg-primary text-white flex justify-between px-10">
        <p className="flex gap-2 items-center">
          <AtIcon size={32} />
          Mail us: smart.edu@outlook.com
        </p>
        <p className="flex gap-2 items-center">
          <PhoneCallIcon size={32} />
          Call us: +880 2983 393 829
        </p>
      </div>
    </div>
  );
}
