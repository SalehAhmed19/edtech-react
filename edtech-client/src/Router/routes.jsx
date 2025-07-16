import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Authentication/Login/Login";
import SignUp from "../Pages/Authentication/SignUp/SignUp";
import Courses from "../Pages/Courses/Courses/Courses";
import Course from "../Pages/Courses/Course/Course";
import Contact from "../Pages/Contact/Contact";
import BecomeInstructorPage from "../Pages/BecomeInstructorPage/BecomeInstructorPage";
import Dashboard from "../Layout/Dashboard";
import StudentsHome from "../Pages/Dashboard/Students/StudentsHome";
import StudentsSkillSet from "../Pages/Dashboard/Students/StudentsSkillSet";
import OrderHistory from "../Pages/Dashboard/Students/OrderHistory";
import Certificates from "../Pages/Dashboard/Students/Certificates";
import StudentCourses from "../Pages/Dashboard/Students/StudentCourses";
import StudentsProfile from "../Pages/Dashboard/Students/StudentsProfile/StudentsProfile";
import Carts from "../Pages/Dashboard/Students/Carts";
import ProtectedRoute from "./Routes/ProtectedRoute";
import StripePayments from "../Pages/Payments/StripePayments";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/courses", element: <Courses /> },
      { path: "/contact", element: <Contact /> },
      { path: "/become-instructor", element: <BecomeInstructorPage /> },
      { path: "/courses/:id", element: <Course /> },
      { path: "/authentication/login", element: <Login /> },
      { path: "/authentication/signup", element: <SignUp /> },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
    children: [
      { path: "/dashboard", element: <StudentsHome /> },
      { path: "student-profile", element: <StudentsProfile /> },
      { path: "student-courses", element: <StudentCourses /> },
      { path: "student-skillset", element: <StudentsSkillSet /> },
      { path: "carts", element: <Carts /> },
      { path: "order-history", element: <OrderHistory /> },
      { path: "certificates", element: <Certificates /> },
      { path: "payments/stripe", element: <StripePayments /> },
    ],
  },
]);

export default routes;
