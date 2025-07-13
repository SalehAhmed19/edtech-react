import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Authentication/Login/Login";
import SignUp from "../Pages/Authentication/SignUp/SignUp";
import Courses from "../Pages/Courses/Courses/Courses";
import Course from "../Pages/Courses/Course/Course";
import Contact from "../Pages/Contact/Contact";
import BecomeInstructorPage from "../Pages/BecomeInstructorPage/BecomeInstructorPage";

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
]);

export default routes;
