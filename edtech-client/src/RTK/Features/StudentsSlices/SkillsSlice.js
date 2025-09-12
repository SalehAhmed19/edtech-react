import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  skills: [],
  isError: false,
};

export const addSkills = createAsyncThunk(
  "addSkills",
  async ({ skill, axiosPublic }, { rejectWithValue }) => {
    try {
      const response = await axiosPublic.post(
        // "https://edtech-react.vercel.app/api/skills/post-skills",
        "/skills/post-skills",
        skill
      );
      // // console.log(response.data);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

export const getSkills = createAsyncThunk(
  "getSkills",
  async ({ email, axiosPublic }, { rejectWithValue }) => {
    // // console.log(email);
    try {
      const response = await axiosPublic.get(
        // `https://edtech-react.vercel.app/api/skills?email=${email}`
        `/skills?email=${email}`
      );

      // // console.log(response.data);
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
      // console.log(action);
      state.isLoading = false;
      state.skills.push(action.payload);
    });
    builder.addCase(addSkills.rejected, (state, action) => {
      state.isLoading = true;
      state.isError = true;
      // console.log(action.payload);
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
      // console.log(action.payload);
    });
  },
});

export default SkillsSlice.reducer;
