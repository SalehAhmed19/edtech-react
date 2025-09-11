import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase.config";
import { getTeacher } from "../../RTK/Features/UsersSlice/TeacherSlice";
import useAxiosPublic from "../Axios/useAxiosPublic";

export default function useGetTeacher() {
  const axiosPublic = useAxiosPublic();
  const [user] = useAuthState(auth);
  const email = user?.email;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTeacher({ email, axiosPublic }));
  }, [email, dispatch, axiosPublic]);

  const { teacher, isLoading } = useSelector((state) => state.TeacherSlice);
  // console.log(teacher);

  return { teacher: teacher, isLoading: isLoading };
}
