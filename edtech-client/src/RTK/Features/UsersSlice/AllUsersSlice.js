import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  users: [],
  singleUser: {},
  isError: false,
};

export const getAllUsers = createAsyncThunk(
  "getAllUsers",
  async ({ axiosPublic }) => {
    try {
      const response = await axiosPublic.get(
        // "https://edtech-react.vercel.app/api/users"
        "/users"
      );

      return response.data;
    } catch (err) {
      return console.log(err);
    }
  }
);

export const getUser = createAsyncThunk(
  "getUser",
  async ({ email, axiosPublic }, { rejectWithValue }) => {
    // console.log(email);
    try {
      const response = await axiosPublic.get(
        // `https://edtech-react.vercel.app/api/users/single-user?email=${email}`
        `/users/single-user?email=${email}`
      );

      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

const AllUsersSlice = createSlice({
  name: "allUsers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // get users
    builder.addCase(getAllUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
    });
    builder.addCase(getAllUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      console.log(action.payload);
    });

    // get student
    builder.addCase(getUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      // console.log(action);
      state.isLoading = false;
      state.singleUser = action.payload;
    });
    builder.addCase(getUser.rejected, (state, action) => {
      state.isLoading = false;
      console.log(action.payload);
    });
  },
});

export default AllUsersSlice.reducer;
