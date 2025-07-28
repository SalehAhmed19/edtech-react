import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  students: [],
  student: {},
  isError: false,
  searchItem: "",
};

// add users
export const postStudent = createAsyncThunk(
  "users",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/users/students",
        data
      );

      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

// get students
export const getAllStudents = createAsyncThunk("students", async () => {
  try {
    const response = await axios.get(
      "http://localhost:4000/api/users/students"
    );

    return response.data;
  } catch (err) {
    return console.log(err);
  }
});

// get students
export const getStudent = createAsyncThunk(
  "students",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/users/students/${data}`
      );

      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

const UsersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postStudent.fulfilled, (state, action) => {
      state.isLoading = false;
      state.students.push(action.payload);
    });
    builder.addCase(postStudent.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(postStudent.rejected, (state) => {
      state.isLoading = true;
      // console.log(action.payload);
    });

    // get students
    builder.addCase(getStudent.fulfilled, (state, action) => {
      state.isLoading = false;
      state.student = action.payload;
    });
    builder.addCase(getStudent.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getStudent.rejected, (state, action) => {
      state.isLoading = true;
      console.log(action.payload);
    });
  },
});

export default UsersSlice.reducer;
