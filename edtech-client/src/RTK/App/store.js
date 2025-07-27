import { configureStore } from "@reduxjs/toolkit";
import CoursesReducer from "../Features/CoursesSlice/CoursesSlice";
import StudentsReducer from "../Features/UsersSlice/StudentsSlice";
import CartsReducer from "../Features/StudentsSlices/CartsSlice";
import SkillsReducer from "../Features/StudentsSlices/SkillsSlice";
import PaymentReducer from "../Features/StudentsSlices/PaymentSlice";
import OrderReducer from "../Features/StudentsSlices/OrderSlice";

export const store = configureStore({
  reducer: {
    CoursesSlice: CoursesReducer,
    StudentSlice: StudentsReducer,
    CartsSlice: CartsReducer,
    SkillsSlice: SkillsReducer,
    PaymentSlice: PaymentReducer,
    OrderSlice: OrderReducer,
  },
});
