import { createBrowserRouter } from "react-router-dom";
import Home from "../Home";
import App from "../../App";
import Login from "../Login";
import Register from "../Register";
import NotFound from "../NotFound";
import CourseDetails from "../CourseDetails";
import UserProfile from "../UserProfile";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/courseDetails/:id",
        element: <CourseDetails />,
      },
      {
        path: "/myprofile",
        element: <UserProfile />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  //   {
  //     path: "/dashboard",
  //     element: <Dashboard />,
  //     children: [
  //       {
  //         path: "/dashboard",
  //         element: <AllFood />,
  //       },
  //       {
  //         path: "/dashboard/add",
  //         element: <FromPage />,
  //       },
  //     ],
  //   },
]);
export default routes;
