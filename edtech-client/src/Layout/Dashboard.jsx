import { Outlet } from "react-router-dom";
import StudentsNavigation from "../Pages/Dashboard/Navigations/StudentsNavigation";
// import { useState } from "react";
import TeachersNavigation from "../Pages/Dashboard/Navigations/TeachersNavigation";
import { Toaster } from "react-hot-toast";

import useGetAllUsers from "../Hooks/Users/useGetAllUsers";
import StudentsDetails from "../Pages/Dashboard/Students/StudentsProfile/StudentsDetails";
import TeacherDetails from "../Pages/Dashboard/Teachers/TeacherProfile/TeacherDetails";
import { useState } from "react";
import { TextIndentIcon, TextOutdentIcon } from "@phosphor-icons/react";

export default function Dashboard() {
  const [active, setActive] = useState(false);
  const { singleUser } = useGetAllUsers();
  // console.log({ singleUser });
  const handleShowMenu = () => {
    setActive(!active);
  };

  return (
    <div className="flex md:gap-5 w-full">
      <div className="md:pt-10 relative">
        <button
          onClick={handleShowMenu}
          className="text-primary md:mx-5 absolute z-50 p-5"
        >
          <TextIndentIcon
            size={32}
            className={`${active ? "hidden" : "block"}`}
          />{" "}
          <TextOutdentIcon
            size={32}
            className={`${active ? "block" : "hidden"}`}
          />
        </button>
        {singleUser?.role === "student" && (
          <StudentsNavigation active={active} />
        )}
        {singleUser?.role === "teacher" && <TeachersNavigation />}
      </div>

      <div className="md:p-10 mt-20 w-full">
        <Outlet />
      </div>
      <Toaster />
    </div>
  );
}
