import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase.config";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getSkills } from "../../RTK/Features/StudentsSlices/SkillsSlice";

export default function useGetSkills() {
  const [user] = useAuthState(auth);
  const dispatch = useDispatch();
  const email = user?.email;

  useEffect(() => {
    email && dispatch(getSkills(email));
  }, [email, dispatch]);

  const { isLoading, skills } = useSelector((state) => state.SkillsSlice);
  return { isLoading: isLoading, skills: skills };
}
