import { Outlet } from "react-router-dom";
import StudentsNavigation from "../Pages/Dashboard/Navigations/StudentsNavigation";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-3 gap-5">
      <div className="pt-10">
        <StudentsNavigation />
      </div>
      <div className="col-span-2 p-10">
        <Outlet />
      </div>
    </div>
  );
}
