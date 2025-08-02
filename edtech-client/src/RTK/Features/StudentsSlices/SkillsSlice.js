import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  skills: [],
  isError: false,
};

export const addSkills = createAsyncThunk(
  "addSkills",
  async (skills, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/skills/post-skills",
        skills
      );
      console.log(response.data);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

export const getSkills = createAsyncThunk(
  "getSkills",
  async (email, { rejectWithValue }) => {
    console.log(email);
    try {
      const response = await axios.get(
        `http://localhost:4000/api/skills?email=${email}`
      );

      console.log(response.data);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

const SkillsSlice = createSlice({
  name: "skills",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    // post
    builder.addCase(addSkills.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addSkills.fulfilled, (state, action) => {
      state.isLoading = false;
      state.skills.push(action.payload);
    });
    builder.addCase(addSkills.rejected, (state, action) => {
      state.isLoading = true;
      state.isError = true;
      console.log(action.payload);
    });

    // get
    builder.addCase(getSkills.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getSkills.fulfilled, (state, action) => {
      state.isLoading = false;
      state.skills = action.payload;
    });
    builder.addCase(getSkills.rejected, (state, action) => {
      state.isLoading = true;
      state.isError = true;
      console.log(action.payload);
    });
  },
});

export default SkillsSlice.reducer;
