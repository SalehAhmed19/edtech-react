import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  users: [],
  singleUser: {},
  isError: false,
};

export const getUser = createAsyncThunk(
  "getUser",
  async ({ email, axiosPublic }, { rejectWithValue }) => {
    // console.log(email);
    try {
      const response = await axiosPublic.get(
        // `https://edtech-react.vercel.app/api/users?email=${email}`
        `/users/single-user?email=${email}`
      );

      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

const UserSlice = createSlice({
  name: "allUsers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // get student
    builder.addCase(getUser.fulfilled, (state, action) => {
      // console.log(action);
      state.isLoading = false;
      state.singleUser = action.meta.arg;
    });
    builder.addCase(getUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUser.rejected, (state, action) => {
      state.isLoading = true;
      // console.log(action.payload);
    });
  },
});

export default UserSlice.reducer;
