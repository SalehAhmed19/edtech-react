import {
  KeyholeIcon,
  SignInIcon,
  SignOutIcon,
  UserGearIcon,
} from "@phosphor-icons/react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

export default function MobileMenu({
  active,
  user,
  singleUser,
  handleSignOut,
}) {
  return (
    <div className={`${active ? "block py-5 bg-white" : "hidden"}`}>
      <Fade direction="down" cascade={true} duration={800}>
        <ul className="flex flex-col justify-center gap-5">
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
          {user && singleUser?.role !== "admin" && (
            <div className="flex flex-col gap-5">
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
                  <li className="font-semibold hover:shadow-lg text-primary duration-300 px-5 py-2 rounded-full cursor-pointer flex items-center gap-2">
                    <UserGearIcon size={32} />
                    Student Dashboard
                  </li>
                </Link>
              )}
              {singleUser?.role === "teacher" && (
                <Link to="/dashboard/teacher-home">
                  <li className="font-semibold hover:shadow-lg text-primary duration-300 px-5 py-2 rounded-full cursor-pointer flex items-center gap-2">
                    <UserGearIcon size={32} />
                    Teacher Dashboard
                  </li>
                </Link>
              )}
            </div>
          )}
          {user && singleUser?.role === "admin" && (
            <>
              <Link to="/control-panel/secure/admin">
                <li className="font-semibold hover:shadow-lg text-primary duration-300 px-5 py-2 rounded-full cursor-pointer flex items-center gap-2">
                  <KeyholeIcon size={32} />
                  Admin Panel
                </li>
              </Link>
            </>
          )}
          {user ? (
            <button
              onClick={handleSignOut}
              className="text-primary hover:border hover:border-gray-200 hover:bg-[#fff] hover:text-[#333] duration-300 px-5 py-2 rounded-full cursor-pointer flex items-center gap-2"
            >
              <SignOutIcon size={32} />
              Sign out
            </button>
          ) : (
            <Link
              to="/authentication/login"
              className="text-primary hover:border hover:border-gray-200 hover:bg-[#fff] hover:text-[#333] duration-300 px-5 py-2 rounded-full cursor-pointer"
            >
              <button className="flex items-center gap-2">
                <SignInIcon size={32} />
                Login
              </button>
            </Link>
          )}
        </ul>
      </Fade>
    </div>
  );
}
