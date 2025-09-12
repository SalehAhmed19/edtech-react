import useGetAllUsers from "../../../../Hooks/Users/useGetAllUsers";
import HelpBanner from "../../HelpBanner";
import TeacherDetails from "./TeacherDetails";
import TeacherDetailsForm from "./TeacherDetailsForm";

export default function TeachersProfile() {
  const { singleUser } = useGetAllUsers();
  console.log({ singleUser });
  return (
    <>
      <div className="grid grid-cols-2 gap-10">
        {singleUser?.role === "teacher" && <TeacherDetails />}

        {/* <DividerTwo text={"Update Information"} /> */}
        <div className="p-5 bg-gray-50 rounded-xl">
          <TeacherDetailsForm />
        </div>
      </div>
      <HelpBanner />
    </>
  );
}
