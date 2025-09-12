import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Divider from "../UI/Divider";
import { useDispatch } from "react-redux";
import {
  getTeacher,
  postTeacher,
} from "../../RTK/Features/UsersSlice/TeacherSlice";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase.config";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../Hooks/Axios/useAxiosPublic";

export default function TeacherForm() {
  const axiosPublic = useAxiosPublic();
  const [user] = useAuthState(auth);
  const email = user?.email;
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const teacherId = Math.random().toString(36).substring(2, 11);
  const onSubmit = async (data) => {
    const teacher = {
      teacherId: "ET.T_" + teacherId,
      name: data.name,
      email: email,
      phone: data.phone,
      address: {
        street: data.address,
        city: data.city,
        postal: data.postal,
      },
      resume: data.resume,
      role: data.role,
    };

    // console.log(teacher);
    const response = await dispatch(postTeacher({ teacher, axiosPublic }));
    if (response) {
      await dispatch(getTeacher({ email, axiosPublic }));
    }
    // console.log({ response });
    navigate("/");
    toast.success("You're teacher now!");
    reset();
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 mt-3 "
    >
      <div>
        <label className="font-semibold">
          Full Name{" "}
          <span className="text-[#787878] text-xs font-normal">
            (As per NID)
          </span>
        </label>
        <input
          {...register("name")}
          type="text"
          placeholder="Your Name"
          className="border border-gray-200 w-full rounded-full px-5 py-3 mt-2"
        />
      </div>
      {/*  */}
      <div>
        <label className="font-semibold">Phone</label>
        <input
          {...register("phone")}
          type="phone"
          placeholder="Your Phone"
          className="border border-gray-200 w-full rounded-full px-5 py-3 mt-2"
        />
      </div>
      {/*  */}
      <div>
        <Divider text={"Address"} />
        <label className="font-semibold text-center">Address</label>
        <input
          {...register("address")}
          type="address"
          placeholder="Your Address"
          className="border border-gray-200 w-full rounded-full px-5 py-3 mt-2"
        />
      </div>
      {/*  */}
      <div className="grid grid-cols-2 gap-5 w-full">
        <div>
          <label className="font-semibold text-center">City</label>
          <input
            {...register("city")}
            type="address"
            placeholder="City"
            className="border border-gray-200 w-full rounded-full px-5 py-3 mt-2"
          />
        </div>
        {/*  */}
        <div>
          <label className="font-semibold text-center">Postal Code</label>
          <input
            {...register("postal")}
            type="address"
            placeholder="Postal Code (Ex: 5840)"
            className="border border-gray-200 w-full rounded-full px-5 py-3 mt-2"
          />
        </div>
      </div>
      {/*  */}
      <div>
        <label className="font-semibold text-center">
          Your Resume{" "}
          <span className="text-[#787878] text-xs font-normal">
            (Google Drive Link)
          </span>
        </label>
        <input
          {...register("resume")}
          type="address"
          placeholder="Drive Link (Ex: https://drive.google.com/file/d/FILE_ID/view)"
          className="border border-gray-200 w-full rounded-full px-5 py-3 mt-2"
        />
      </div>
      <input
        {...register("role")}
        type="text"
        value={"teacher"}
        className="hidden"
      />

      <button className="bg-primary px-5 py-3 rounded-full text-white">
        Submit
      </button>
    </form>
  );
}
