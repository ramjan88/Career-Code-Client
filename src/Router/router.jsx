import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register";
import SignIn from "../Pages/SignIn";
import JobDetails from "../Pages/JobDetails/JobDetails";
import PrivetRouts from "../Routes/PrivetRouts";
import JobApply from "../Pages/JobApply/JobApply";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/jobs/:id",
        element: (
          <PrivetRouts>
            <JobDetails></JobDetails>
          </PrivetRouts>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/jobs/${params.id}`),
      },
      {
        path: "/jobapply/:id",
       
        element: (
          <PrivetRouts>
            <JobApply></JobApply>
          </PrivetRouts>
        ),
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/signin",
        Component: SignIn,
      },
    ],
  },
  {
    path: "/*",
    element: <h1>Page not Found</h1>,
  },
]);

export default router;
