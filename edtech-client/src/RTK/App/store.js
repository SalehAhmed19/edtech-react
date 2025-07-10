import { configureStore } from "@reduxjs/toolkit";
import CoursesReducer from "../Features/CoursesSlice/CoursesSlice";
import UsersReducer from "../Features/UsersSlice/UsersSlice";

export const store = configureStore({
  reducer: {
    CoursesSlice: CoursesReducer,
    UsersSlice: UsersReducer,
  },
});
