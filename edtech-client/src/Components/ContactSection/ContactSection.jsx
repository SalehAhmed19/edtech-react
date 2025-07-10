import contact from "../../assets/images/contact.svg";

export default function ContactSection() {
  return (
    <div>
      <img src={contact} alt="" className="mx-auto" />
      <div className="grid grid-cols-2 gap-5">
        <div>
          <h3 className="text-[40px] font-semibold">Contact with us</h3>
          <p className="mt-5">
            Your dream, our responsibility <br /> to make it a reality. Join
            SkilloFy today to enhance your skills. <br /> Contact us now.
          </p>
          <div className="mt-5 flex flex-col gap-3">
            <p>+880 1234 345 322</p>
            <p>dev@codevexa.com</p>
            <p>Bogura, Bangladesh</p>
          </div>
        </div>
        <div>
          <div className="p-5 shadow-lg rounded-xl -mb-10 bg-white">
            <h4 className="font-semibold text-xl">Wanna say something?</h4>
            <form className="flex flex-col gap-2 mt-3">
              <div>
                <label className="font-semibold">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="border border-[#00000020] w-full rounded-md px-5 py-2 mt-2"
                />
              </div>
              {/*  */}
              <div>
                <label className="font-semibold">Email</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="border border-[#00000020] w-full rounded-md px-5 py-2 mt-2"
                />
              </div>
              {/*  */}
              <div>
                <label className="font-semibold">Your Message</label>
                <textarea
                  type="text"
                  placeholder="Your Message"
                  className="border border-[#00000020] w-full rounded-md px-5 py-2 mt-2"
                />
              </div>

              <button className="bg-[#333] px-5 py-2 rounded-md text-white">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
