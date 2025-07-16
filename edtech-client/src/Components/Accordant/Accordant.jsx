export default function Accordant({
  title,
  content,
  index,
  activeIndex,
  onToggle,
}) {
  const isOpen = index === activeIndex;
  return (
    <div className=" rounded-lg overflow-hidden cursor-pointer">
      {/* Accordion Header */}
      <button
        className={`flex justify-between items-center w-full px-6 py-3 ${
          isOpen ? "bg-[#333] text-[#fff]" : "bg-white text-black"
        } hover:bg-[#e0025b0e] hover:text-[#333] focus:outline-none transition duration-300 ease-in-out cursor-pointer my-2 rounded-lg border-b-2 border-[#333] border-dashed`}
        onClick={() => onToggle(index)}
        aria-expanded={isOpen}
        aria-controls={`panel-content-${index}`}
        id={`panel-header-${index}`}
      >
        <span className="text-lg cursor-pointer">{title}</span>
        {/* Arrow Icon for Open/Close State */}
        <svg
          className={`w-6 h-6 transform transition-transform duration-300 ${
            isOpen ? "rotate-90 text-[#fff]" : "rotate-0 text-[#333]"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </button>

      {/* Accordion Content */}
      <div
        id={`panel-content-${index}`}
        role="region"
        aria-labelledby={`panel-header-${index}`}
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-6 py-4 text-gray-700 bg-[#33323]">{content}</div>
        </div>
      </div>
    </div>
  );
}
