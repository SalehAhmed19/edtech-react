import { configureStore } from "@reduxjs/toolkit";
import CoursesReducer from "../Features/CoursesSlice/CoursesSlice";

export const store = configureStore({
  reducer: {
    CoursesSlice: CoursesReducer,
  },
});
