import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import bg from "../../../assets/images/whyBg.jpg";
import Divider from "../../../Components/UI/Divider";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase/firebase.config";
import SocialLogin from "../SocialLogin/SocialLogin";
import { postStudent } from "../../../RTK/Features/UsersSlice/StudentsSlice";

export default function SignUp() {
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, error] =
    useCreateUserWithEmailAndPassword(auth);
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();
  const handleSignInEmailPassword = async (data) => {
    const { email, password } = data;
    const result = await createUserWithEmailAndPassword(email, password);

    try {
      if (result && result.user) {
        const { email, photoURL } = result.user;
        const studentId = Math.random().toString(36).substring(2, 11);
        const userInfo = {
          studentId: "ET_" + studentId,
          name: data.name,
          email: email,
          photo: photoURL,
          role: "student",
        };

        const response = await dispatch(postStudent(userInfo)).unwrap();
        console.log("User data successfully posted to DB:", response);
        reset();
        navigate("/");
        toast.success("Sign up success!");
      } else {
        console.error("User creation by email and pass Error:", error);
      }
    } catch (reduxError) {
      console.error("Error posting user data to Redux store:", reduxError);
    }
  };

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
