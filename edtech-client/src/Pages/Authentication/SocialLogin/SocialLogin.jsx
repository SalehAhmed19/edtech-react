import google from "../../../assets/images/google.png";

import useFirebaseAuthenticationHooks from "../../../Hooks/firebaseAuthenticationHooks/useFirebaseAuthenticationHooks";

export default function SocialLogin() {
  const { handleGoogleSignin } = useFirebaseAuthenticationHooks();

  return (
    <button
      onClick={handleGoogleSignin}
      className="bg-white px-5 py-2 flex items-center gap-5 justify-center w-full border border-slate-300 border-dashed rounded-md cursor-pointer"
      // disabled={loading}
    >
      <img src={google} alt="Google logo" className="w-6" />
      {/* {loading ? "Signing In..." : "Sign in with Google"} */}
    </button>
  );
}
