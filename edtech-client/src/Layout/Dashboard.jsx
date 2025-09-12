import { Outlet } from "react-router-dom";
import StudentsNavigation from "../Pages/Dashboard/Navigations/StudentsNavigation";
// import { useState } from "react";
import TeachersNavigation from "../Pages/Dashboard/Navigations/TeachersNavigation";
import { Toaster } from "react-hot-toast";

import useGetAllUsers from "../Hooks/Users/useGetAllUsers";
import StudentsDetails from "../Pages/Dashboard/Students/StudentsProfile/StudentsDetails";
import TeacherDetails from "../Pages/Dashboard/Teachers/TeacherProfile/TeacherDetails";

export default function Dashboard() {
  const { singleUser } = useGetAllUsers();
  // console.log({ singleUser });

  return (
    <div className="grid grid-cols-5 gap-5">
      <div className="pt-10">
        {singleUser?.role === "student" && <StudentsNavigation />}
        {singleUser?.role === "teacher" && <TeachersNavigation />}
      </div>

      <div className="col-span-4 p-10">
        <Outlet />
      </div>
      <Toaster />
    </div>
  );
}
