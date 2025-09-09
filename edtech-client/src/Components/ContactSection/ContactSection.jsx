import { Fade } from "react-awesome-reveal";
import contact from "../../assets/images/contact.svg";

import ContactSectionForm from "../Forms/ContactSectionForm";

export default function ContactSection() {
  return (
    <div>
      <img src={contact} alt="" className="mx-auto" />
      <div className="grid grid-cols-2 gap-5">
        <div>
          <Fade direction="left" cascade={true} duration={800}>
            <h2 className="text-[45px] font-bold">
              <span className="text-primary">Contact</span> with us
            </h2>
            <p className="text-secondary">
              Your dream, our responsibility <br /> to make it a reality. Join
              SkilloFy today to enhance your skills. <br /> Contact us now.
            </p>
            <div className="mt-5 flex flex-col gap-3">
              <p>+880 1234 345 322</p>
              <p>dev@codevexa.com</p>
              <p>Bogura, Bangladesh</p>
            </div>
          </Fade>
        </div>
        <div>
          <Fade direction="right" cascade={true} duration={800}>
            <div className="p-5 rounded-xl -mb-10 bg-white">
              <h4 className="font-semibold text-xl">Wanna say something?</h4>{" "}
              <ContactSectionForm />
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}
