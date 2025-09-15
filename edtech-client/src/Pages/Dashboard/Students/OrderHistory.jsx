import useGetOrders from "../../../Hooks/Students/useGetOrders";
import HelpBanner from "../HelpBanner";
import useGetCarts from "../../../Hooks/Students/useGetCarts";

import { Fade } from "react-awesome-reveal";
import VerticalCard from "../../../Components/UI/OrderHistoryCard/OrderHistoryCard";
import DashboardPlaceholder from "../../../Components/UI/DashboardHomeCourseCard/DashboardPlaceholder";
import {
  ArrowBendDownRightIcon,
  ClockCounterClockwiseIcon,
  PlusIcon,
} from "@phosphor-icons/react";
import LoadingSpinner from "../../../Components/UI/LoadingSpinner";

export default function OrderHistory() {
  const { isLoading, orders } = useGetOrders();

  if (isLoading) {
    return (
      <div className="h-[80vh] flex justify-center items-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (!orders || orders.length === 0) {
    return (
      <div className="flex flex-col justify-center gap-10">
        <Fade direction="up" cascade={true} duration={800}>
          <h2 className="text-[45px] font-bold text-primary">Order History</h2>
        </Fade>
        <DashboardPlaceholder
          element={
            <ClockCounterClockwiseIcon
              size={52}
              className="mx-auto text-primary"
            />
          }
          icon={<ArrowBendDownRightIcon size={32} />}
          title={"You haven't purchase any course :("}
          subtitle={"Enroll now for gain your skill"}
          btn={"Enroll Now"}
          link={"/courses"}
        />
        <HelpBanner />
      </div>
    );
  }

  // // console.log(orders);
  return (
    <div className="flex flex-col gap-10">
      <Fade direction="up" cascade={true} duration={800}>
        <h2 className="text-[45px] font-bold text-primary">Order History</h2>
      </Fade>
      <div className="h-[55vh] overflow-y-scroll p-5">
        <div className="grid grid-cols-3 gap-5">
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
