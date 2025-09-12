import { useForm } from "react-hook-form";
import bg from "../../../assets/images/whyBg.jpg";
import Divider from "../../../Components/UI/Divider";
import { Link } from "react-router-dom";
import login from "../../../assets/images/login.png";
import SocialLogin from "../SocialLogin/SocialLogin";
import useFirebaseAuthenticationHooks from "../../../Hooks/firebaseAuthenticationHooks/useFirebaseAuthenticationHooks";
import { Fade, Zoom } from "react-awesome-reveal";

export default function SignUp() {
  const { register, handleSubmit } = useForm();
  const { handleSignInEmailPassword } = useFirebaseAuthenticationHooks();

  return (
    <div className="grid grid-cols-2 place-items-center h-[90vh]">
      <div>
        <Zoom cascade={true} duration={800}>
          {" "}
          <img src={login} alt="login" />
        </Zoom>
      </div>
      <div className="flex flex-col py-20">
        <Fade direction="up" cascade={true} duration={800}>
          <h2 className="text-[45px] font-bold">
            <span className="text-primary">Sign up</span> Now
          </h2>
          <p className="text-secondary">
            Join a community of learners and unlock your potential.
          </p>

          <div className="mt-10">
            <form
              onSubmit={handleSubmit(handleSignInEmailPassword)}
              className="flex flex-col gap-3 mb-5"
            >
              <input
                {...register("name")}
                type="text"
                placeholder="Full Name"
                className="border border-gray-200 px-5 py-2 rounded-full w-full bg-white"
              />
              <input
                {...register("email")}
                type="text"
                placeholder="Write your email here"
                className="border border-gray-200 px-5 py-2 rounded-full w-full bg-white"
              />
              <input
                {...register("password")}
                type="password"
                placeholder="Write your password here"
                className="border border-gray-200 px-5 py-2 rounded-full w-full bg-white"
              />

              <button className="bg-primary px-5 py-3 rounded-full text-white font-semibold cursor-pointer">
                Sign up
              </button>
            </form>

            <SocialLogin />
            <p className="mt-5 text-center">
              Already have an account?{" "}
              <Link
                to="/authentication/login"
                className="text-primary font-semibold ml-2"
              >
                Sign in now
              </Link>
            </p>
          </div>
        </Fade>
      </div>
    </div>
  );
}
