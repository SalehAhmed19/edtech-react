import DataSkeleton from "../../../../Components/UI/AvatarSkeleton/DataSkeleton";

import useGetTeacher from "../../../../Hooks/Users/useGetTeacher";

export default function TeacherDetails() {
  const { teacher, isLoading } = useGetTeacher();
  // // console.log(teacher);
  const username = teacher?.email?.split("@")[0];
  // // console.log(teacher);
  return (
    <div className="bg-black py-10 rounded-b-2xl text-white flex flex-col gap-3 -mt-10 mb-10">
      <div className="mx-10"></div>
      <div className="relative mb-5 flex items-center">
        <h2 className="text-[26px] font-semibold text-[#fff] mx-10">
          Dahsboard
        </h2>
        <div className="relative w-full">
          <h2 className="text-right px-10 text-[17px] custom-font z-30">
            {teacher.role}
          </h2>
          <h2
            style={{
              WebkitTextStroke: "1px #fff",
              WebkitTextFillColor: "transparent",
              color: "transparent",
            }}
            className="text-right px-10 text-[40px] custom-font absolute right-0 -top-7 opacity-20"
          >
            {teacher.role}
          </h2>
        </div>
      </div>
      <h3 className="pl-10">
        Welcome, <span className="text-xl font-semibold">{teacher?.name}</span>
      </h3>
      <div className="grid grid-cols-4">
        <div className="col-span-3 pl-10 grid grid-cols-2 gap-5">
          {isLoading ? (
            <DataSkeleton />
          ) : (
            <div>
              <label className="text-[#787878] text-sm">Email</label>
              <p className="">{teacher?.email ? teacher.email : "N/A"}</p>
            </div>
          )}
          {isLoading ? (
            <DataSkeleton />
          ) : (
            <div>
              <label className="text-[#787878] text-sm">Teacher ID</label>
              <p className="">
                {teacher?.teacherId ? teacher.teacherId : "N/A"}
              </p>
            </div>
          )}
          {isLoading ? (
            <DataSkeleton />
          ) : (
            <div>
              <label className="text-[#787878] text-sm">Phone</label>
              <p className="">{teacher?.phone ? teacher.phone : "N/A"}</p>
            </div>
          )}
          {isLoading ? (
            <DataSkeleton />
          ) : (
            <div>
              <label className="text-[#787878] text-sm">Gender</label>
              <p>{teacher?.gender ? teacher.gender : "N/A"}</p>
            </div>
          )}
          {isLoading ? (
            <DataSkeleton />
          ) : (
            <div>
              <label className="text-[#787878] text-sm">Age Range</label>
              <p>{teacher?.ageRange ? teacher.gender : "N/A"}</p>
            </div>
          )}
          {isLoading ? (
            <DataSkeleton />
          ) : (
            <div>
              <label className="text-[#787878] text-sm">Address</label>
              <p>{teacher?.ageRange ? teacher.gender : "N/A"}</p>
            </div>
          )}
          {isLoading ? (
            <DataSkeleton />
          ) : (
            <div>
              <label className="text-[#787878] text-sm">Experience</label>
              <p>{teacher?.ageRange ? teacher.gender : "N/A"}</p>
            </div>
          )}
        </div>
        <div className="text-center overflow-hidden flex flex-col items-center gap-2">
          <img
            src={
              teacher.photo
                ? teacher.photo
                : "https://i.ibb.co/ynG5yN4H/man-beard-vector-35281418.png"
            }
            alt=""
            className="rounded-full h-20 w-20"
          />
          <h5 className="font-semibold"> {teacher.name}</h5>
          <p className="text-[#787878] text-sm">@{username} </p>
        </div>
      </div>
    </div>
  );
}
