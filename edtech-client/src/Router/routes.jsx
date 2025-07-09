import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Authentication/Login/Login";
import SignUp from "../Pages/Authentication/SignUp/SignUp";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/authentication/login", element: <Login /> },
      { path: "/authentication/signup", element: <SignUp /> },
    ],
  },
]);

export default routes;
