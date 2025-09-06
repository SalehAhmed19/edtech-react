import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  courses: [],
  isError: false,
  searchItem: "",
};

// get action
export const getCourses = createAsyncThunk("courses", async () => {
  const response = await axios.get(
    // "https://edtech-react.vercel.app/api/courses"
    "http://localhost:4000/api/courses"
  );

  return response.data;
});

const CoursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCourses.fulfilled, (state, action) => {
      state.courses = action.payload;
      state.isLoading = false;
    });

    builder.addCase(getCourses.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getCourses.rejected, (state, action) => {
      state.isError = true;
      console.log(action.payload);
    });
  },
});

export default CoursesSlice.reducer;
