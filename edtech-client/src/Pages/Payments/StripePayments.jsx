import { useEffect, useState } from "react";
import DashboardSectionTitle from "../../Components/SectionTitle/DashboardSectionTitle";
import PaymentLoader from "../../Components/UI/PaymentLoader/PaymentLoader";
import PaymentCard from "../../Components/UI/PaymentCard/PaymentCard";
import StripeCheckoutForm from "../../Components/Forms/StripeCheckoutForm";
import { Fade } from "react-awesome-reveal";
import HelpBanner from "../Dashboard/HelpBanner";
import useGetCarts from "../../Hooks/Students/useGetCarts";

export default function StripePayments() {
  const { carts } = useGetCarts();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setInterval(() => {
      setLoading(false);
    }, 2500);
  }, []);

  if (loading) {
    return <PaymentLoader />;
  }
  return (
    <>
      <div className="grid grid-cols-2 gap-5">
        <div>
          {carts.map((course) => (
            <div className="border border-gray-200 rounded-xl p-2 flex flex-col gap-5 mb-5">
              <img
                src={course.image}
                alt="course-thumbnail"
                className="rounded-xl"
              />
              <h3 className="text-primary font-bold text-2xl">
                {course.courseName}
                <span
                  className="text-secondary block"
                  style={{ fontSize: "14px" }}
                >
                  {course.courseId}
                </span>
              </h3>

              <h5 className="font-bold text-xl">
                Course Fee: {course.courseFee}{" "}
                <span className="text-primary">BDT</span>
              </h5>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-10">
          <Fade direction="up" cascade={true} duration={800}>
            <h2 className="text-[45px] font-bold">
              <span className="text-primary">Payment</span>
            </h2>
          </Fade>
          <div className="flex gap-5 justify-end">
            <div className="w-full">
              <StripeCheckoutForm />
            </div>
            <PaymentCard />
          </div>
        </div>
      </div>
      <HelpBanner />
    </>
  );
}
