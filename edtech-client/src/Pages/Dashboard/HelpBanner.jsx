import { PhoneCallIcon } from "@phosphor-icons/react";
import help from "../../assets/images/support.png";

export default function HelpBanner() {
  return (
    <div className="bg-[#1E1E1E] w-full flex justify-between items-center rounded-md mt-10 text-white px-10">
      <img src={help} alt="" className="w-36 mt-[-40px]" />
      <h5 className="text-xl font-semibold">Need help?</h5>
      <div>
        <p className="flex items-center">
          <PhoneCallIcon size={32} />
          Call Now: +880 2983 393 829
        </p>
      </div>
    </div>
  );
}
