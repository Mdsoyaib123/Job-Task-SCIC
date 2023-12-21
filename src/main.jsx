import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main";
import Home from "./Pages/Home/Home";
import AuthProvider from "./Provider/AuthProvider/AuthProvider";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import DashBoard from "./layout/Dashboard";
import TaskManagement from "./Pages/TaskManagement/TaskManagement";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,

      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      }
    ],
  },
  {
    path: '/dashboard',
    element: <DashBoard></DashBoard>,
    children:[
      {
        path:'taskManagement',
        element: <TaskManagement></TaskManagement>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
