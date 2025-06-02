import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register";
import SignIn from "../Pages/SignIn";
import JobDetails from "../Pages/JobDetails/JobDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: '/jobs/:id',
        Component: JobDetails
      },
      {
        path: '/register',
        Component: Register
      },{
        path: '/signin',
        Component: SignIn
      }
    ]
  },
]);

export default router;
