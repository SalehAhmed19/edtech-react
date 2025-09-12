import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function ContactForm() {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    toast.success("Message sent!");
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <div>
        <label className="font-semibold">Name</label>
        <input
          {...register("name")}
          type="text"
          placeholder="Your Name"
          className="border border-gray-200 w-full rounded-full px-5 py-3 mt-2 bg-white"
        />
      </div>
      {/*  */}
      <div>
        <label className="font-semibold">Email</label>
        <input
          {...register("email")}
          type="email"
          placeholder="Your Email"
          className="border border-gray-200 w-full rounded-full px-5 py-3 mt-2 bg-white"
        />
      </div>
      {/*  */}
      <div>
        <label className="font-semibold">Phone</label>
        <input
          {...register("phone")}
          type="text"
          placeholder="Your Phone"
          className="border border-gray-200 w-full rounded-full px-5 py-3 mt-2 bg-white"
        />
      </div>
      {/*  */}
      <div>
        <label className="font-semibold">Subject</label>
        <input
          {...register("subject")}
          type="text"
          placeholder="Your Subject"
          className="border border-gray-200 w-full rounded-full px-5 py-3 mt-2 bg-white"
        />
      </div>
      {/*  */}
      <div>
        <label className="font-semibold">Your Message</label>
        <textarea
          {...register("message")}
          type="text"
          placeholder="Your Message"
          className="border border-gray-200 w-full rounded-xl px-5 py-3 mt-2 h-48 bg-white"
        />
      </div>

      <button className="bg-primary px-5 py-3 rounded-full text-white cursor-pointer">
        Send Message
      </button>
    </form>
  );
}
