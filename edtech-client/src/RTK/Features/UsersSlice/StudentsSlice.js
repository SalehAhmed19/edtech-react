import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  students: [],
  student: null,
  isError: false,
  searchItem: "",
};

// add users
export const postStudent = createAsyncThunk(
  "users",
  async ({ userInfo, axiosPublic }, { rejectWithValue }) => {
    // console.log({ userInfo });
    try {
      const response = await axiosPublic.post(
        // "https://edtech-react.vercel.app/api/students/post-student",
        "/students/post-student",
        userInfo
      );

      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

// get students
export const getAllStudents = createAsyncThunk(
  "students",
  async ({ axiosPublic }) => {
    try {
      const response = await axiosPublic.get(
        // "https://edtech-react.vercel.app/api/students"
        "/students"
      );

      return response.data;
    } catch (err) {
      return; // console.log(err);
    }
  }
);

// get student
export const getStudent = createAsyncThunk(
  "student",
  async ({ email, axiosPublic }, { rejectWithValue }) => {
    try {
      const response = await axiosPublic.get(
        // `https://edtech-react.vercel.app/api/students/${email}`
        `/students?email=${email}`
      );

      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

export const updateStudentDetails = createAsyncThunk(
  "updateStudentDetails",
  async ({ email, updatedDetails, axiosPublic }, { rejectWithValue }) => {
    try {
      const response = await axiosPublic.patch(
        `/students/update-student-details?email=${email}`,
        updatedDetails
      );

      // console.log(response.data);
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
      // console.log(action);
      state.students.push(action.meta.arg);
    });
    builder.addCase(postStudent.rejected, (state) => {
      state.isLoading = true;
      // // console.log(action.payload);
    });

    builder.addCase(getStudent.pending, (state) => {
      state.isLoading = true;
    });
    // get students
    builder.addCase(getStudent.fulfilled, (state, action) => {
      state.isLoading = false;
      state.student = action.payload[0];
    });
    builder.addCase(getStudent.rejected, (state, action) => {
      state.isError = true;
      // console.log(action.payload);
    });

    // update student info
    builder.addCase(updateStudentDetails.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateStudentDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.student = action.meta.arg.updatedDetails;
    });
    builder.addCase(updateStudentDetails.rejected, (state, action) => {
      state.isError = true;
      // console.log(action.payload);
    });
  },
});

export default StudentSlice.reducer;
