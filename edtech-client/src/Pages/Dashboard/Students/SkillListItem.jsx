import { FaGithub, FaLink, FaPen, FaTrash } from "react-icons/fa";

export default function SkillListItem({ skill, idx }) {
  console.log(skill);
  return (
    <li className="bg-slate-50 rounded-md p-5">
      <div>
        <div className="flex justify-between items-center">
          <span className="py-1 px-3 border border-dashed border-slate-300 rounded-md">
            Skill {idx + 1}
          </span>
          <div className="flex gap-2 items-center">
            <button className="p-3 bg-slate-100 rounded-full">
              <FaPen />
            </button>
            <button className="p-3 bg-slate-100 rounded-full">
              <FaTrash className="text-red-500" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mt-5">
          <p>
            <span className="block text-[#787878]">Skill Name:</span>{" "}
            <span className="font-semibold text-xl">{skill.name}</span>
          </p>
          <p>
            <span className="block text-[#787878]">Years of Experience:</span>{" "}
            <span className="font-semibold text-xl">
              {skill.experience} / Yrs
            </span>
          </p>
          <div>
            <span className="block text-[#787878]">Project Link:</span>{" "}
            <div className="flex items-center gap-2 mt-3">
              <a
                target="_blank"
                className="border border-dashed hover:bg-white hover:border-0 duration-500 border-slate-300 rounded-md px-2 py-1 flex items-center gap-2"
                href={skill.project}
              >
                Live Demo <FaLink />
              </a>
              <a
                target="_blank"
                className="border border-dashed bg-[#333] hover:bg-black duration-500 text-white border-slate-300 rounded-md px-2 py-1 flex items-center gap-2"
                href={skill.gitHub}
              >
                GitHub <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
