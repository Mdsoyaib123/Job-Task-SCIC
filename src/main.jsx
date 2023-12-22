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
import PrivateRoute from "./routes/PrivateRoute";
import DashBoard from "./layout/Dashboard/DashBoard";
import CreateTask from "./Pages/CreateTask/CreateTask";
import toast, { Toaster } from "react-hot-toast";
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import CardEdit from "./Pages/CardEdit/CardEdit";



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
        path:'/edit/:id',
        element: <CardEdit></CardEdit>,
        loader:({params})=>fetch(`https://job-task-scic-server.vercel.app/CardEdit/${params.id}`)
      },
      
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
    children: [
      {
        path: "taskManagement",
        element: (
          <PrivateRoute>
            {" "}
            <TaskManagement></TaskManagement>
          </PrivateRoute>
        ),
        loader: () => fetch("https://job-task-scic-server.vercel.app/createTask"),
      },
      {
        path: "createTask",
        element: <CreateTask></CreateTask>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <DndProvider backend={HTML5Backend}>
        <RouterProvider router={router} />
        <Toaster></Toaster>
      </DndProvider>
    </AuthProvider>
  </React.StrictMode>
);
