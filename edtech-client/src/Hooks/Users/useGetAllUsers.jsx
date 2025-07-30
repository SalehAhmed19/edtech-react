import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllUsers,
  getUser,
} from "../../RTK/Features/UsersSlice/AllUsersSlice";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase.config";

export default function useGetAllUsers() {
  const [user] = useAuthState(auth);
  const email = user?.email;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getUser(email));
  }, [email, dispatch]);

  const { isLoading, users, singleUser } = useSelector(
    (state) => state.AllUsersSlice
  );
  return { isLoading, users, singleUser: singleUser };
}
