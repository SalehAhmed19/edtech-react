import { Outlet } from "react-router-dom";
import StudentsNavigation from "../Pages/Dashboard/Navigations/StudentsNavigation";
// import { useState } from "react";
import TeachersNavigation from "../Pages/Dashboard/Navigations/TeachersNavigation";
import { Toaster } from "react-hot-toast";

import useGetUser from "../Hooks/Users/useGetUser";
import useGetAllUsers from "../Hooks/Users/useGetAllUsers";
import StudentsDetails from "../Pages/Dashboard/Students/StudentsProfile/StudentsDetails";
import TeacherDetails from "../Pages/Dashboard/Teachers/TeacherProfile/TeacherDetails";

export default function Dashboard() {
  const { singleUser } = useGetAllUsers();
  console.log(singleUser);

  return (
    <div className="grid grid-cols-3 gap-5">
      <div className="pt-10">
        {singleUser.role === "student" && <StudentsNavigation />}
        {singleUser.role === "teacher" && <TeachersNavigation />}
      </div>
      {/* <div className="pt-10">{isAdmin && <StudentsNavigation />}</div> */}
      <div className="col-span-2 p-10">
        {/* {singleUser.role === "student" && <StudentsDetails />}
        {singleUser.role === "teacher" && <TeacherDetails />} */}
        <Outlet />
        {/* <button
          onClick={() => {
            role === "student" ? setRole("teacher") : setRole("student");
          }}
          className="bg-slate-200 px-5 py-2 rounded-md"
        >
          {role === "student"
            ? "Toggle to Teacher's Menu"
            : "Toogle to Student's Menu"}
        </button> */}
      </div>
      <Toaster />
    </div>
  );
}
