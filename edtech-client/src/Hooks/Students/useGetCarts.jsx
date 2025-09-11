import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCarts } from "../../RTK/Features/StudentsSlices/cartsSlice";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase.config";
import useAxiosPublic from "../Axios/useAxiosPublic";

export default function useGetCarts() {
  const [user] = useAuthState(auth);
  const email = user?.email;
  const dispatch = useDispatch();
  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    if (email) {
      dispatch(getCarts({ email, axiosPublic }));
    }
  }, [email, dispatch, axiosPublic]);

  const { carts, isLoading, totalPrice } = useSelector(
    (state) => state.CartsSlice
  );
  return { carts: carts, isLoading: isLoading, totalPrice: totalPrice };
}
