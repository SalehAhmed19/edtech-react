import { Link } from "react-router-dom";

export default function TeachersNavigation() {
  return (
    <div className="rounded-md shadow min-h-[90vh] bg-slate-100">
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
        <div className="border-t border-b border-[#0000001b] p-3 flex gap-5 items-center">
          <img
            src="https://lumiere-a.akamaihd.net/v1/images/a_avatarpandorapedia_neytiri_16x9_1098_01_0e7d844a.jpeg?region=420%2C0%2C1080%2C1080"
            alt=""
            className="rounded-full w-16"
          />
          <p>
            Welcome, <span className="font-semibold">Student Name</span>
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
            Students Review
          </li>
        </Link>
        <Link to="/dashboard/student-skillset">
          <li className="hover:bg-slate-200 duration-500 p-2 rounded-md cursor-pointer">
            Assignments
          </li>
        </Link>
        <Link to="/dashboard/order-history">
          <li className="hover:bg-slate-200 duration-500 p-2 rounded-md cursor-pointer">
            Resourses
          </li>
        </Link>
        <Link to="/dashboard/certificates">
          <li className="hover:bg-slate-200 duration-500 p-2 rounded-md cursor-pointer">
            Support
          </li>
        </Link>
      </ul>
    </div>
  );
}
