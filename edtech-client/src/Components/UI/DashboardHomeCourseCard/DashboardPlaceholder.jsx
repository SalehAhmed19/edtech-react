import React from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

export default function DashboardPlaceholder({
  element,
  icon,
  title,
  subtitle,
  btn,
  link,
}) {
  return (
    <div className="border border-gray-200 p-5 rounded-xl text-center place-content-center py-20 h-[55vh]">
      <Fade direction="up" cascade={true} duration={800}>
        {element}
        <h2 className="text-[45px] font-bold text-[#dedede]">{title}</h2>
        <p className="text-secondary">{subtitle}</p>
      </Fade>

      <Link to={`${link}`}>
        <button className="text-white bg-primary px-5 py-3 rounded-full mt-5 flex items-center gap-2 mx-auto animate-bounce">
          {btn} {icon}
        </button>
      </Link>
    </div>
  );
}
