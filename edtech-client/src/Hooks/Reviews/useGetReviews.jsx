import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReviews } from "../../RTK/Features/ReviewsSlices/ReviewSlice";
import useAxiosPublic from "../Axios/useAxiosPublic";

export default function useGetReviews() {
  const axiosPublic = useAxiosPublic();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getReviews({ axiosPublic }));
  }, [dispatch, axiosPublic]);

  const { isLoading, reviews, isError } = useSelector(
    (state) => state.ReviewSlice
  );
  return { isLoading: isLoading, reviews: reviews, isError: isError };
}
