import { Link } from "react-router-dom";
import Loader from "../../../Components/Loader/Loader";
import DashboardSectionTitle from "../../../Components/SectionTitle/DashboardSectionTitle";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import CartsTable from "../../../Components/UI/Table/CartsTable";
import useGetCarts from "../../../Hooks/Students/useGetCarts";
import course from "../../../assets/images/course.svg";
import HelpBanner from "../HelpBanner";
import { useDispatch } from "react-redux";
import { deleteCartItem } from "../../../RTK/Features/StudentsSlices/cartsSlice";
import useAxiosPrivate from "../../../Hooks/Axios/useAxiosPrivate";
import toast from "react-hot-toast";
import PaymentButton from "../../../Components/UI/PaymentButton/PaymentButton";

export default function Carts() {
  const axiosPrivate = useAxiosPrivate();
  const { carts, isLoading, totalPrice } = useGetCarts();

  const dispatch = useDispatch();
  const handleDelete = async (id) => {
    isLoading;
    const response = await dispatch(deleteCartItem({ id, axiosPrivate }));
    if (response.payload.deletedCount > 0) {
      toast.success("Delete items!");
    }
    console.log({ id, response });
  };

  const tableHeaders = ["", "Course Name / ID", "Price", "Status", ""];

  console.log(carts);
  if (isLoading) {
    return (
      <div className="h-[80vh] flex justify-center items-center">
        <Loader />
      </div>
    );
  }
  if (!carts || carts.length === 0) {
    return (
      <div className="flex flex-col justify-center gap-10">
        <DashboardSectionTitle title={"My Carts"} />

        <div className="shadow p-5 rounded-md text-center place-content-center py-20">
          <img src={course} alt="" className="mx-auto my-2" />
          <SectionTitle title={"You haven't added any course in cart yet :("} />

          <p>Add skills now to make your profile stand out from the rest.</p>
          <Link to="/courses">
            <button className="text-white bg-[#333] px-5 py-2 rounded-md mt-5">
              Explore Courses
            </button>
          </Link>
        </div>
        <HelpBanner />
      </div>
    );
  }
  console.log(carts);

  return (
    <>
      <div className="mb-5 flex justify-between items-center">
        <DashboardSectionTitle title={"My Cart"} />
        <h5 className="text-xl text-slate-500">
          You have to pay:
          <span className="text-black font-semibold"> {totalPrice} BDT</span>
        </h5>
      </div>
      <CartsTable
        headers={tableHeaders}
        data={carts}
        handleDelete={handleDelete}
      />
      <div className="flex items-center justify-between mt-5">
        <Link to="/courses">
          <button className="text-white bg-[#333] px-5 py-2 rounded-md">
            Explore Courses
          </button>
        </Link>
        <Link to="/dashboard/payments/stripe">
          <PaymentButton />
        </Link>
      </div>
    </>
  );
}
