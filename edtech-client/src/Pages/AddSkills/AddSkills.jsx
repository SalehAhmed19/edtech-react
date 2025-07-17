import { useForm } from "react-hook-form";
import DashboardSectionTitle from "../../Components/SectionTitle/DashboardSectionTitle";
import toast from "react-hot-toast";
import skill from "../../assets/images/skills.png";

export default function AddSkills() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    toast.success("Skills Added!");
  };
  return (
    <div>
      <DashboardSectionTitle title={"Add Skills"} />
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-3 my-5"
        >
          <div className="flex items-center gap-5">
            <div className="w-full">
              <label className="font-semibold">Skills</label>
              <input
                {...register("skill")}
                type="text"
                placeholder="Skill"
                className="border border-slate-300 border-dashed w-full rounded-md px-5 py-2 mt-2 bg-white"
              />
            </div>
            {/*  */}
            <div className="w-full">
              <label className="font-semibold">Experience</label>
              <input
                {...register("experience")}
                type="number"
                placeholder="Years of experience"
                className="border border-slate-300 border-dashed w-full rounded-md px-5 py-2 mt-2 bg-white"
              />
            </div>
          </div>
          {/*  */}
          <div>
            <label className="font-semibold">Project URL</label>
            <input
              {...register("projectUrl")}
              type="text"
              placeholder="Project URL"
              className="border border-slate-300 border-dashed w-full rounded-md px-5 py-2 mt-2 bg-white"
            />
          </div>
          {/*  */}

          <button className="bg-[#333] px-5 py-2 rounded-md text-white cursor-pointer w-36">
            Add Skill
          </button>
        </form>
      </div>
      <div>
        <img className="w-86 ml-auto" src={skill} alt="" />
      </div>
    </div>
  );
}
