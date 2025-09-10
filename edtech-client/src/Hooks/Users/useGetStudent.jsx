import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStudent } from "../../RTK/Features/UsersSlice/StudentsSlice";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase.config";

export default function useGetStudent() {
  const [user] = useAuthState(auth);
  const dispatch = useDispatch();

  const { student, isLoading } = useSelector((state) => state.StudentsSlice);

  useEffect(() => {
    if (user && user.email) {
      dispatch(getStudent(user.email));
    }
  }, [user, dispatch]);

  return { student, isLoading };
}
