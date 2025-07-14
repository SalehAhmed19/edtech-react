import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function FreeClassForm() {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    toast.success("Free class request submitted! You'll notify by email.");
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
      <div>
        <label className="font-semibold">Name</label>
        <input
          {...register("name")}
          type="text"
          placeholder="Your Name"
          className="border border-[#00000020] w-full rounded-md px-5 py-2 mt-2 bg-white"
        />
      </div>
      {/*  */}
      <div>
        <label className="font-semibold">Email</label>
        <input
          {...register("email")}
          type="email"
          placeholder="Your Email"
          className="border border-[#00000020] w-full rounded-md px-5 py-2 mt-2 bg-white"
        />
      </div>
      {/*  */}
      <div>
        <label className="font-semibold">Phone</label>
        <input
          {...register("phone")}
          type="text"
          placeholder="Your Phone"
          className="border border-[#00000020] w-full rounded-md px-5 py-2 mt-2 bg-white"
        />
      </div>
      {/*  */}

      <button className="bg-[#333] px-5 py-2 rounded-md text-white cursor-pointer">
        Book Now
      </button>
    </form>
  );
}
