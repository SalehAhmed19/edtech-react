import { FaCalendar } from "react-icons/fa";

export default function FreeClass() {
  return (
    <div className="flex items-center justify-between gap-2 p-2 bg-[#0000000b] rounded-md">
      <div className="flex items-center gap-3">
        <img
          className="w-10"
          src="https://cdn-icons-png.flaticon.com/512/7092/7092289.png"
          alt=""
        />
        <div>
          <p>Free Orientation Class</p>
          <h5 className="font-bold text-xl flex items-center gap-2">
            <span className="text-[16px]">
              <FaCalendar />
            </span>{" "}
            02 June 2025
          </h5>
        </div>
      </div>
      <button className="bg-[#333] px-5 py-2 rounded-md text-white cursor-pointer">
        Free Booking Now
      </button>
    </div>
  );
}
