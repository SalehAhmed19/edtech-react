import skills from "../../../assets/images/skills.svg";
import DashboardSectionTitle from "../../../Components/SectionTitle/DashboardSectionTitle";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import HelpBanner from "../HelpBanner";

export default function StudentsSkillSet() {
  return (
    <div className="flex flex-col justify-center gap-10">
      <DashboardSectionTitle title={"My Skillset"} />

      <div className="shadow p-5 rounded-md text-center place-content-center py-20">
        <img src={skills} alt="" className="mx-auto my-2" />
        <SectionTitle title={"You haven't added any skills yet :("} />

        <p>Add skills now to make your profile stand out from the rest.</p>
        <button className="text-white bg-[#333] px-5 py-2 rounded-md mt-5">
          Add Skills
        </button>
      </div>
      <HelpBanner />
    </div>
  );
}
