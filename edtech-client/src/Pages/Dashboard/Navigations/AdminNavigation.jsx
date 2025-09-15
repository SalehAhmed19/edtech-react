import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo-invert.png";

import {
  BasketIcon,
  BookIcon,
  BooksIcon,
  CaretDownIcon,
  CaretUpIcon,
  CertificateIcon,
  ClockCounterClockwiseIcon,
  ListPlusIcon,
  PresentationChartIcon,
  UsersFourIcon,
} from "@phosphor-icons/react";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";

export default function AdminNavigation() {
  const [active, setActive] = useState(false);
  console.log(active);
  return (
    <div className="rounded-md bg-primary text-white h-[90vh] place-content-center">
      <Link to="/">
        <div className="py-5">
          <img src={logo} className="w-36 mx-auto" alt="" />
        </div>
      </Link>

      <ul className="my-5 flex flex-col gap-2 px-10 h-[50vh] overflow-y-auto scroll-smooth font-bold">
        <Link to="/control-panel/secure/admin">
          <li className="hover:bg-red-700 duration-300 p-2 rounded-md cursor-pointer flex items-center gap-5">
            <PresentationChartIcon size={32} className="" /> Dashboard
          </li>
        </Link>

        <li>
          <button
            onClick={() => setActive(!active)}
            className="hover:bg-red-700 duration-300 p-2 rounded-md cursor-pointer flex items-center gap-5 w-full"
          >
            <BookIcon size={32} className="" />
            Manage Courses{" "}
            <CaretDownIcon
              size={22}
              className={`${active ? "hidden" : "block"}`}
            />
            <CaretUpIcon
              size={22}
              className={`${active ? "block" : "hidden"}`}
            />
          </button>

          <div
            className={`${
              active ? "block bg-red-700 rounded-md ml-3" : "hidden"
            }`}
          >
            <Fade direction="down" cascade={true} duration={300}>
              <Link
                to="/control-panel/secure/admin/view-all-courses"
                className="hover:bg-red-800 duration-300 p-2 rounded-md cursor-pointer flex items-center gap-5"
              >
                <BooksIcon size={32} className="" />
                All Courses
              </Link>
              <Link
                to="/control-panel/secure/admin/add-course"
                className="hover:bg-red-800 duration-300 p-2 rounded-md cursor-pointer flex items-center gap-5"
              >
                <ListPlusIcon size={32} className="" />
                Add New Course
              </Link>
            </Fade>
          </div>
        </li>

        <Link to="/control-panel/secure/admin/view-all-users">
          <li className="hover:bg-red-700 duration-300 p-2 rounded-md cursor-pointer flex items-center gap-5">
            <UsersFourIcon size={32} className="" />
            All Users
          </li>
        </Link>

        <Link to="/control-panel/secure/admin/view-all-orders">
          <li className="hover:bg-red-700 duration-300 p-2 rounded-md cursor-pointer flex items-center gap-5">
            <ClockCounterClockwiseIcon size={32} className="" /> All Orders
          </li>
        </Link>
        <Link to="/control-panel/secure/admin">
          <li className="hover:bg-red-700 duration-300 p-2 rounded-md cursor-pointer flex items-center gap-5">
            <CertificateIcon size={32} className="" /> Certificets
          </li>
        </Link>
      </ul>
    </div>
  );
}
