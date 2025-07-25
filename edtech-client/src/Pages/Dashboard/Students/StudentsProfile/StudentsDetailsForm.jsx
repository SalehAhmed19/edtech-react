import React from "react";
import { useForm } from "react-hook-form";
import PhotoUpload from "../../../../Components/UI/PhotoUpload";
import toast from "react-hot-toast";

export default function StudentsDetailsForm({ onClose }) {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    toast.success("Profile updated!");
    reset();
    onClose();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <div>
        <label className="font-semibold">Phone</label>
        <input
          {...register("phone")}
          type="text"
          placeholder="Phone number"
          className="border border-slate-300 border-dashed w-full rounded-md px-5 py-3 mt-2 bg-white"
        />
      </div>

      <div>
        <label className="font-semibold">Age Range</label>
        <select
          {...register("ageRange")}
          defaultValue={"Age Range"}
          className="border border-slate-300 border-dashed w-full rounded-md px-5 py-3 mt-2 bg-white outline-0"
        >
          <option value="Age Range" disabled>
            Age Range
          </option>
          <option value="5-10">5-10</option>
          <option value="10-20">10-20</option>
          <option value="20-30">20-30</option>
          <option value="30-40">30-40</option>
          <option value="40-50">40-50</option>
        </select>
      </div>

      <div>
        <label className="font-semibold">Address</label>
        <input
          {...register("address")}
          type="address"
          placeholder="Address"
          className="border border-slate-300 border-dashed w-full rounded-md px-5 py-3 mt-2 bg-white"
        />
      </div>

      <div>
        <label className="font-semibold">Experience</label>
        <select
          {...register("experience")}
          defaultValue={"Experience"}
          className="border border-slate-300 border-dashed w-full rounded-md px-5 py-3 mt-2 bg-white outline-0"
        >
          <option value="Experience" disabled>
            Experience
          </option>
          <option value="0-1">0-1 (Year)</option>
          <option value="1-2">1-2 (Years)</option>
          <option value="2-3">2-3 (Years)</option>
          <option value="3-4">3-4 (Years)</option>
          <option value="4-5">4-5 (Years)</option>
        </select>
      </div>

      <div>
        <label className="font-semibold">Photo</label>
        <input
          {...register("photo")}
          type="file"
          className="border border-slate-300 border-dashed w-full rounded-md px-5 py-3 mt-2 bg-white"
        />
        {/* <PhotoUpload register={register} /> */}
      </div>

      <button className="bg-[#333] px-5 py-3 rounded-md text-white cursor-pointer">
        Update Profile
      </button>
    </form>
  );
}
