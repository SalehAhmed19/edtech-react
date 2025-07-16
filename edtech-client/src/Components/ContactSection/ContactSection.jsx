import contact from "../../assets/images/contact.svg";

import ContactSectionForm from "../Forms/ContactSectionForm";

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
          <div className="p-5 border border-dashed border-slate-300 rounded-xl -mb-10 bg-white">
            <h4 className="font-semibold text-xl">Wanna say something?</h4>
            <ContactSectionForm />
          </div>
        </div>
      </div>
    </div>
  );
}
