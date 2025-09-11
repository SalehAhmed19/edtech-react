import { useForm } from "react-hook-form";
import DashboardSectionTitle from "../../Components/SectionTitle/DashboardSectionTitle";
import toast from "react-hot-toast";
import skill from "../../assets/images/skills.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addSkills } from "../../RTK/Features/StudentsSlices/SkillsSlice";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase.config";
import { Fade } from "react-awesome-reveal";
import { PlusIcon } from "@phosphor-icons/react";
import useAxiosPublic from "../../Hooks/Axios/useAxiosPublic";

export default function AddSkills() {
  const axiosPublic = useAxiosPublic();
  const { register, handleSubmit } = useForm();
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSubmit = async (data) => {
    // console.log(data);
    const skill = {
      email: user.email,
      name: data.skill,
      experience: data.experience,
      project: data.projectUrl,
      gitHub: data.gitHub,
    };
    dispatch(addSkills({ skill, axiosPublic }));
    toast.success("Skills Added!");
    navigate("/dashboard/student-skillset");
  };

  return (
    <div className="grid grid-cols-2 place-content-center h-screen">
      <Fade direction="up" cascade={true} duration={800}>
        <h2 className="text-[45px] font-bold text-primary">Add Skills</h2>
      </Fade>
      <div className="p-5 bg-gray-50 rounded-xl">
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
                className="border border-gray-200 rounded-full w-full px-5 py-3 mt-2 bg-white"
              />
            </div>
            {/*  */}
            <div className="w-full">
              <label className="font-semibold">Experience</label>
              <input
                {...register("experience")}
                type="number"
                placeholder="Years of experience"
                className="border border-gray-200 rounded-full w-full px-5 py-3 mt-2 bg-white"
              />
            </div>
          </div>
          {/*  */}
          <div>
            <label className="font-semibold">
              Project URL <span className="text-[#787878] text-sm">(Demo)</span>
            </label>
            <input
              {...register("projectUrl")}
              type="text"
              placeholder="Project URL"
              className="border border-gray-200 rounded-full w-full px-5 py-3 mt-2 bg-white"
            />
          </div>
          {/*  */}
          <div>
            <label className="font-semibold">
              GitHub URL{" "}
              <span className="text-[#787878] text-sm">(GitHub)</span>
            </label>
            <input
              {...register("gitHub")}
              type="text"
              placeholder="Project URL"
              className="border border-gray-200 rounded-full w-full px-5 py-3 mt-2 bg-white"
            />
          </div>
          {/*  */}

          <button className="bg-primary px-5 py-3 rounded-full text-white cursor-pointer flex items-center gap-2 mx-auto animate-bounce mt-5">
            Add Skill <PlusIcon size={32} />
          </button>
        </form>
      </div>
    </div>
  );
}
