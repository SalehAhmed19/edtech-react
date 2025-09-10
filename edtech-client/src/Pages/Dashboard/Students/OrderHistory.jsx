import { Link } from "react-router-dom";
import Loader from "../../../Components/Loader/Loader";
import DashboardSectionTitle from "../../../Components/SectionTitle/DashboardSectionTitle";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useGetOrders from "../../../Hooks/Students/useGetOrders";
import order from "../../../assets/images/order-now.png";
import HelpBanner from "../HelpBanner";
import useGetCarts from "../../../Hooks/Students/useGetCarts";

import { Fade } from "react-awesome-reveal";
import VerticalCard from "../../../Components/UI/OrderHistoryCard/OrderHistoryCard";

export default function OrderHistory() {
  const { isLoading, orders } = useGetOrders();
  const { carts } = useGetCarts();

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

  // console.log(orders);
  return (
    <div className="flex flex-col gap-10">
      <Fade direction="up" cascade={true} duration={800}>
        <h2 className="text-[45px] font-bold text-primary">Order History</h2>
      </Fade>
      <div className="h-[55vh] overflow-y-scroll p-5">
        <div className="grid grid-cols-4 gap-5">
          {orders.map((order) =>
            order.carts.map((course, idx) => (
              <VerticalCard key={idx} course={course} />
            ))
          )}
        </div>
      </div>
      <HelpBanner />
    </div>
  );
}
