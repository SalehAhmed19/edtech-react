import { Outlet } from "react-router-dom";
import StudentsNavigation from "../Pages/Dashboard/Navigations/StudentsNavigation";
import { useState } from "react";
import TeachersNavigation from "../Pages/Dashboard/Navigations/TeachersNavigation";

export default function Dashboard() {
  const [role, setRole] = useState("student");

  return (
    <div className="grid grid-cols-3 gap-5">
      <div className="pt-10">
        {role === "student" && <StudentsNavigation />}
        {role === "teacher" && <TeachersNavigation />}
      </div>
      {/* <div className="pt-10">{isAdmin && <StudentsNavigation />}</div> */}
      <div className="col-span-2 p-10">
        <Outlet />
        <button
          onClick={() => {
            role === "student" ? setRole("teacher") : setRole("student");
          }}
          className="bg-slate-200 px-5 py-2 rounded-md"
        >
          {role === "student"
            ? "Toggle to Teacher's Menu"
            : "Toogle to Student's Menu"}
        </button>
      </div>
    </div>
  );
}
