import { FaUser } from "react-icons/fa";

export default function Stats() {
  const data = [1, 2, 3, 4];
  return (
    <div className="grid grid-cols-4 gap-5 my-20 border-t border-b border-slate-300 border-dashed py-5">
      {data.map((d) => (
        <div key={d} className="flex items-center justify-center gap-5 p-5">
          <div className="w-10 h-10 rounded-full bg-[#33330] flex justify-center items-center">
            <FaUser className="text-[#333]" />
          </div>
          <div>
            <h2 className="font-semibold text-2xl">4320+</h2>
            <p className="text-[#787878]">Students</p>
          </div>
        </div>
      ))}
    </div>
  );
}
