export default function ContactForm() {
  return (
    <form className="flex flex-col gap-5">
      <div>
        <label className="font-semibold">Name</label>
        <input
          type="text"
          placeholder="Your Name"
          className="border border-[#00000020] w-full rounded-md px-5 py-3 mt-2 bg-white"
        />
      </div>
      {/*  */}
      <div>
        <label className="font-semibold">Email</label>
        <input
          type="email"
          placeholder="Your Email"
          className="border border-[#00000020] w-full rounded-md px-5 py-3 mt-2 bg-white"
        />
      </div>
      {/*  */}
      <div>
        <label className="font-semibold">Phone</label>
        <input
          type="text"
          placeholder="Your Phone"
          className="border border-[#00000020] w-full rounded-md px-5 py-3 mt-2 bg-white"
        />
      </div>
      {/*  */}
      <div>
        <label className="font-semibold">Subject</label>
        <input
          type="text"
          placeholder="Your Subject"
          className="border border-[#00000020] w-full rounded-md px-5 py-3 mt-2 bg-white"
        />
      </div>
      {/*  */}
      <div>
        <label className="font-semibold">Your Message</label>
        <textarea
          type="text"
          placeholder="Your Message"
          className="border border-[#00000020] w-full rounded-md px-5 py-3 mt-2 h-48 bg-white"
        />
      </div>

      <button className="bg-[#333] px-5 py-3 rounded-md text-white">
        Send Message
      </button>
    </form>
  );
}
