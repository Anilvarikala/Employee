// import React, { useState } from "react";
// import { Link, Outlet, useNavigate } from "react-router-dom";
// import {getAuth,signOut} from "firebase/auth"
// import { app } from "../firebase";
// const Dashboard = () => {
//   const[theme,settheme] = useState(true)
//   const nav=useNavigate('')
//   const handleSignOut = (e) => {
//     const auth = getAuth(app)
//     signOut(auth).then(res=>nav("login"))

//   }
//   return (
//     <div className="sidebar" style={{ display: "flex" }}>
//       <div
//   className="d-flex sidebar-en flex-column flex-shrink-0 p-3 text-bg-dark"
// >
//   <a
//     href="/"
//     className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
//   >
//     <svg className="bi pe-none me-2" width={40} height={32}>
//       <use xlinkHref="#bootstrap" />
//     </svg>
//     <span className="fs-4">Employee Management</span>
//   </a>
//   <hr />
//   <ul className="nav nav-pills flex-column mb-auto" style={{color:"white"}}>
//     <li className="nav-item" onClick={() => settheme(!theme)}>
//       <Link to="/addstudent" className= {`nav-link ${!theme ? "active":""} text-white`} aria-current="page">
//         <svg className="bi pe-none me-2" width={16} height={16}>
//           <use xlinkHref="#home" />
//         </svg>
//         Add Employee
//       </Link>
//     </li>
//     <li onClick={() => settheme(!theme)}>
//       <Link to="/studentlist" className={`nav-link ${theme ? "active":""} text-white`}>
//         <svg className="bi pe-none me-2" width={16} height={16}>
//           <use xlinkHref="#speedometer2" />
//         </svg>
//         Employee List
//       </Link>
//     </li>
//     <li onClick={(e) => handleSignout(e)}>
//       <Link  onClick={(e) => handleSignout(e)} className={`nav-link text-white`}>
//         <svg className="bi pe-none me-2" width={16} height={16}>
//           <use xlinkHref="#speedometer2" />
//         </svg>
//         Signout
//       </Link>
//     </li>
   
//   </ul>
//   <hr />
  
// </div>

    
//       <div style={{ marginTop:"4rem" ,width: "70%", height: "100vh" }}>
//         <Outlet></Outlet>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../firebase";

const Dashboard = () => {
  const [theme, setTheme] = useState(true);
  const navigate = useNavigate();

  // Function to handle sign-out
  const handleSignOut = () => {
    const auth = getAuth(app);
    signOut(auth)
      .then(() => {
        navigate("/login"); // Redirect to login after sign-out
      })
      .catch((error) => {
        console.error("Error during sign-out:", error); // Handle errors if needed
      });
  };

  return (
    <div className="sidebar" style={{ display: "flex" }}>
      <div className="d-flex sidebar-en flex-column flex-shrink-0 p-3 text-bg-dark">
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <svg className="bi pe-none me-2" width={40} height={32}>
            <use xlinkHref="#bootstrap" />
          </svg>
          <span className="fs-4">Employee Management</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto" style={{ color: "white" }}>
          <li className="nav-item" onClick={() => setTheme(!theme)}>
            <Link
              to="/addstudent"
              className={`nav-link ${!theme ? "active" : ""} text-white`}
              aria-current="page"
            >
              <svg className="bi pe-none me-2" width={16} height={16}>
                <use xlinkHref="#home" />
              </svg>
              Add Employee
            </Link>
          </li>
          <li onClick={() => setTheme(!theme)}>
            <Link to="/studentlist" className={`nav-link ${theme ? "active" : ""} text-white`}>
              <svg className="bi pe-none me-2" width={16} height={16}>
                <use xlinkHref="#speedometer2" />
              </svg>
              Employee List
            </Link>
          </li>
          <li>
            <button
              onClick={handleSignOut}
              className="nav-link text-white"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
              }}
            >
              <svg className="bi pe-none me-2" width={16} height={16}>
                <use xlinkHref="#speedometer2" />
              </svg>
              Sign Out
            </button>
          </li>
        </ul>
        <hr />
      </div>

      <div style={{ marginTop: "4rem", width: "70%", height: "100vh" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
