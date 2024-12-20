import React, { useState } from "react";
import { getDatabase, ref, set, update } from "firebase/database";
import { app } from "../firebase";
import "./AddData.css";
import { useLocation, useNavigate } from "react-router-dom";
const UpdateStudent = () => {
  const location = useLocation("");
  const [firstname, setfirstname] = useState(location.state[1].FirstName);
  const [lastname, setlastname] = useState(location.state[1].LastName);
  const [email, setemail] = useState(location.state[1].Email);
  const [salary, setsalary] = useState(location.state[1].Salary);
  const [date, setdate] = useState(location.state[1].Date);
  const [id, setid] = useState(location.state[0]);
  const nav = useNavigate("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const db = getDatabase(app);
    const EmployeeRef = ref(db, "Employee/" + location.state[0]);
    update(EmployeeRef, {
      FirstName: firstname,
      LastName: lastname,
      Email: email,
      Salary: salary,
      Date: date,
    });

    nav("/studentlist");
  };

  return (
    <div style={{marginLeft:"20vw"}}>
      <form className="responsive-form" onSubmit={handleSubmit}>
        <h2>Employee Form</h2>
        <label>
          Employee Id:
          <input
            type="text"
            name="EmployeeId"
            value={id}
            onChange={(e) => setid(e.target.value)}
            placeholder="Enter your first name"
            required
          />
        </label>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={firstname}
            onChange={(e) => setfirstname(e.target.value)}
            placeholder="Enter your first name"
            required
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            onChange={(e) => setlastname(e.target.value)}
            value={lastname}
            placeholder="Enter your last name"
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            onChange={(e) => setemail(e.target.value)}
            value={email}
            placeholder="Enter your email"
            required
          />
        </label>
        <label>
          Salary:
          <input
            type="number"
            name="salary"
            onChange={(e) => setsalary(e.target.value)}
            value={salary}
            placeholder="Enter your salary"
            required
          />
        </label>
        <label>
          Date:
          <input
            type="date"
            name="date"
            onChange={(e) => setdate(e.target.value)}
            value={date}
            required
          />
        </label>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateStudent;
