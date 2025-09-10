import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase.config";
import { useDispatch, useSelector } from "react-redux";
import useAxiosPrivate from "../Axios/useAxiosPrivate";
import { useEffect } from "react";
import { getEnrolledCourses } from "../../RTK/Features/StudentsSlices/EnrollSlice";

export default function useEnrolledCourses() {
  const [user] = useAuthState(auth);
  const email = user?.email;

  const dispatch = useDispatch();
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    if (email) {
      dispatch(getEnrolledCourses({ email, axiosPrivate }));
    }
  }, [email, dispatch, axiosPrivate]);

  const { isLoading, enrolled, isError } = useSelector(
    (state) => state.EnrollSlice
  );
  return { isLoading: isLoading, enrolled: enrolled, isError: isError };
}
