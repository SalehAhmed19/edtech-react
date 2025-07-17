import DataSkeleton from "../../../../Components/UI/AvatarSkeleton/DataSkeleton";
import useGetStudent from "../../../../Hooks/Users/useGetStudent";

export default function StudentsDetails() {
  const { students, isLoading } = useGetStudent();
  const username = students?.email?.split("@")[0];
  return (
    <div className="bg-black py-10 rounded-b-2xl text-white flex flex-col gap-3 -mt-10">
      <div className="relative mb-5">
        <h2 className="text-right px-10 text-[17px] custom-font z-30">
          {students.role}
        </h2>
        <h2
          style={{
            WebkitTextStroke: "1px #fff",
            WebkitTextFillColor: "transparent",
            color: "transparent",
          }}
          className="text-right px-10 text-[40px] custom-font absolute right-0 -top-7 opacity-20"
        >
          {students.role}
        </h2>
      </div>
      <h3 className="pl-10">
        Welcome,{" "}
        <span className="text-xl font-semibold">
          {students?.name?.split(" ")[0]}
        </span>
      </h3>
      <div className="grid grid-cols-4">
        <div className="col-span-3 pl-10 grid grid-cols-2 gap-5">
          {isLoading ? (
            <DataSkeleton />
          ) : (
            <div>
              <label className="text-[#787878] text-sm">Email</label>
              <p className="">{students?.email ? students.email : "N/A"}</p>
            </div>
          )}
          {isLoading ? (
            <DataSkeleton />
          ) : (
            <div>
              <label className="text-[#787878] text-sm">Student ID</label>
              <p className="">
                {students?.studentId ? students.studentId : "N/A"}
              </p>
            </div>
          )}
          {isLoading ? (
            <DataSkeleton />
          ) : (
            <div>
              <label className="text-[#787878] text-sm">Phone</label>
              <p className="">{students?.phone ? students.phone : "N/A"}</p>
            </div>
          )}
          {isLoading ? (
            <DataSkeleton />
          ) : (
            <div>
              <label className="text-[#787878] text-sm">Gender</label>
              <p>{students?.gender ? students.gender : "N/A"}</p>
            </div>
          )}
          {isLoading ? (
            <DataSkeleton />
          ) : (
            <div>
              <label className="text-[#787878] text-sm">Age Range</label>
              <p>{students?.ageRange ? students.gender : "N/A"}</p>
            </div>
          )}
          {isLoading ? (
            <DataSkeleton />
          ) : (
            <div>
              <label className="text-[#787878] text-sm">Address</label>
              <p>{students?.ageRange ? students.gender : "N/A"}</p>
            </div>
          )}
          {isLoading ? (
            <DataSkeleton />
          ) : (
            <div>
              <label className="text-[#787878] text-sm">Experience</label>
              <p>{students?.ageRange ? students.gender : "N/A"}</p>
            </div>
          )}
        </div>
        <div className="text-center overflow-hidden flex flex-col items-center gap-2">
          <img src={students.photo} alt="" className="rounded-full h-20 w-20" />
          <h5 className="font-semibold">{students.name}</h5>
          <p className="text-[#787878] text-sm">@{username}</p>
        </div>
      </div>
    </div>
  );
}
