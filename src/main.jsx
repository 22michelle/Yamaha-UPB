import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Navbar } from "./components/common/Navbar.jsx";
import { Home } from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Status from "./pages/Status.jsx";
import Detailsstatus from "./pages/Detailsstatus.jsx";
import axios from "axios";
import { Provider } from "react-redux";
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

axios.defaults.baseURL = "http://localhost:4000";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
