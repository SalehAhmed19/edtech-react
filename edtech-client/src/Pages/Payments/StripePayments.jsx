import { useEffect, useState } from "react";
import DashboardSectionTitle from "../../Components/SectionTitle/DashboardSectionTitle";
import PaymentLoader from "../../Components/UI/PaymentLoader/PaymentLoader";
import PaymentCard from "../../Components/UI/PaymentCard/PaymentCard";
import StripeCheckoutForm from "../../Components/Forms/StripeCheckoutForm";

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
    <div>
      <DashboardSectionTitle title={"Stripe Payments"} />
      <div className="flex gap-5 justify-end">
        <div className="w-full">
          <StripeCheckoutForm />
        </div>
        <PaymentCard />
      </div>
    </div>
  );
}
