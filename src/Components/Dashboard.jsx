import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
const Dashboard = () => {
  const[theme,settheme] = useState(true)
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div
  className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
  style={{ width: 280 ,minHeight:"120vh"}}
>
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
  <ul className="nav nav-pills flex-column mb-auto" style={{color:"white"}}>
    <li className="nav-item" onClick={() => settheme(!theme)}>
      <Link to="/addstudent" className= {`nav-link ${!theme ? "active":""} text-white`} aria-current="page">
        <svg className="bi pe-none me-2" width={16} height={16}>
          <use xlinkHref="#home" />
        </svg>
        Add Employee
      </Link>
    </li>
    <li onClick={() => settheme(!theme)}>
      <Link to="/studentlist" className={`nav-link ${theme ? "active":""} text-white`}>
        <svg className="bi pe-none me-2" width={16} height={16}>
          <use xlinkHref="#speedometer2" />
        </svg>
        Employee List
      </Link>
    </li>
   
  </ul>
  <hr />
  
</div>

    
      <div style={{ marginTop:"4rem" ,width: "70%", height: "100vh" }}>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
