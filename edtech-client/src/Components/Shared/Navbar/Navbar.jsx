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
    <div className="bg-[#333] p-5 text-white sticky top-0 z-50">
      {" "}
      <div className="md:max-w-[1280px] lg:max-w-[1440px] mx-auto flex items-center justify-between">
        {" "}
        <h3 className="font-semibold text-xl">EdTech</h3>
        <div>
          <ul className="flex items-center gap-5">
            <li>
              <Link to="/courses">Course</Link>
            </li>
            <li>About Us</li>
            <li>Contact</li>
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
          </ul>
        </div>
      </div>
      <Toaster />
    </div>
  );
}
