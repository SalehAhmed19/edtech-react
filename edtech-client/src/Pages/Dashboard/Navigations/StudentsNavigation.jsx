import { Link } from "react-router-dom";
import useGetStudent from "../../../Hooks/Users/useGetStudent";
import AvatarSkeleton from "../../../Components/UI/AvatarSkeleton/AvatarSkeleton";

export default function StudentsNavigation() {
  const { students } = useGetStudent();
  console.log(students);
  return (
    <div className="rounded-md shadow h-screen bg-slate-100">
      <Link to="/">
        <div className="py-5">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/007/092/484/small_2x/education-technology-logo-design-vector.jpg"
            className="w-20 mx-auto"
            alt=""
          />
          <h3 className="text-center font-bold">EdTech</h3>
        </div>
      </Link>

      <Link to="/dashboard">
        <div className="border-t border-b border-[#0000001b] p-3 flex flex-col gap-1 items-center">
          <img
            src={`${students?.photo}`}
            alt={students?.name}
            className="rounded-full w-20 border-3 border-slate-300"
          />

          <p className="font-semibold text-xl">{students?.name}</p>
          <p className="text-[#787878]">{students?.studentId}</p>
          <p className="text-[#787878]">{students?.email}</p>
          <p className="text-[#787878]">
            {students?.phone ? students.phone : "N/A"}
          </p>
        </div>
      </Link>
      <ul className="my-5 flex flex-col gap-2 px-10">
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
