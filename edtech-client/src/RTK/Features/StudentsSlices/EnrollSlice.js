import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  enrolled: [],
  isError: false,
};

export const getEnrolledCourses = createAsyncThunk(
  "getEnrolledCourses",
  async ({ email, axiosPrivate }, { rejectWithValue }) => {
    try {
      const response = await axiosPrivate.get(
        `/enrolled-courses?email=${email}`
      );

      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

const EnrollSlice = createSlice({
  name: "enrollCourses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getEnrolledCourses.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getEnrolledCourses.fulfilled, (state, action) => {
      state.isLoading = false;
      state.enrolled = action.payload;
    });
    builder.addCase(getEnrolledCourses.rejected, (state, action) => {
      state.isError = true;
      console.log(action.payload);
    });
  },
});

export default EnrollSlice.reducer;
