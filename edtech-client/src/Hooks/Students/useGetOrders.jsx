import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase.config";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getOrders } from "../../RTK/Features/StudentsSlices/OrderSlice";
import useAxiosPublic from "../Axios/useAxiosPublic";

export default function useGetOrders() {
  const axiosPublic = useAxiosPublic();
  const [user] = useAuthState(auth);
  const email = user?.email;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrders({ email, axiosPublic }));
  }, [email, dispatch, axiosPublic]);

  const { isLoading, orders, isError } = useSelector(
    (state) => state.OrderSlice
  );
  return { isLoading: isLoading, orders: orders, isError: isError };
}
