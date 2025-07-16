import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function ContactSectionForm() {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    toast.success("Message sent!");
    reset();
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-2 mt-3"
    >
      <div>
        <label className="font-semibold">Name</label>
        <input
          {...register("name")}
          type="text"
          placeholder="Your Name"
          className="border border-slate-300 border-dashed w-full rounded-md px-5 py-2 mt-2"
        />
      </div>
      {/*  */}
      <div>
        <label className="font-semibold">Email</label>
        <input
          {...register("email")}
          type="email"
          placeholder="Your Email"
          className="border border-slate-300 border-dashed w-full rounded-md px-5 py-2 mt-2"
        />
      </div>
      {/*  */}
      <div>
        <label className="font-semibold">Your Message</label>
        <textarea
          {...register("message")}
          type="text"
          placeholder="Your Message"
          className="border border-slate-300 border-dashed w-full rounded-md px-5 py-2 mt-2"
        />
      </div>

      <button className="bg-[#333] px-5 py-2 rounded-md text-white">
        Send Message
      </button>
    </form>
  );
}
