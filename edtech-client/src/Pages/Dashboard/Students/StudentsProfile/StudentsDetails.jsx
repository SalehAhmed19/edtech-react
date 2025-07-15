import useGetStudent from "../../../../Hooks/Users/useGetStudent";

export default function StudentsDetails() {
  const { students } = useGetStudent();
  return (
    <div className="grid grid-cols-2 gap-5">
      <div>
        <label className="text-[#787878]">Full Name</label>
        <p className="font-semibold">
          {students?.name ? students.name : "N/A"}
        </p>
      </div>
      <div>
        <label className="text-[#787878]">Email</label>
        <p className="font-semibold">
          {students?.email ? students.email : "N/A"}
        </p>
      </div>
      <div>
        <label className="text-[#787878]">Student ID</label>
        <p className="font-semibold">
          {students?.studentId ? students.studentId : "N/A"}
        </p>
      </div>
      <div>
        <label className="text-[#787878]">Phone</label>
        <p className="font-semibold">
          {students?.phone ? students.phone : "N/A"}
        </p>
      </div>
      <div>
        <label className="text-[#787878]">Gender</label>
        <p className="font-semibold">
          {students?.gender ? students.gender : "N/A"}
        </p>
      </div>
      <div>
        <label className="text-[#787878]">Age Range</label>
        <p className="font-semibold">
          {students?.ageRange ? students.gender : "N/A"}
        </p>
      </div>
      <div>
        <label className="text-[#787878]">Address</label>
        <p className="font-semibold">
          {students?.ageRange ? students.gender : "N/A"}
        </p>
      </div>
      <div>
        <label className="text-[#787878]">Experience</label>
        <p className="font-semibold">
          {students?.ageRange ? students.gender : "N/A"}
        </p>
      </div>
    </div>
  );
}
