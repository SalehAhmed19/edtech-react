import SectionTitleTwo from "../../../Components/SectionTitle/SectionTitleTwo";

export default function Instructors({ course }) {
  return (
    <div className="flex flex-col gap-5">
      <SectionTitleTwo title={"Instuctors"} />

      {course?.instructors.map((instructor) => (
        <div className="flex items-center gap-3 p-2 border slate-300 rounded-md">
          <div>
            <img className="rounded-full w-16" src={instructor.image} alt="" />
          </div>

          <div>
            <h5 className="font-bold text-xl">{instructor.name}</h5>
            <p className="text-[#787878]">{instructor.designation}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
