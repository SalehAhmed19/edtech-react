import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStudent } from "../../RTK/Features/UsersSlice/StudentsSlice";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase.config";

export default function useGetStudent() {
  const [user] = useAuthState(auth);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStudent(user?.email));
  }, [user, dispatch]);

  const { students, isLoading } = useSelector((state) => state.StudentSlice);

  return { students: students, isLoading: isLoading };
}
