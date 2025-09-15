import { Fade } from "react-awesome-reveal";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function NewsLetter() {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    // // console.log(data);
    toast.success("News letter subscribed!");
    reset();
  };
  return (
    <div className="text-center">
      <Fade direction="up" cascade={true} duration={800}>
        <h2 className="text-[35px] md:text-[45px] font-bold text-center">
          Subscribe for <span className="text-primary">Offer</span> and <br />
          <span className="text-primary">Course Update</span>
        </h2>
        <p className="text-center text-secondary">
          Expert Tips, Industry Trends, and Exclusive Offers.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border border-gray-200 rounded-full p-2 w-[90%] md:w-1/3 mx-auto flex items-center mt-5"
        >
          <input
            {...register("email")}
            type="email"
            className="rounded-full px-5 md:py-3 w-full outline-0"
            placeholder="Write your email"
          />
          <button className="bg-primary px-5 py-2 rounded-full text-white">
            Subscribe
          </button>
        </form>
      </Fade>
    </div>
  );
}
