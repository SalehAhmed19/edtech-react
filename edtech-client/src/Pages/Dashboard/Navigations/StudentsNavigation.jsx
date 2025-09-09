import { Link } from "react-router-dom";
import useGetStudents from "../../../Hooks/Users/useGetStudent";
import logo from "../../../assets/images/logo.png";
import profile from "../../../assets/images/user.png";
import course from "../../../assets/images/online-learning.png";
import cart from "../../../assets/images/shopping-cart.png";
import order from "../../../assets/images/order-now.png";
import skill from "../../../assets/images/skills.png";
import certificate from "../../../assets/images/certificate.png";
import {
  BasketIcon,
  BooksIcon,
  CertificateIcon,
  ClockCounterClockwiseIcon,
  PersonSimpleHikeIcon,
  PresentationChartIcon,
  UserIcon,
} from "@phosphor-icons/react";
import useGetOrders from "../../../Hooks/Students/useGetOrders";
import useGetCarts from "../../../Hooks/Students/useGetCarts";

export default function studentNavigation() {
  const { orders } = useGetOrders();
  const { carts } = useGetCarts();
  return (
    <div className="rounded-md">
      <Link to="/">
        <div className="py-5">
          <img src={logo} className="w-36 mx-auto" alt="" />
        </div>
      </Link>

      <ul className="my-5 flex flex-col gap-2 px-10 h-[50vh] overflow-y-auto scroll-smooth">
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
                !orders[0]?.carts.length && "hidden"
              }`}
            >
              {orders[0]?.carts.length}
            </span>
          </li>
        </Link>
        <Link to="/dashboard/student-skillset">
          <li className="hover:bg-gray-50 duration-300 p-2 rounded-md cursor-pointer flex items-center gap-5">
            <PersonSimpleHikeIcon size={32} className="text-primary" />
            Skillset
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
              className={`bg-primary h-5 w-5 p-3 flex justify-center items-center text-white rounded-full text-sm ${
                !orders?.length && "hidden"
              }`}
            >
              {orders?.length}
            </span>
          </li>
        </Link>
        <Link to="/dashboard/certificates">
          <li className="hover:bg-gray-50 duration-300 p-2 rounded-md cursor-pointer flex items-center gap-5">
            <CertificateIcon size={32} className="text-primary" /> Certificets
          </li>
        </Link>
      </ul>
    </div>
  );
}
