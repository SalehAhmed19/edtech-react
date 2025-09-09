import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  reviews: [],
  isError: false,
};

export const getReviews = createAsyncThunk("getReviews", async () => {
  const response = await axios.get("http://localhost:4000/api/reviews");

  return response.data;
});

const ReviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getReviews.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getReviews.fulfilled, (state, action) => {
      state.isLoading = false;
      state.reviews = action.payload;
    });
    builder.addCase(getReviews.rejected, (state, action) => {
      state.isError = true;
      console.log(action.payload);
    });
  },
});

export default ReviewsSlice.reducer;
