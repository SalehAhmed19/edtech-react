import bg from "../../../assets/images/whyBg.jpg";
import Divider from "../../../Components/UI/Divider";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import SocialLogin from "../SocialLogin/SocialLogin";

import useFirebaseAuthenticationHooks from "../../../Hooks/firebaseAuthenticationHooks/useFirebaseAuthenticationHooks";

export default function Login() {
  const { register, handleSubmit } = useForm();

  // const handleEmailLogin = async (data) => {
  //   const { email, password } = data;
  //   const result = await signInWithEmailAndPassword(email, password);
  //   if (result && result.user) {
  //     navigate("/");
  //     toast.success("Logged in successful!");
  //   }
  // };
  const { handleEmailLogin } = useFirebaseAuthenticationHooks();
  return (
    <div
      style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
      className="flex flex-col items-center py-20"
    >
      <h2 className="text-[40px] font-semibold">Sign in here!</h2>
      <p>
        Please sign in using the same email address and password <br /> with
        which you opened the account during registration.
      </p>

      <div className="w-2/6 mx-auto p-10">
        <form
          onSubmit={handleSubmit(handleEmailLogin)}
          className="flex flex-col gap-3"
        >
          <input
            {...register("email")}
            type="email"
            placeholder="Write your email here"
            className="border border-slate-300 border-dashed px-5 py-2 rounded-md w-full bg-white"
          />
          <input
            {...register("password")}
            type="password"
            placeholder="Write your password here"
            className="border border-slate-300 border-dashed px-5 py-2 rounded-md w-full bg-white"
          />

          <button className="bg-[#333] px-5 py-2 rounded-md text-white font-semibold cursor-pointer">
            Sign in
          </button>
        </form>

        <Divider />
        {/* {loading && "Signing In..."}
        {error && (
          <span className="text-red-500 text-sm ml-2">({error.message})</span>
        )} */}

        <SocialLogin />

        <p className="mt-5 text-center">
          New to EdTech?{" "}
          <Link
            to="/authentication/signup"
            className="text-[#333] font-semibold ml-2"
          >
            Sign up now
          </Link>
        </p>
      </div>
      {/* <Toaster /> */}
    </div>
  );
}
