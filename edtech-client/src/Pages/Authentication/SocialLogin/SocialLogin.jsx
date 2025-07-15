import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useDispatch } from "react-redux";

import google from "../../../assets/images/google.png";
import { auth } from "../../../firebase/firebase.config";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { postStudent } from "../../../RTK/Features/UsersSlice/StudentsSlice";

export default function SocialLogin() {
  const navigate = useNavigate();
  const [signInWithGoogle, loading, error] = useSignInWithGoogle(auth);
  const dispatch = useDispatch();

  const handleGoogleSignin = async () => {
    try {
      const result = await signInWithGoogle();
      if (result) {
        navigate("/");
        toast.success("Google sign in success!");
      }
      if (result && result.user) {
        const { displayName, email, photoURL } = result.user;
        const studentId = Math.random().toString(36).substring(2, 11);
        const userInfo = {
          studentId: "ET_" + studentId,
          name: displayName,
          email: email,
          photo: photoURL,
          role: "student",
        };
        const response = await dispatch(postStudent(userInfo)).unwrap();
        console.log("User data successfully posted to DB:", response);
      } else if (error) {
        console.error("Firebase Google Sign-In Error:", error.message);
      }
    } catch (reduxError) {
      console.error("Error posting user data to Redux store:", reduxError);
    }
  };

  return (
    <button
      onClick={handleGoogleSignin}
      className="bg-white px-5 py-2 flex items-center gap-5 justify-center w-full border border-[#33349] rounded-md cursor-pointer"
      disabled={loading}
    >
      <img src={google} alt="Google logo" className="w-6" />
      {loading ? "Signing In..." : "Sign in with Google"}
    </button>
  );
}
