import React from "react";
import AddData from "./Components/AddData";
import StudentList from "./Components/StudentList";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import UpdateStudent from "./Components/UpdateStudent";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";

const myRouter = createBrowserRouter([
  { path: "signup", Component: SignUp },
  { path: "login", Component: Login },
  {
    path: "",
    Component: Dashboard,
    children: [
      { path: "", Component: StudentList },
      { path: "addstudent", Component: AddData },
      { path: "studentlist", Component: StudentList },
      { path: "updatestudent", Component: UpdateStudent },
    ],
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={myRouter} />
    </div>
  );
};

export default App;
