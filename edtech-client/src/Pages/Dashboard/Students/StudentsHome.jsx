import DashboardSectionTitle from "../../../Components/SectionTitle/DashboardSectionTitle";
import Calendar from "../../../Components/UI/Calendar/Calendar";
import course from "../../../assets/images/course.svg";
import DashboardHighlightCard from "../../../Components/UI/DashboardHighlightCard/DashboardHighlightCard";
import useGetCarts from "../../../Hooks/Students/useGetCarts";

export default function StudentsHome() {
  const { carts, isLoading } = useGetCarts();
  return (
    <div>
      <DashboardSectionTitle title={"Welcome to dashboard!"} />
      <div className="grid grid-cols-2 gap-5 mt-5">
        <div className="flex flex-col gap-5">
          <DashboardHighlightCard
            icon={course}
            endpoint={"student-courses"}
            title={"Course"}
            length={0}
          />

          <DashboardHighlightCard
            icon={course}
            endpoint={"carts"}
            title={"Carts"}
            length={carts.length}
          />
          <DashboardHighlightCard
            icon={course}
            endpoint={"order-history"}
            title={"Orders"}
            length={0}
          />
          <DashboardHighlightCard
            icon={course}
            endpoint={"certificates"}
            title={"Certificates"}
            length={0}
          />
        </div>
        <div>
          <Calendar />
        </div>
      </div>
    </div>
  );
}
