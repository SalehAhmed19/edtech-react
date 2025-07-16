import { useForm } from "react-hook-form";
import bg from "../../../assets/images/whyBg.jpg";
import Divider from "../../../Components/UI/Divider";
import { Link } from "react-router-dom";

import SocialLogin from "../SocialLogin/SocialLogin";
import useFirebaseAuthenticationHooks from "../../../Hooks/firebaseAuthenticationHooks/useFirebaseAuthenticationHooks";

export default function SignUp() {
  const { register, handleSubmit } = useForm();
  const { handleSignInEmailPassword } = useFirebaseAuthenticationHooks();

  return (
    <div
      style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
      className="flex flex-col items-center py-20"
    >
      <h2 className="text-[40px] font-semibold">Create an account!</h2>
      <p>Please sign up using your name, email address and password</p>

      <div className="w-2/6 mx-auto p-10">
        <form
          onSubmit={handleSubmit(handleSignInEmailPassword)}
          className="flex flex-col gap-3"
        >
          <input
            {...register("name")}
            type="text"
            placeholder="Full Name"
            className="border border-[#333] px-5 py-2 rounded-md w-full bg-white"
          />
          <input
            {...register("email")}
            type="text"
            placeholder="Write your email here"
            className="border border-[#333] px-5 py-2 rounded-md w-full bg-white"
          />
          <input
            {...register("password")}
            type="password"
            placeholder="Write your password here"
            className="border border-[#333] px-5 py-2 rounded-md w-full bg-white"
          />

          <button className="bg-[#333] px-5 py-2 rounded-md text-white font-semibold cursor-pointer">
            Sign in
          </button>
        </form>
        <Divider />
        <SocialLogin />
        <p className="mt-5 text-center">
          Already have an account?{" "}
          <Link
            to="/authentication/login"
            className="text-[#333] font-semibold ml-2"
          >
            Sign in now
          </Link>
        </p>
      </div>
    </div>
  );
}
