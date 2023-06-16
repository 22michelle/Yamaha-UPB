import React from "react";
import ReactDOM from "react-dom/client";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { Navbar } from "./components/common/Navbar.jsx";
import { Home } from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Status from "./pages/Status.jsx";
import Detailsstatus from "./pages/Detailsstatus.jsx";
<<<<<<< HEAD
import Detail from "./pages/Detailsstatus.jsx";
import axios from "axios";
import { Provider } from "react-redux";
=======
import axios from "axios";
import { Provider, useDispatch, useSelector } from "react-redux";
>>>>>>> 4bdec4053e6f392d051a916cf08d19840b39ac26
import store from "./redux/store.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        index: true,
        element: <Home />,
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
        path: "/status",
        element: <Status />,
      },
      {
        path: "/details/:id",
        element: <Detailsstatus />,
      },
    ],
  },
]);
<<<<<<< HEAD
=======

>>>>>>> 4bdec4053e6f392d051a916cf08d19840b39ac26
axios.defaults.baseURL = "http://localhost:4000";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
