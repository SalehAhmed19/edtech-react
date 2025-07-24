import { useState } from "react";
import { FaArrowTurnDown, FaArrowTurnUp } from "react-icons/fa6";

export default function Show({ course, show, setShow }) {
  const showMore = () => {
    setShow(course.length);
  };
  const showLess = () => {
    setShow(4);
  };

  return (
    <>
      {show === 4 ? (
        <button
          onClick={showMore}
          className="mx-auto flex items-center gap-2 my-5 px-5 py-2 rounded-md cursor-pointer"
        >
          See More <FaArrowTurnDown />
        </button>
      ) : (
        <button
          onClick={showLess}
          className="mx-auto flex items-center gap-2 my-5 px-5 py-2 rounded-md cursor-pointer"
        >
          See Less <FaArrowTurnUp />
        </button>
      )}
    </>
  );
}
