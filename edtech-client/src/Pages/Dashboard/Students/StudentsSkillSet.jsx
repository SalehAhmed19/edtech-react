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
  // console.log(skills[0]);

  if (isLoading) {
    return (
      <div className="h-[80vh] flex justify-center items-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (skills[0]?.skills.length > 0) {
    return (
      <div className="flex flex-col gap-10">
        <Fade direction="up" cascade={true} duration={800}>
          <h2 className="text-[35px] md:text-[45px] font-bold text-primary">
            Skills
          </h2>
        </Fade>
        <section className="h-[42vh] overflow-y-scroll">
          <ul className="flex flex-col gap-5">
            {skills[0]?.skills.map((skill, idx) => (
              <SkillListItem skill={skill} idx={idx} key={idx} />
            ))}
          </ul>
        </section>
        <Link
          to="/dashboard/add-skillset"
          className="text-white bg-primary py-3 rounded-full animate-bounce mt-10 w-[150px]"
        >
          <span className="flex justify-center items-center gap-2">
            Add Skills <PlusIcon size={32} />
          </span>
        </Link>

        <HelpBanner />
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-10">
      <Fade direction="up" cascade={true} duration={800}>
        <h2 className="text-[45px] font-bold text-primary">Skills</h2>
      </Fade>

      <div className="h-[55vh]">
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
      </div>

      <HelpBanner />
    </div>
  );
}
