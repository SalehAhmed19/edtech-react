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
      <h2 className="text-[45px] font-bold text-center">
        Subscribe for <span className="text-primary">Offer</span> and <br />
        <span className="text-primary">Course Update</span>
      </h2>
      <p className="text-center text-secondary">
        Expert Tips, Industry Trends, and Exclusive Offers.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border border-gray-200 rounded-full p-2 w-1/3 mx-auto flex items-center mt-5"
      >
        <input
          {...register("email")}
          type="email"
          className="rounded-full px-5 py-2 w-full outline-0"
          placeholder="Write your email"
        />
        <button className="bg-primary px-5 py-2 rounded-full text-white">
          Subscribe
        </button>
      </form>
    </div>
  );
}
