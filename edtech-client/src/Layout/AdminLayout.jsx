import { Outlet } from "react-router-dom";
import AdminNavigation from "../Pages/Dashboard/Navigations/AdminNavigation";

export default function AdminLayout() {
  return (
    <div className="grid grid-cols-5 gap-5">
      <div className="pt-10">
        <AdminNavigation />
      </div>

      <div className="col-span-4 p-10">
        <Outlet />
      </div>
    </div>
  );
}
