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
import AddSkills from "../Pages/AddSkills/AddSkills";
import GetStarted from "../Pages/BecomeInstructorPage/GetStarted";
import BecomeInstructorLayout from "../Layout/BecomeInstructorLayout";
import StudentReview from "../Pages/Dashboard/Teachers/StudentReview";
import Assignments from "../Pages/Dashboard/Teachers/Assignments";
import Resources from "../Pages/Dashboard/Teachers/Resources";
import Support from "../Pages/Dashboard/Teachers/Support";
import TeachersHome from "../Pages/Dashboard/Teachers/TeachersHome";
import TeacherDetails from "../Pages/Dashboard/Teachers/TeacherProfile/TeacherDetails";
import TeachersProfile from "../Pages/Dashboard/Teachers/TeacherProfile/TeachersProfile";
import AdminLayout from "../Layout/AdminLayout";
import AdminHome from "../Pages/Admin/AdminHome";
import AllCourses from "../Pages/Admin/AllCourses";
import AddCourses from "../Pages/Admin/AddCourses";
import ViewAllOrders from "../Pages/Admin/ViewAllOrders";
import AllUsers from "../Pages/Admin/AllUsers";
import CheckoutStripeEmbeded from "../Pages/Payments/CheckoutStripeEmbeded";
import CheckoutSessionCompletion from "../Pages/Payments/CheckoutSessionCompletion";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/courses", element: <Courses /> },
      { path: "/contact", element: <Contact /> },
      { path: "/checkout/return", element: <CheckoutSessionCompletion /> },
      {
        path: "/become-instructor",
        element: <BecomeInstructorLayout />,
        children: [
          { path: "/become-instructor", element: <BecomeInstructorPage /> },
          { path: "get-started", element: <GetStarted /> },
        ],
      },
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
      { path: "student-home", element: <StudentsHome /> },
      { path: "student-profile", element: <StudentsProfile /> },
      { path: "student-courses", element: <StudentCourses /> },
      { path: "student-skillset", element: <StudentsSkillSet /> },
      { path: "add-skillset", element: <AddSkills /> },
      { path: "carts", element: <Carts /> },
      { path: "order-history", element: <OrderHistory /> },
      { path: "certificates", element: <Certificates /> },
      // { path: "payments/stripe", element: <StripePayments /> },
      { path: "payments/stripe", element: <CheckoutStripeEmbeded /> },
      { path: "teacher-home", element: <TeachersHome /> },
      { path: "teacher-profile", element: <TeachersProfile /> },
      { path: "assignments", element: <Assignments /> },
      { path: "resources", element: <Resources /> },
      { path: "student-review", element: <StudentReview /> },
      { path: "support", element: <Support /> },
    ],
  },
  {
    path: "/control-panel/secure/admin",
    element: (
      <ProtectedRoute>
        <AdminLayout />
      </ProtectedRoute>
    ),
    children: [
      { path: "/control-panel/secure/admin", element: <AdminHome /> },
      { path: "view-all-courses", element: <AllCourses /> },
      { path: "add-course", element: <AddCourses /> },
      { path: "view-all-users", element: <AllUsers /> },
      { path: "view-all-orders", element: <ViewAllOrders /> },
    ],
  },
]);

export default routes;
