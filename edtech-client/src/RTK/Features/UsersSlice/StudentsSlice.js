import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  students: [],
  isError: false,
  searchItem: "",
};

// add users
export const postStudent = createAsyncThunk("users", async (data) => {
  const response = await axios.post(
    "http://localhost:4000/api/users/students",
    data
  );

  return response.data;
});

// get students
export const getAllStudents = createAsyncThunk("students", async () => {
  const response = await axios.get("http://localhost:4000/api/users/students");

  return response.data;
});

// get students
export const getStudent = createAsyncThunk("students", async (data) => {
  const response = await axios.get(
    `http://localhost:4000/api/users/students/${data}`
  );

  return response.data;
});

const StudentsSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postStudent.fulfilled, (state, action) => {
      state.isLoading = false;
      state.students.push(action.payload);
      // const newStudent = action.payload; // The student object returned from the backend

      // // Check if a student with the same _id (or other unique identifier) already exists
      // const isDuplicate = state.students.filter(
      //   (student) => student._id === newStudent._id
      // );

      // if (!isDuplicate) {
      //   // If it's not a duplicate, then push it to the array
      //   state.students.push(newStudent);
      //   console.log("New student added:", newStudent);
      // } else {
      //   // Optional: Log a message or handle the duplicate case
      //   console.warn("Attempted to add a duplicate student:", newStudent);
      //   // You might also want to set a state for a notification like:
      //   // state.message = "Student already exists.";
      // }
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
      state.students = action.payload;
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

export default StudentsSlice.reducer;
