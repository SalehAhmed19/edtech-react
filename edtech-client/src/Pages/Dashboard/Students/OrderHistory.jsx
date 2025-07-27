import { Link } from "react-router-dom";
import Loader from "../../../Components/Loader/Loader";
import DashboardSectionTitle from "../../../Components/SectionTitle/DashboardSectionTitle";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useGetOrders from "../../../Hooks/Students/useGetOrders";
import order from "../../../assets/images/order-now.png";
import HelpBanner from "../HelpBanner";
import useGetCarts from "../../../Hooks/Students/useGetCarts";
import OrdersTable from "../../../Components/UI/Table/OrdersTable";

export default function OrderHistory() {
  const { isLoading, orders } = useGetOrders();
  const { carts } = useGetCarts();
  const tableHeaders = ["", "Order ID", "Courses", "Status"];

  if (isLoading) {
    return (
      <div className="h-[80vh] flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  if (!orders || orders.length === 0) {
    return (
      <div className="flex flex-col justify-center gap-10">
        <DashboardSectionTitle title={"My Orders"} />

        <div className="border border-dashed border-slate-300 p-5 rounded-md text-center place-content-center py-20">
          <img src={order} alt="" className="mx-auto my-2 w-20" />
          <SectionTitle title={"You haven't placed any orders yet :("} />

          <p>Make some order</p>
          {carts.length > 0 ? (
            <Link to="/dashboard/carts">
              <button className="text-white bg-[#333] px-5 py-2 rounded-md mt-5">
                Go to Carts
              </button>
            </Link>
          ) : (
            <Link to="/courses">
              <button className="text-white bg-[#333] px-5 py-2 rounded-md mt-5">
                Explore Courses
              </button>
            </Link>
          )}
        </div>
        <HelpBanner />
      </div>
    );
  }

  console.log(orders);
  return (
    <div>
      <OrdersTable
        headers={tableHeaders}
        data={orders}
        // handleDelete={handleDelete}
      />
    </div>
  );
}
