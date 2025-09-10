import { Link } from "react-router-dom";
import HelpBanner from "../HelpBanner";

import SkillListItem from "./SkillListItem";
import useGetSkills from "../../../Hooks/Students/useGetSkills";

import LoadingSpinner from "../../../Components/UI/LoadingSpinner";
import { PersonSimpleHikeIcon, PlusIcon } from "@phosphor-icons/react";
import DashboardPlaceholder from "../../../Components/UI/DashboardHomeCourseCard/DashboardPlaceholder";
import { Fade } from "react-awesome-reveal";

export default function StudentsSkillSet() {
  const { skills, isLoading } = useGetSkills();
  console.log(skills);

  if (isLoading) {
    return (
      <div className="h-[80vh] flex justify-center items-center">
        <LoadingSpinner />
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 place-content-center h-screen gap-10">
      <Fade direction="up" cascade={true} duration={800}>
        <h2 className="text-[45px] font-bold text-primary">Skills</h2>
      </Fade>
      {skills?.length > 0 ? (
        <section>
          <ul className="flex flex-col gap-5 max-h-[75vh] overflow-y-scroll">
            {skills?.map((skill, idx) => (
              <SkillListItem skill={skill} idx={idx} key={idx} />
            ))}
          </ul>
          <Link to="/dashboard/add-skillset">
            <button className="text-white bg-primary px-5 py-3 rounded-full flex items-center gap-2 animate-bounce mt-10">
              Add Skills <PlusIcon size={32} />
            </button>
          </Link>
        </section>
      ) : (
        <DashboardPlaceholder
          element={
            <PersonSimpleHikeIcon size={52} className="mx-auto text-primary" />
          }
          icon={<PlusIcon size={32} />}
          title={"You haven't added any skills yet :("}
          subtitle={
            "Add skills now to make your profile stand out from the rest."
          }
          btn={"Add Skills"}
          link={"/dashboard/add-skillset"}
        />
      )}

      <HelpBanner />
    </div>
  );
}
