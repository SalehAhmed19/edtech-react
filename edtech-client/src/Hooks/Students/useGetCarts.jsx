import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCarts } from "../../RTK/Features/StudentsSlices/cartsSlice";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase.config";
import useAxiosPrivate from "../Axios/useAxiosPrivate";

export default function useGetCarts() {
  const [user] = useAuthState(auth);
  const email = user?.email;
  const dispatch = useDispatch();
  const axiosPrivate = useAxiosPrivate();
  useEffect(() => {
    if (email) {
      dispatch(getCarts({ email, axiosPrivate }));
    }
  }, [email, dispatch, axiosPrivate]);

  const { carts, isLoading } = useSelector((state) => state.CartsSlice);
  return { carts: carts, isLoading: isLoading };
}
