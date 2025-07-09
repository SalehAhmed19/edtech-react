import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-[#fc5a57] p-5 text-white sticky top-0 z-50">
      {" "}
      <div className="md:max-w-[1280px] lg:max-w-[1440px] mx-auto flex items-center justify-between">
        {" "}
        <h3 className="font-semibold text-xl">EdTech</h3>
        <div>
          <ul className="flex items-center gap-5">
            <li>Course</li>
            <li>About Us</li>
            <li>Contact</li>
            <Link to="/authentication/login">
              <button className="bg-white text-black px-5 py-2 rounded-md cursor-pointer">
                Login
              </button>
            </Link>
          </ul>
        </div>
      </div>{" "}
    </div>
  );
}
