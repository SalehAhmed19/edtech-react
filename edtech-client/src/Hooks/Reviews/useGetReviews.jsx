import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReviews } from "../../RTK/Features/ReviewsSlices/ReviewSlice";

export default function useGetReviews() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getReviews());
  }, [dispatch]);

  const { isLoading, reviews, isError } = useSelector(
    (state) => state.ReviewSlice
  );
  return { isLoading: isLoading, reviews: reviews, isError: isError };
}
