import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../RTK/Features/UsersSlice/AllUsersSlice";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase.config";
import useAxiosPublic from "../Axios/useAxiosPublic";

export default function useGetUser() {
  const axiosPublic = useAxiosPublic();
  const [user] = useAuthState(auth);
  const email = user?.email;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser({ email, axiosPublic }));
  }, [email, dispatch, axiosPublic]);

  const { isLoading, singleUser } = useSelector((state) => state.UserSlice);
  return { isLoading, singleUser: singleUser };
}
