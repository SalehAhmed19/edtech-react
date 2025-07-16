import { FaPhone } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

export default function Help() {
  return (
    <div className="p-5 border border-slate-300 border-dashed rounded-md flex flex-col gap-3 w-1/2 ml-auto place-content-center h-[220px]">
      <h5 className="text-2xl font-semibold text-center">Need any help?</h5>
      <p>
        If you encounter any issues related to courses for skill development,
        please contact our representative directly.
      </p>
      <p className="flex items-center gap-2">
        <FaPhone /> +880 1000 000000
      </p>
      <p className="flex items-center gap-2">
        <MdAlternateEmail /> +880 1000 000000
      </p>
    </div>
  );
}
