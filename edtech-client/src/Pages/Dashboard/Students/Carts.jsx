import { Link } from "react-router-dom";
import Loader from "../../../Components/Loader/Loader";
import DashboardSectionTitle from "../../../Components/SectionTitle/DashboardSectionTitle";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import CartsTable from "../../../Components/UI/Table/CartsTable";
import useGetCarts from "../../../Hooks/Students/useGetCarts";
import course from "../../../assets/images/course.svg";
import HelpBanner from "../HelpBanner";
import CartsItems from "./CartsItems";

export default function Carts() {
  const tableHeaders = ["", "Course Name / ID", "Price", "Status", ""];

  const { carts, isLoading } = useGetCarts();
  console.log(carts);
  if (isLoading) {
    return <Loader />;
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
      {carts.length}

      <CartsTable headers={tableHeaders} data={carts} />
    </>
  );
}
