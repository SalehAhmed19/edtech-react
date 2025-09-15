import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";

import {
  BasketIcon,
  BooksIcon,
  CertificateIcon,
  ClockCounterClockwiseIcon,
  PersonSimpleHikeIcon,
  PresentationChartIcon,
  TextIndentIcon,
  TextOutdentIcon,
  UserIcon,
} from "@phosphor-icons/react";
import useGetOrders from "../../../Hooks/Students/useGetOrders";
import useGetCarts from "../../../Hooks/Students/useGetCarts";
import useGetSkills from "../../../Hooks/Students/useGetSkills";
import useEnrolledCourses from "../../../Hooks/Students/useEnrolledCourses";
import LoadingSpinner from "../../../Components/UI/LoadingSpinner";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";

export default function studentNavigation({ active }) {
  const { orders } = useGetOrders();
  const { carts } = useGetCarts();
  const { skills } = useGetSkills();
  const { enrolled, isLoading } = useEnrolledCourses();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <LoadingSpinner />
      </div>
    );
  }
  const enrolledCourse = enrolled[0]?.carts;

  return (
    <div
      className={`rounded-md absolute z-10 bg-white h-screen shadow-xl ${
        active ? "block" : "hidden"
      }`}
    >
      <Link to="/">
        <div className="py-5">
          <Fade direction="up" cascade={true} duration={800}>
            <img src={logo} className="w-10 md:w-36 mx-auto" alt="" />
          </Fade>
        </div>
      </Link>
      <Fade direction="left" cascade={true} duration={800}>
        <ul
          className={`flex flex-col gap-2 px-10 h-[50vh] overflow-y-auto scroll-smooth`}
        >
          <Link to="/dashboard/student-home">
            <li className="hover:bg-gray-50 duration-300 p-2 rounded-md cursor-pointer flex items-center gap-5">
              <PresentationChartIcon size={32} className="text-primary" />{" "}
              Dashboard
            </li>
          </Link>
          <Link to="/dashboard/student-profile">
            <li className="hover:bg-gray-50 duration-300 p-2 rounded-md cursor-pointer flex items-center gap-5">
              <UserIcon size={32} className="text-primary" /> Profile
            </li>
          </Link>
          <Link to="/dashboard/student-courses">
            <li className="hover:bg-gray-50 duration-300 p-2 rounded-md cursor-pointer flex items-center gap-5">
              <BooksIcon size={32} className="text-primary" /> Courses
              <span
                className={`bg-primary h-5 w-5 p-3 flex justify-center items-center text-white rounded-full text-sm ${
                  !enrolledCourse?.length && "hidden"
                }`}
              >
                {enrolledCourse?.length}
              </span>
            </li>
          </Link>
          <Link to="/dashboard/student-skillset">
            <li className="hover:bg-gray-50 duration-300 p-2 rounded-md cursor-pointer flex items-center gap-5">
              <PersonSimpleHikeIcon size={32} className="text-primary" />
              Skillset{" "}
              <span
                className={`bg-primary h-5 w-5 p-3 flex justify-center items-center text-white rounded-full text-sm ${
                  !skills?.length && "hidden"
                }`}
              >
                {skills[0]?.skills?.length}
              </span>
            </li>
          </Link>
          <Link to="/dashboard/carts">
            <li className="hover:bg-gray-50 duration-300 p-2 rounded-md cursor-pointer flex items-center gap-5">
              <BasketIcon size={32} className="text-primary" /> Carts{" "}
              <span
                className={`bg-primary h-5 w-5 p-3 flex justify-center items-center text-white rounded-full text-sm ${
                  !carts?.length && "hidden"
                }`}
              >
                {carts?.length}
              </span>
            </li>
          </Link>
          <Link to="/dashboard/order-history">
            <li className="hover:bg-gray-50 duration-300 p-2 rounded-md cursor-pointer flex items-center gap-5">
              <ClockCounterClockwiseIcon size={32} className="text-primary" />{" "}
              Order History
              <span
                className={`bg-primary p-1 flex justify-center items-center text-white rounded-full text-sm ${
                  !orders?.length && "hidden"
                }`}
              ></span>
            </li>
          </Link>
          <Link to="/dashboard/certificates">
            <li className="hover:bg-gray-50 duration-300 p-2 rounded-md cursor-pointer flex items-center gap-5">
              <CertificateIcon size={32} className="text-primary" /> Certificets
            </li>
          </Link>
        </ul>
      </Fade>
    </div>
  );
}
