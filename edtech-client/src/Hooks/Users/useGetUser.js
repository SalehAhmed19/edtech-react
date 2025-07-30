import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../RTK/Features/UsersSlice/AllUsersSlice";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase.config";

export default function useGetUser() {
  const [user] = useAuthState(auth);
  const email = user?.email;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser(email));
  }, [email, dispatch]);

  const { isLoading, singleUser } = useSelector((state) => state.AllUsersSlice);
  return { isLoading, singleUser: singleUser };
}
