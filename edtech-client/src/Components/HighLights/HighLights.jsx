import SectionTitle from "../SectionTitle/SectionTitle";
import bg from "../../assets/images/whyBg.jpg";
import { PiVideoFill } from "react-icons/pi";

export default function HighLights() {
  const data = [1, 2, 3, 4, 5, 6];
  return (
    <div
      style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
      className="p-16"
    >
      <SectionTitle title={"Why EdTech is best for you?"} />
      <div className="grid grid-cols-2 gap-6 w-1/2 mx-auto">
        {data.map((d) => (
          <div
            key={d}
            className="border-l-8 border-[#FC5A57] px-5 py-6 rounded-l-md shadow bg-white"
          >
            <h3 className="text-primary font-semibold text-xl flex gap-3 items-center">
              <PiVideoFill className="text-black text-3xl" /> Recoded Video
              Lession
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
