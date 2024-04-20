import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import About from "../pages/about/About";
import Error from "../pages/error/Error";
import Gallery from "../pages/gallery/Gallery";
import Home from "../pages/home/Home";
import Learn from "../pages/learn/Learn";
import Login from "../pages/login_register/Login";
import Register from "../pages/login_register/Register";
import Plantdetails from "../pages/plantdetails/Plantdetails";
import ProfileUpdate from "../pages/profile/ProfileUpdate";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
        loader: () => fetch("plant.json"),
      },
      {
        path: "/plantdetails/:id",
        element: (
          <PrivateRoute>
            <Plantdetails />
          </PrivateRoute>
        ),
        loader: () => fetch("/plant.json"),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/update-profile",
        element: (
          <PrivateRoute>
            <ProfileUpdate />
          </PrivateRoute>
        ),
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/learn",
        element: <PrivateRoute><Learn /></PrivateRoute>,
      },
    ],
  },
]);

export default router;
