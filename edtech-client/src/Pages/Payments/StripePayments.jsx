import { useEffect, useState } from "react";
import DashboardSectionTitle from "../../Components/SectionTitle/DashboardSectionTitle";
import PaymentLoader from "../../Components/UI/PaymentLoader/PaymentLoader";
import PaymentCard from "../../Components/UI/PaymentCard/PaymentCard";
import StripeCheckoutForm from "../../Components/Forms/StripeCheckoutForm";
import { Fade } from "react-awesome-reveal";
import HelpBanner from "../Dashboard/HelpBanner";

export default function StripePayments() {
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
      <HelpBanner />
    </div>
  );
}
