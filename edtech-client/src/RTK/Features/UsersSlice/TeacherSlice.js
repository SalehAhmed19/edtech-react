import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  teachers: [],
  teacher: {},
  isError: false,
};

// post teacher
export const postTeacher = createAsyncThunk(
  "postTeacher",
  async (teacher, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/teachers/post-teacher",
        teacher
      );

      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

// get teacher
export const getTeacher = createAsyncThunk(
  "teachers",
  async (email, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/teachers/${email}`
      );

      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

const TeacherSlice = createSlice({
  name: "teachers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // post teacher
    builder.addCase(postTeacher.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(postTeacher.fulfilled, (state, action) => {
      state.isLoading = false;
      state.teachers.push(action.payload);
    });
    builder.addCase(postTeacher.rejected, (state, action) => {
      state.isError = true;
      state.isLoading = true;
      console.log(action.payload);
    });

    // get teacher
    builder.addCase(getTeacher.fulfilled, (state, action) => {
      state.isLoading = false;
      state.teacher = action.payload;
    });
    builder.addCase(getTeacher.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getTeacher.rejected, (state, action) => {
      state.isLoading = true;
      state.isError = true;
      console.log(action.payload);
    });
  },
});

export default TeacherSlice.reducer;
