import { useForm } from "react-hook-form";

import bg from "../../../assets/images/whyBg.jpg";
import google from "../../../assets/images/google.png";
import Divider from "../../../Components/UI/Divider";
import { Link } from "react-router-dom";

export default function SignUp() {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div
      style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
      className="flex flex-col items-center py-20"
    >
      <h2 className="text-[40px] font-semibold">Create an account!</h2>
      <p>Please sign up using your name, email address and password</p>

      <div className="w-2/6 mx-auto p-10">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
          <input
            {...register("name")}
            type="text"
            placeholder="Full Name"
            className="border border-[#FC5957] px-5 py-2 rounded-md w-full bg-white"
          />
          <input
            {...register("email")}
            type="text"
            placeholder="Write your email here"
            className="border border-[#FC5957] px-5 py-2 rounded-md w-full bg-white"
          />
          <input
            {...register("password")}
            type="password"
            placeholder="Write your password here"
            className="border border-[#FC5957] px-5 py-2 rounded-md w-full bg-white"
          />

          <button className="bg-[#FC5957] px-5 py-2 rounded-md text-white font-semibold cursor-pointer">
            Sign in
          </button>
        </form>

        <Divider />

        <button className="bg-white px-5 py-2 flex items-center gap-5 justify-center w-full border border-[#fc5a5749] rounded-md cursor-pointer">
          <img src={google} alt="" className="w-6" /> Sign in with Google
        </button>

        <p className="mt-5 text-center">
          Already have an account?{" "}
          <Link
            to="/authentication/login"
            className="text-[#FC5957] font-semibold ml-2"
          >
            Sign in now
          </Link>
        </p>
      </div>
    </div>
  );
}
