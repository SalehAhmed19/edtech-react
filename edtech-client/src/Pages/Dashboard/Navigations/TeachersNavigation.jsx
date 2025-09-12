import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import useGetTeacher from "../../../Hooks/Users/useGetTeacher";
import {
  ArticleIcon,
  HeadsetIcon,
  NotebookIcon,
  PencilSimpleLineIcon,
  PresentationChartIcon,
  UserIcon,
} from "@phosphor-icons/react";
import LoadingSpinner from "../../../Components/UI/LoadingSpinner";

export default function TeachersNavigation() {
  const { teacher, isLoading } = useGetTeacher();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="rounded-md">
      <Link to="/">
        <div className="py-5">
          <img src={logo} className="w-36 mx-auto" alt="" />
        </div>
      </Link>

      <ul className="my-5 flex flex-col gap-2 px-10 h-[50vh] overflow-y-auto scroll-smooth">
        <Link to="/dashboard/teacher-home">
          <li className="hover:bg-gray-50 duration-300 p-2 rounded-md cursor-pointer flex items-center gap-5">
            <PresentationChartIcon size={32} className="text-primary" />{" "}
            Dashboard
          </li>
        </Link>
        <Link to="/dashboard/teacher-profile">
          <li className="hover:bg-gray-50 duration-300 p-2 rounded-md cursor-pointer flex items-center gap-5">
            <UserIcon size={32} className="text-primary" /> Profile
          </li>
        </Link>

        <Link to="/dashboard/student-review">
          <li className="hover:bg-gray-50 duration-300 p-2 rounded-md cursor-pointer flex items-center gap-5">
            <PencilSimpleLineIcon size={32} className="text-primary" /> Students
            Review
          </li>
        </Link>
        <Link to="/dashboard/assignments">
          <li className="hover:bg-gray-50 duration-300 p-2 rounded-md cursor-pointer flex items-center gap-5">
            <ArticleIcon size={32} className="text-primary" /> Assignments
          </li>
        </Link>
        <Link to="/dashboard/resources">
          <li className="hover:bg-gray-50 duration-300 p-2 rounded-md cursor-pointer flex items-center gap-5">
            <NotebookIcon size={32} className="text-primary" /> Resourses
          </li>
        </Link>
        <Link to="/dashboard/support">
          <li className="hover:bg-gray-50 duration-300 p-2 rounded-md cursor-pointer flex items-center gap-5">
            <HeadsetIcon size={32} className="text-primary" /> Support
          </li>
        </Link>
      </ul>
    </div>
  );
}
