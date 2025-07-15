import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCarts } from "../../RTK/Features/StudentsSlices/cartsSlice";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase.config";

export default function useGetCarts() {
  const [user] = useAuthState(auth);
  const email = user?.email;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCarts(email));
  }, [email, dispatch]);

  const { carts, isLoading } = useSelector((state) => state.CartsSlice);
  return { carts: carts, isLoading: isLoading };
}
