import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function NewsLetter() {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    toast.success("News letter subscribed!");
    reset();
  };
  return (
    <div className="text-center">
      <h2 className="font-semibold text-[40px]">
        Subscribe for Offer and <br /> Course Update
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border border-slate-300 border-dashed rounded-full p-2 w-1/3 mx-auto flex items-center mt-5"
      >
        <input
          {...register("email")}
          type="email"
          className="rounded-full px-5 py-2 w-full outline-0"
          placeholder="Write your email"
        />
        <button className="bg-[#333] px-5 py-2 rounded-full text-white">
          Subscribe
        </button>
      </form>
    </div>
  );
}
