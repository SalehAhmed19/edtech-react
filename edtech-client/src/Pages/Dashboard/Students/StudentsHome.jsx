import Calendar from "../../../Components/UI/Calendar/Calendar";
import course from "../../../assets/images/online-learning.png";
import cart from "../../../assets/images/shopping-cart.png";
import order from "../../../assets/images/order-now.png";
import certificate from "../../../assets/images/certificate.png";
import DashboardHighlightCard from "../../../Components/UI/DashboardHighlightCard/DashboardHighlightCard";
import useGetCarts from "../../../Hooks/Students/useGetCarts";
import useGetOrders from "../../../Hooks/Students/useGetOrders";
import useGetAllUsers from "../../../Hooks/Users/useGetAllUsers";
import StudentsDetails from "./StudentsProfile/StudentsDetails";

export default function StudentsHome() {
  const { carts } = useGetCarts();
  const { orders } = useGetOrders();
  const { singleUser } = useGetAllUsers();
  console.log(orders);
  return (
    <div>
      {singleUser.role === "student" && (
        <div className="mb-10">
          <StudentsDetails />
        </div>
      )}
      <div className="grid grid-cols-2 gap-5 mt-5">
        <div className="flex flex-col gap-5">
          <DashboardHighlightCard
            icon={course}
            endpoint={"student-courses"}
            title={"Course"}
            length={orders[0].carts.length}
          />

          <DashboardHighlightCard
            icon={cart}
            endpoint={"carts"}
            title={"Carts"}
            length={carts.length}
          />
          <DashboardHighlightCard
            icon={order}
            endpoint={"order-history"}
            title={"Orders"}
            length={orders.length}
          />
          <DashboardHighlightCard
            icon={certificate}
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
