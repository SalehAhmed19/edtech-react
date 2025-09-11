import { useDispatch, useSelector } from "react-redux";
import { getCourses } from "../../RTK/Features/CoursesSlice/CoursesSlice";
import { useEffect } from "react";
import useAxiosPublic from "../Axios/useAxiosPublic";

export default function useGetCourses() {
  const axiosPublic = useAxiosPublic();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCourses({ axiosPublic }));
  }, [dispatch, axiosPublic]);

  const { courses, isLoading } = useSelector((state) => state.CoursesSlice);

  return { courses, isLoading };
}
