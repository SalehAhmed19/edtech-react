import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  users: [],
  singleUser: {},
  isError: false,
};

export const getUser = createAsyncThunk(
  "getUser",
  async (email, { rejectWithValue }) => {
    console.log(email);
    try {
      const response = await axios.get(
        `http://localhost:4000/api/get/user${email}`
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
      console.log(action);
      state.isLoading = false;
      state.singleUser = action.meta.arg;
    });
    builder.addCase(getUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUser.rejected, (state, action) => {
      state.isLoading = true;
      console.log(action.payload);
    });
  },
});

export default UserSlice.reducer;
