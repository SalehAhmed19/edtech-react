import { configureStore } from "@reduxjs/toolkit";
import CoursesReducer from "../Features/CoursesSlice/CoursesSlice";
import StudentsReducer from "../Features/UsersSlice/StudentsSlice";

export const store = configureStore({
  reducer: {
    CoursesSlice: CoursesReducer,
    StudentSlice: StudentsReducer,
  },
});
