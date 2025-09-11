import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStudent } from "../../RTK/Features/UsersSlice/StudentsSlice";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase.config";
import useAxiosPublic from "../Axios/useAxiosPublic";

export default function useGetStudent() {
  const axiosPublic = useAxiosPublic();
  const [user] = useAuthState(auth);
  const email = user?.email;
  const dispatch = useDispatch();

  const { student, isLoading } = useSelector((state) => state.StudentsSlice);

  useEffect(() => {
    if (user && email) {
      dispatch(getStudent({ email, axiosPublic }));
    }
  }, [user, email, dispatch, axiosPublic]);

  return { student, isLoading };
}
