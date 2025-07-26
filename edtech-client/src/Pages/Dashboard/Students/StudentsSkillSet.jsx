import { Link } from "react-router-dom";
import skillsImage from "../../../assets/images/skills.svg";
import DashboardSectionTitle from "../../../Components/SectionTitle/DashboardSectionTitle";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import HelpBanner from "../HelpBanner";

import SkillListItem from "./SkillListItem";
import useGetSkills from "../../../Hooks/Students/useGetSkills";
import Loader from "../../../Components/Loader/Loader";

export default function StudentsSkillSet() {
  const { skills, isLoading } = useGetSkills();
  console.log(skills);

  if (isLoading) {
    return (
      <div className="h-[80vh] flex justify-center items-center">
        <Loader />
      </div>
    );
  }
  return (
    <div className="flex flex-col justify-center gap-10">
      <DashboardSectionTitle title={"My Skillset"} />
      {skills?.length > 0 ? (
        <section>
          <ul className="flex flex-col gap-5 max-h-[75vh] overflow-y-scroll">
            {skills?.map((skill, idx) => (
              <SkillListItem skill={skill} idx={idx} key={idx} />
            ))}
          </ul>
          <Link to="/dashboard/add-skillset">
            <button className="text-white bg-[#333] px-5 py-2 rounded-md mt-5 mx-auto block">
              Add Skills
            </button>
          </Link>
        </section>
      ) : (
        <div className="border border-dashed border-slate-300 p-5 rounded-md text-center place-content-center py-20">
          <img src={skillsImage} alt="" className="mx-auto my-2" />
          <SectionTitle title={"You haven't added any skills yet :("} />

          <p>Add skills now to make your profile stand out from the rest.</p>
          <Link to="/dashboard/add-skillset">
            <button className="text-white bg-[#333] px-5 py-2 rounded-md mt-5">
              Add Skills
            </button>
          </Link>
        </div>
      )}

      <HelpBanner />
    </div>
  );
}
