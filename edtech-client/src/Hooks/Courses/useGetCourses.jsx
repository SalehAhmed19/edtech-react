import { useDispatch, useSelector } from "react-redux";
import { getCourses } from "../../RTK/Features/CoursesSlice/CoursesSlice";
import { useEffect } from "react";

export default function useGetCourses() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCourses());
  }, [dispatch]);

  const { courses, isLoading } = useSelector((state) => state.CoursesSlice);

  return { courses, isLoading };
}
