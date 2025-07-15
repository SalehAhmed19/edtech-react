import { Link } from "react-router-dom";

export default function DashboardHighlightCard({
  icon,
  endpoint,
  title,
  length,
}) {
  return (
    <div className="bg-slate-50 p-5 rounded-md border border-dashed border-slate-300 flex items-center justify-between">
      <div>
        <img src={icon} alt="" className="w-10" />
        <h3>
          <span className="italic text-slate-500">{title}: </span>
          <span className="font-semibold text-black normal-case">{length}</span>
        </h3>
      </div>
      <Link to={`/dashboard/${endpoint}`}>
        <button className="bg-[#333] text-white px-5 py-2 rounded-md">
          View All
        </button>
      </Link>
    </div>
  );
}
