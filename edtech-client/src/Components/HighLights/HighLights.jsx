import SectionTitle from "../SectionTitle/SectionTitle";
import bg from "../../assets/images/whyBg.jpg";
import { PiVideoFill } from "react-icons/pi";
import {
  BroadcastIcon,
  CertificateIcon,
  ChalkboardSimpleIcon,
  ChalkboardTeacherIcon,
  FilesIcon,
  HeadsetIcon,
  MicrosoftPowerpointLogoIcon,
} from "@phosphor-icons/react";

export default function HighLights() {
  const data = [
    {
      id: 1,
      title: "Recoded Video Lession",
      icon: <ChalkboardSimpleIcon size={42} />,
    },
    {
      id: 2,
      title: "Slide & Lecture Sheets",
      icon: <MicrosoftPowerpointLogoIcon size={42} />,
    },
    { id: 3, title: "Mentor & 24/7 Support", icon: <HeadsetIcon size={42} /> },
    {
      id: 4,
      title: "Achive Certificates",
      icon: <CertificateIcon size={42} />,
    },
    { id: 5, title: "Live Onlie Session", icon: <BroadcastIcon size={42} /> },
    { id: 6, title: "Quiz & Online Assesments", icon: <FilesIcon size={42} /> },
  ];
  return (
    <div
      style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
      className="p-16"
    >
      {/* <SectionTitle title={"Why EdTech is best for you?"} /> */}
      <h2 className="text-[45px] font-bold text-center">
        Why
        <span className="text-primary"> Smart Education Center</span> is best
        for you?
      </h2>
      <p className="text-center text-secondary">
        A personalized learning experience designed to help you succeed.
      </p>
      <div className="grid grid-cols-3 gap-6 mt-10">
        {data.map((d) => (
          <div
            key={d.id}
            className="p-10 bg-white flex flex-col items-center hover:scale-105 duration-300 cursor-pointer"
          >
            <span className="bg-[#CE2823] text-white rounded-full p-3 flex justify-center items-center mb-3 shadow-2xl">
              {d.icon}
            </span>
            <h3 className="font-semibold text-xl">
              <span className="text-primary">{d.title}</span>
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
