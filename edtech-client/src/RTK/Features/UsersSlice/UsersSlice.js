import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  users: [],
  isError: false,
  searchItem: "",
};

// add users
export const postUsers = createAsyncThunk("users", async (data) => {
  const response = await axios.post(
    "https://68689289d5933161d70be704.mockapi.io/users/",
    data
  );

  return response.data;
});

const UsersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.users.push(action.payload);
    });
    builder.addCase(postUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(postUsers.rejected, (state, action) => {
      state.isLoading = true;
      console.log(action.payload);
    });
  },
});

export default UsersSlice.reducer;
