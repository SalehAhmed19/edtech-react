import { AtIcon, PhoneCallIcon } from "@phosphor-icons/react";
import { MdAlternateEmail } from "react-icons/md";

export default function Help() {
  return (
    <div className="p-5 border border-gray-200 rounded-md flex flex-col gap-3 w-1/2 ml-auto place-content-center h-[260px]">
      <h5 className="text-2xl font-semibold text-center">Need any help?</h5>
      <p>
        If you encounter any issues related to courses for skill development,
        please contact our representative directly.
      </p>
      <p className="flex items-center gap-2">
        <AtIcon size={32} className="text-primary" /> smart.edu@outlook.com
      </p>
      <p className="flex items-center gap-2">
        <PhoneCallIcon size={32} className="text-primary" /> +880 2983 393 829
      </p>
    </div>
  );
}
