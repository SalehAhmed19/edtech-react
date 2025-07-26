import { configureStore } from "@reduxjs/toolkit";
import CoursesReducer from "../Features/CoursesSlice/CoursesSlice";
import StudentsReducer from "../Features/UsersSlice/StudentsSlice";
import CartsReducer from "../Features/StudentsSlices/CartsSlice";
import SkillsReducer from "../Features/StudentsSlices/SkillsSlice";

export const store = configureStore({
  reducer: {
    CoursesSlice: CoursesReducer,
    StudentSlice: StudentsReducer,
    CartsSlice: CartsReducer,
    SkillsSlice: SkillsReducer,
  },
});
