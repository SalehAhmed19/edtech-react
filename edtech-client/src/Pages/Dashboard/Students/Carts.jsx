import { Link } from "react-router-dom";
import DashboardSectionTitle from "../../../Components/SectionTitle/DashboardSectionTitle";
import CartsTable from "../../../Components/UI/Table/CartsTable";
import useGetCarts from "../../../Hooks/Students/useGetCarts";
import HelpBanner from "../HelpBanner";
import { useDispatch } from "react-redux";
import { deleteCartItem } from "../../../RTK/Features/StudentsSlices/cartsSlice";
import useAxiosPublic from "../../../Hooks/Axios/useAxiosPublic";
import toast from "react-hot-toast";
import PaymentButton from "../../../Components/UI/PaymentButton/PaymentButton";
import LoadingSpinner from "../../../Components/UI/LoadingSpinner";
import { Fade } from "react-awesome-reveal";
import {
  ArrowBendDownRightIcon,
  BasketIcon,
  CreditCardIcon,
  TrashIcon,
} from "@phosphor-icons/react";
import DashboardPlaceholder from "../../../Components/UI/DashboardHomeCourseCard/DashboardPlaceholder";
import VerticalCard from "../../../Components/UI/OrderHistoryCard/OrderHistoryCard";

export default function Carts() {
  const axiosPublic = useAxiosPublic();
  const { carts, isLoading, totalPrice } = useGetCarts();

  const dispatch = useDispatch();
  const handleDelete = async (id) => {
    isLoading;
    const response = await dispatch(deleteCartItem({ id, axiosPublic }));
    if (response?.payload?.deletedCount > 0) {
      toast.success("Delete items!");
    }
    // // console.log({ id, response });
  };

  // // console.log(carts);
  if (isLoading) {
    return (
      <div className="h-[80vh] flex justify-center items-center">
        <LoadingSpinner />
      </div>
    );
  }
  if (!carts || carts.length === 0) {
    return (
      <div className="flex flex-col justify-center gap-10">
        <Fade direction="up" cascade={true} duration={800}>
          <h2 className="text-[45px] font-bold text-primary">Carts</h2>
        </Fade>

        <DashboardPlaceholder
          element={<BasketIcon size={52} className="mx-auto text-primary" />}
          icon={<ArrowBendDownRightIcon size={32} />}
          title={"You haven't added any cart yet :("}
          subtitle={
            "Add skills now to make your profile stand out from the rest."
          }
          btn={"Explore Courses"}
          link={"/courses"}
        />
        <HelpBanner />
      </div>
    );
  }
  // // console.log(carts);

  return (
    <>
      <div className="flex flex-col gap-10">
        <div className="flex items-center justify-between">
          <Fade direction="up" cascade={true} duration={800}>
            <h2 className="text-[45px] font-bold text-primary">Carts</h2>
          </Fade>
          <h5 className="text-xl text-secondary">
            You have to pay:
            <span className="text-primary font-bold"> {totalPrice} BDT</span>
          </h5>
        </div>
        <div className="h-[55vh] overflow-y-scroll p-5">
          <div className="grid grid-cols-3 gap-5">
            {carts.map((cart, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <VerticalCard course={cart} />
                <button
                  className="bg-primary text-white p-3 rounded-full hover:scale-105 duration-300"
                  onClick={() => handleDelete(cart.courseId)}
                >
                  <TrashIcon size={32} />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between mt-5">
          <Link to="/courses">
            <button className="bg-[#1e1e1e] text-white px-5 py-3 rounded-full flex items-center gap-2">
              Explore Courses <ArrowBendDownRightIcon size={32} />
            </button>
          </Link>
          <Link to="/dashboard/payments/stripe">
            {/* <PaymentButton /> */}
            <button className="bg-primary px-5 py-3 rounded-full text-white flex items-center gap-2 animate-bounce">
              Pay Now: {totalPrice} BDT <CreditCardIcon size={32} />
            </button>
          </Link>
        </div>
        <HelpBanner />
      </div>
    </>
  );
}
