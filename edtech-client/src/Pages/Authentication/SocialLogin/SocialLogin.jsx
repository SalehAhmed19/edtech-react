import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useDispatch } from "react-redux";

import google from "../../../assets/images/google.png";
import { auth } from "../../../firebase/firebase.config";
import { postUsers } from "../../../RTK/Features/UsersSlice/UsersSlice";

export default function SocialLogin() {
  const [signInWithGoogle, loading, error] = useSignInWithGoogle(auth);
  const dispatch = useDispatch();

  const handleGoogleSignin = async () => {
    try {
      const result = await signInWithGoogle();
      if (result && result.user) {
        const { displayName, email, photoURL } = result.user;
        const userInfo = {
          name: displayName,
          email: email,
          photo: photoURL,
        };
        const actionResult = await dispatch(postUsers(userInfo)).unwrap();
        console.log("User data successfully posted to DB:", actionResult);
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
      className="bg-white px-5 py-2 flex items-center gap-5 justify-center w-full border border-[#fc5a5749] rounded-md cursor-pointer"
      disabled={loading}
    >
      <img src={google} alt="Google logo" className="w-6" />
      {loading ? "Signing In..." : "Sign in with Google"}
      {error && (
        <span className="text-red-500 text-sm ml-2">({error.message})</span>
      )}
    </button>
  );
}
