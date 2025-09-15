import {
  ArrowFatLinesDownIcon,
  ArrowFatLinesUpIcon,
} from "@phosphor-icons/react";

export default function Show({ course, show, setShow }) {
  const showMore = () => {
    setShow(course.length);
  };
  const showLess = () => {
    setShow(12);
  };

  return (
    <div className="my-10">
      {show === 12 ? (
        <button
          onClick={showMore}
          className="mx-auto flex items-center gap-2 my-5 px-5 py-2 rounded-md cursor-pointer"
        >
          See More{" "}
          <ArrowFatLinesDownIcon
            size={32}
            className="text-primary animate-bounce"
          />
        </button>
      ) : (
        <button
          onClick={showLess}
          className="mx-auto flex items-center gap-2 my-5 px-5 py-2 rounded-md cursor-pointer"
        >
          See Less{" "}
          <ArrowFatLinesUpIcon
            size={32}
            className="text-primary animate-bounce"
          />
        </button>
      )}
    </div>
  );
}
