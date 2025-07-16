import { Link } from "react-router-dom";
import useGetStudent from "../../../Hooks/Users/useGetStudent";
import logo from "../../../assets/images/logo.png";

export default function StudentsNavigation() {
  const { students, isLoading } = useGetStudent();
  // console.log(students);
  return (
    <div className="rounded-md shadow h-screen bg-slate-100">
      <Link to="/">
        <div className="py-5">
          <img src={logo} className="w-20 mx-auto" alt="" />
        </div>
      </Link>

      <Link to="/dashboard">
        <div className="border-t border-b border-slate-300 p-3 flex flex-col gap-1 items-center">
          {isLoading ? (
            <div className="w-20 h-20 rounded-full bg-slate-300 animate-pulse"></div>
          ) : (
            <>
              {students.photo === "" ? (
                <div className="w-20 h-20 rounded-full bg-slate-300 animate-pulse"></div>
              ) : (
                <img
                  src={`${students?.photo}`}
                  alt=""
                  className="rounded-full w-20 border-2 border-slate-300 border-dashed"
                />
              )}
            </>
          )}

          <p className="font-semibold text-xl">{students?.name}</p>
          <p className="text-[#787878]">{students?.studentId}</p>
          <p className="text-[#787878]">{students?.email}</p>
          <p className="text-[#787878]">
            {students?.phone ? students.phone : "N/A"}
          </p>
        </div>
      </Link>
      <ul className="my-5 flex flex-col gap-2 px-10 h-[30vh] overflow-y-auto scroll-smooth border-b border-dashed border-slate-300">
        <Link to="/dashboard/student-profile">
          <li className="hover:bg-slate-200 duration-500 p-2 rounded-md cursor-pointer">
            Profile
          </li>
        </Link>
        <Link to="/dashboard/student-courses">
          <li className="hover:bg-slate-200 duration-500 p-2 rounded-md cursor-pointer">
            My Courses
          </li>
        </Link>
        <Link to="/dashboard/student-skillset">
          <li className="hover:bg-slate-200 duration-500 p-2 rounded-md cursor-pointer">
            My Skillset
          </li>
        </Link>
        <Link to="/dashboard/carts">
          <li className="hover:bg-slate-200 duration-500 p-2 rounded-md cursor-pointer">
            Carts
          </li>
        </Link>
        <Link to="/dashboard/order-history">
          <li className="hover:bg-slate-200 duration-500 p-2 rounded-md cursor-pointer">
            Order History
          </li>
        </Link>
        <Link to="/dashboard/certificates">
          <li className="hover:bg-slate-200 duration-500 p-2 rounded-md cursor-pointer">
            My Certificet
          </li>
        </Link>
      </ul>
    </div>
  );
}
