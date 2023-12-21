import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main";
import Home from "./Pages/Home/Home";
import AuthProvider from "./Provider/AuthProvider/AuthProvider";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";

import TaskManagement from "./Pages/TaskManagement/TaskManagement";
import PrivateRoute from './routes/PrivateRoute';
import DashBoard from "./layout/Dashboard/DashBoard";
import CreateTask from "./Pages/CreateTask/CreateTask";
import toast, { Toaster } from 'react-hot-toast';

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
        element:<PrivateRoute> <TaskManagement></TaskManagement></PrivateRoute>,
        loader: ()=>fetch('http://localhost:5000/createTask')
      },
      {
        path:'createTask',
        element:<CreateTask></CreateTask>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster></Toaster>
    </AuthProvider>
  </React.StrictMode>
);
