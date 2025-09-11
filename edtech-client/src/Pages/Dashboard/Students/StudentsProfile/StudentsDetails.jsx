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

      <div className="flex flex-col gap-5">
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
          <h5 className="font-bold text-xl text-primary">{student?.name}</h5>
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
              {student?.email ? student.email : "N/A"}
            </p>
          </div>

          <div>
            <label className="text-secondary" style={{ fontSize: "14px" }}>
              Student ID
            </label>
            <p style={{ fontSize: "14px" }}> {student?.studentId}</p>
          </div>
          <div>
            <label className="text-secondary" style={{ fontSize: "14px" }}>
              Phone
            </label>
            <p style={{ fontSize: "14px" }}>
              {student?.phone ? student.phone : "N/A"}
            </p>
          </div>
          <div>
            <label className="text-secondary" style={{ fontSize: "14px" }}>
              Gender
            </label>
            <p style={{ fontSize: "14px" }}>
              {student?.gender ? student.gender : "N/A"}
            </p>
          </div>
          <div>
            <label className="text-secondary" style={{ fontSize: "14px" }}>
              Age Range
            </label>
            <p style={{ fontSize: "14px" }}>
              {student?.ageRange ? student.ageRange : "N/A"}
            </p>
          </div>
          <div>
            <label className="text-secondary" style={{ fontSize: "14px" }}>
              Address
            </label>
            <p style={{ fontSize: "14px" }}>
              {student?.address ? student.address : "N/A"}
            </p>
          </div>
          <div>
            <label className="text-secondary" style={{ fontSize: "14px" }}>
              Experience
            </label>
            <p style={{ fontSize: "14px" }}>
              {student?.experience ? student.experience : "N/A"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
