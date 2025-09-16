import { PenIcon, TrashIcon } from "@phosphor-icons/react";
import { FaGithub, FaLink, FaPen, FaTrash } from "react-icons/fa";

export default function SkillListItem({ skill, idx }) {
  // // console.log(skill);
  return (
    <li className="bg-slate-50 rounded-md p-5">
      <div>
        <div className="flex justify-between items-center">
          <span className="py-1 px-3 bg-primary text-white rounded-full">
            Skill {idx + 1}
          </span>
          <div className="flex gap-2 items-center">
            <button className="p-3 bg-slate-100 rounded-full">
              <PenIcon size={22} />
            </button>
            <button className="p-3 bg-primary text-white rounded-full">
              <TrashIcon size={22} />
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-3 mt-5">
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
            <div className="flex items-center gap-2 mt-3">
              <a
                target="_blank"
                className="bg-primary text-white hover:border-0 duration-500 rounded-full px-5 py-3 flex items-center gap-2"
                href={skill.project}
              >
                Live Demo <FaLink />
              </a>
              <a
                target="_blank"
                className="bg-[#1e1e1e] duration-500 text-white rounded-full px-5 py-3 flex items-center gap-2"
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
