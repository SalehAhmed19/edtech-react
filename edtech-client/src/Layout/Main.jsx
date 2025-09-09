import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar/Navbar";
import Footer from "../Components/Shared/Footer/Footer";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import LoadingScreen from "../Components/UI/LoadingScreen";

export default function Main() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setInterval(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <Navbar />
          <Outlet />
          <Footer />
          <Toaster />
        </>
      )}
    </div>
  );
}
