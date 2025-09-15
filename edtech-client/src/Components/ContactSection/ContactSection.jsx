import { Fade } from "react-awesome-reveal";
import contact from "../../assets/images/contact.png";

import ContactSectionForm from "../Forms/ContactSectionForm";
import { AtIcon, HouseLineIcon, PhoneCallIcon } from "@phosphor-icons/react";

export default function ContactSection() {
  return (
    <div>
      <Fade direction="up" cascade={true} duration={800}>
        <img src={contact} alt="" className="mx-auto" />
      </Fade>
      <div className="grid grid-cols-2 gap-5">
        <div>
          <Fade direction="left" cascade={true} duration={800}>
            <h2 className="text-[45px] font-bold">
              <span className="text-primary">Contact</span> with us
            </h2>
            <p className="text-secondary">
              Your dream, our responsibility <br /> to make it a reality. Join{" "}
              <span className="text-primary font-bold">
                Smart Education Center
              </span>{" "}
              today to enhance your skills. <br /> Contact us now.
            </p>
            <div className="mt-5 flex flex-col gap-3">
              <p className="flex items-center gap-2">
                <PhoneCallIcon size={32} className="text-primary" />
                +880 2983 393 829
              </p>
              <p className="flex items-center gap-2">
                <AtIcon size={32} className="text-primary" />
                smart.edu@outlook.com
              </p>
              <p className="flex items-center gap-2">
                <HouseLineIcon size={32} className="text-primary" />
                Bogura, Bangladesh
              </p>
            </div>
          </Fade>
        </div>
        <div>
          <Fade direction="right" cascade={true} duration={800}>
            <div className="p-5 rounded-xl -mb-10 bg-white">
              <h4 className="font-bold text-xl text-primary">
                Wanna say something?
              </h4>{" "}
              <ContactSectionForm />
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}
