import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth } from "../../../firebase/firebase.config";
import toast, { Toaster } from "react-hot-toast";

export default function Navbar() {
  const [user] = useAuthState(auth);
  const [signOut, loading, error] = useSignOut(auth);
  const handleSignOut = async () => {
    const signout = await signOut();
    if (signout) {
      toast.success("You're signed out!");
    }
  };
  return (
    <div className="bg-[#33333310] p-5 text-[#333] sticky top-0 z-50 backdrop-blur-3xl">
      {" "}
      <div className="md:max-w-[1180px] lg:max-w-[1280px] mx-auto flex items-center justify-between">
        {" "}
        <Link to="/">
          <h3 className="font-semibold text-xl">EdTech</h3>
        </Link>
        <div>
          <ul className="flex items-center gap-5">
            <li>
              <Link to="/courses">Course</Link>
            </li>
            <li>About Us</li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/dashboard/student">Contact</Link>
            </li>
          </ul>
        </div>
        {user ? (
          <button
            onClick={handleSignOut}
            className="bg-white text-black px-5 py-2 rounded-md cursor-pointer"
          >
            Sign out
          </button>
        ) : (
          <Link to="/authentication/login">
            <button className="bg-white text-black px-5 py-2 rounded-md cursor-pointer">
              Login
            </button>
          </Link>
        )}
      </div>
      <Toaster />
    </div>
  );
}
