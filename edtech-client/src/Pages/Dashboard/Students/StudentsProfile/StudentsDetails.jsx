import { Fade } from "react-awesome-reveal";
import useGetStudent from "../../../../Hooks/Users/useGetStudent";
import LoadingSpinner from "../../../../Components/UI/LoadingSpinner";

export default function StudentsDetails() {
  const { isLoading, student } = useGetStudent();
  // const student = students[0];

  const username = student?.email?.split("@")[0];

  if ((isLoading, !student)) {
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
          <h2 className="text-[45px] font-bold">
            <span className="text-primary">Profile</span>
          </h2>
        </Fade>
        <div className="relative w-full">
          <h2 className="text-right px-10 text-[17px] custom-font z-30">
            {student?.role}
          </h2>
          <h2
            style={{
              WebkitTextStroke: "1px #000",
              WebkitTextFillColor: "transparent",
              color: "transparent",
            }}
            className="text-right px-10 text-[40px] custom-font absolute right-0 -top-7 opacity-20"
          >
            {student?.role}
          </h2>
        </div>
      </div>
      <h3 className="">
        Welcome,{" "}
        <span className="text-xl font-bold text-primary">{student?.name}</span>
      </h3>
      <div className="grid grid-cols-4">
        <div className="col-span-3 grid grid-cols-2 gap-5">
          <div>
            <label className="text-[#787878] text-sm">Email</label>
            <p className="">{student?.email ? student.email : "N/A"}</p>
          </div>

          <div>
            <label className="text-[#787878] text-sm">Student ID</label>
            <p className=""> {student?.studentId}</p>
          </div>
          <div>
            <label className="text-[#787878] text-sm">Phone</label>
            <p className="">{student?.phone ? student.phone : "N/A"}</p>
          </div>
          <div>
            <label className="text-[#787878] text-sm">Gender</label>
            <p>{student?.gender ? student.gender : "N/A"}</p>
          </div>
          <div>
            <label className="text-[#787878] text-sm">Age Range</label>
            <p>{student?.ageRange ? student.ageRange : "N/A"}</p>
          </div>
          <div>
            <label className="text-[#787878] text-sm">Address</label>
            <p>{student?.address ? student.address : "N/A"}</p>
          </div>
          <div>
            <label className="text-[#787878] text-sm">Experience</label>
            <p>{student?.experience ? student.experience : "N/A"}</p>
          </div>
        </div>
        <div className="text-center overflow-hidden flex flex-col items-center gap-2">
          <img
            src={
              // student.photo
              // ? student.photo
              // :
              "https://i.ibb.co/ynG5yN4H/man-beard-vector-35281418.png"
            }
            alt=""
            className="rounded-full h-20 w-20"
          />
          <h5 className="font-semibold">{student?.name}</h5>
          <p className="text-[#787878] text-sm">@{username}</p>
        </div>
      </div>
    </div>
  );
}
