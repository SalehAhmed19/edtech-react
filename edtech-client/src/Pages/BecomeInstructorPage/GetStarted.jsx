import TeacherForm from "../../Components/Forms/TeacherForm";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

export default function GetStarted() {
  return (
    <div className="md:max-w-[920px] lg:max-w-[1280px] mx-auto flex flex-col gap-10 pt-10">
      <SectionTitle title={"Get Started"} className={"text-primary"} />
      <div className="w-1/2 mx-auto mb-22">
        <TeacherForm />
      </div>
    </div>
  );
}
