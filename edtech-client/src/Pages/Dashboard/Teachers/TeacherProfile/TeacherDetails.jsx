import { Fade } from "react-awesome-reveal";
import DataSkeleton from "../../../../Components/UI/AvatarSkeleton/DataSkeleton";
import LoadingSpinner from "../../../../Components/UI/LoadingSpinner";

import useGetTeacher from "../../../../Hooks/Users/useGetTeacher";

export default function TeacherDetails() {
  const { teacher, isLoading } = useGetTeacher();
  // // console.log(teacher);
  const username = teacher?.email?.split("@")[0];
  // //
  // console.log(teacher);

  if ((isLoading, !teacher)) {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="py-10 rounded-b-2xl flex flex-col gap-3 -mt-10">
      <div className="relative mb-5 flex items-center">
        <Fade direction="up" cascade={true} duration={800}>
          <h2 className="text-[35px] md:text-[45px] font-bold">
            <span className="text-primary">Profile</span>
          </h2>
        </Fade>
        <div className="relative w-full">
          <h2 className="text-right px-10 text-[17px] custom-font z-30">
            {teacher?.role}
          </h2>
          <h2
            style={{
              WebkitTextStroke: "1px #000",
              WebkitTextFillColor: "transparent",
              color: "transparent",
            }}
            className="text-right px-10 text-[40px] custom-font absolute right-0 -top-7 opacity-20"
          >
            {teacher?.role}
          </h2>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <div className="text-center overflow-hidden flex flex-col items-center gap-2">
          <img
            src={
              // teacher.photo
              // ? teacher.photo
              // :
              "https://i.ibb.co/ynG5yN4H/man-beard-vector-35281418.png"
            }
            alt=""
            className="rounded-full h-20 w-20"
          />
          <h5 className="font-bold text-xl text-primary">{teacher?.name}</h5>
          <p className="text-[#787878] text-sm" style={{ fontSize: "14px" }}>
            @{username}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div>
            <label className="text-secondary" style={{ fontSize: "14px" }}>
              Email
            </label>
            <p style={{ fontSize: "14px" }}>
              {teacher?.email ? teacher.email : "N/A"}
            </p>
          </div>

          <div>
            <label className="text-secondary" style={{ fontSize: "14px" }}>
              Teacher ID
            </label>
            <p style={{ fontSize: "14px" }}> {teacher?.teacherId}</p>
          </div>
          <div>
            <label className="text-secondary" style={{ fontSize: "14px" }}>
              Phone
            </label>
            <p style={{ fontSize: "14px" }}>
              {teacher?.phone ? teacher.phone : "N/A"}
            </p>
          </div>
          <div>
            <label className="text-secondary" style={{ fontSize: "14px" }}>
              Gender
            </label>
            <p style={{ fontSize: "14px" }}>
              {teacher?.gender ? teacher.gender : "N/A"}
            </p>
          </div>
          <div>
            <label className="text-secondary" style={{ fontSize: "14px" }}>
              Age Range
            </label>
            <p style={{ fontSize: "14px" }}>
              {teacher?.ageRange ? teacher.ageRange : "N/A"}
            </p>
          </div>
          <div>
            <label className="text-secondary" style={{ fontSize: "14px" }}>
              Address
            </label>
            <p style={{ fontSize: "14px" }}>
              {teacher?.address ? teacher.address : "N/A"}
            </p>
          </div>
          <div>
            <label className="text-secondary" style={{ fontSize: "14px" }}>
              Experience
            </label>
            <p style={{ fontSize: "14px" }}>
              {teacher?.experience ? teacher.experience : "N/A"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
