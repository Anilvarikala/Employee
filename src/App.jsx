// import React from "react";
// import AddData from "./Components/AddData";
// import StudentList from "./Components/StudentList";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Dashboard from "./Components/Dashboard";
// import UpdateStudent from "./Components/UpdateStudent";
// import "./index.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import SignUp from "./Components/SignUp";
// import Login from "./Components/Login";

// const myRouter = createBrowserRouter([
//   { path: "signup", Component: SignUp },
//   { path: "login", Component: Login },
//   {
//     path: "",
//     Component: Dashboard,
//     children: [
//       { path: "", Component: StudentList },
//       { path: "addstudent", Component: AddData },
//       { path: "studentlist", Component: StudentList },
//       { path: "updatestudent", Component: UpdateStudent },
//     ],
//   },
// ]);

// const App = () => {
//   return (
//     <div>
//       <RouterProvider router={myRouter} />
//     </div>
//   );
// };

// export default App;






// App.js
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./Components/AuthContext";
import ProtectedRoute from "./Components/ProtectedRoute";
import Dashboard from "./Components/Dashboard";
import AddData from "./Components/AddData";
import StudentList from "./Components/StudentList";
import PublicRoute from "./Components/PublicRoute";
import UpdateStudent from "./Components/UpdateStudent";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

// const myRouter = createBrowserRouter([
//   { path: "signup", Component: SignUp },
//   { path: "login", Component: Login },
//   {
//     path: "",
//     Component: () => (
//       <ProtectedRoute>
//         <Dashboard />
//       </ProtectedRoute>
//     ),
//     children: [
//       { path: "", Component: StudentList },
//       { path: "addstudent", Component: AddData },
//       { path: "studentlist", Component: StudentList },
//       { path: "updatestudent", Component: UpdateStudent },
//     ],
//   },
// ]);


const myRouter = createBrowserRouter([
  {
    path: "signup",
    Component: () => (
      <PublicRoute>
        <SignUp />
      </PublicRoute>
    ),
  },
  {
    path: "login",
    Component: () => (
      <PublicRoute>
        <Login />
      </PublicRoute>
    ),
  },
  {
    path: "",
    Component: () => (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
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
    <AuthProvider>
      <RouterProvider router={myRouter} />
    </AuthProvider>
  );
};

export default App;
