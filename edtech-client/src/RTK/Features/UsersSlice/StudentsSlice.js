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
        // "https://edtech-react.vercel.app/api/students/post-student",
        "http://localhost:4000/api/students/post-student",
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
      // "https://edtech-react.vercel.app/api/students"
      "http://localhost:4000/api/students"
    );

    return response.data;
  } catch (err) {
    return console.log(err);
  }
});

// get students
export const getStudent = createAsyncThunk(
  "students",
  async (email, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        // `https://edtech-react.vercel.app/api/students/${email}`
        `http://localhost:4000/api/students/${email}`
      );

      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

const StudentSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postStudent.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(postStudent.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log(action);
      state.students.push(action.meta.arg);
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

export default StudentSlice.reducer;
