// import React, { useState } from "react";
// import {getDatabase,ref,set} from "firebase/database"
// import {app} from "../firebase"
// import { useNavigate } from "react-router-dom";
// const AddData = () => {

//   const nav = useNavigate('')
//   const [name, setname] = useState("");
//   const [number, setnumber] = useState("");
//   const[id,setid] = useState('')
//   const FormSubmit = (e) => {
//     e.preventDefault();
//     const db = getDatabase(app)
//     set(ref(db,"Student/"+id),{
//        StudentName : name,
//        StudentPhoneNumber : number
//     })
//     setid('')
//     setname('')
//     setnumber('')

//     nav('/studentlist')

//   };
//   return (
//     <div>
//       <form onSubmit={(e) => FormSubmit(e)}>
//         <input value={id} onChange={(e) => setid(e.target.value)} type="text" placeholder="ROll No" />
//         <input value={name}
//           onChange={(e) => setname(e.target.value)}
//           placeholder="Student Name"
//           type="text"
//         />
//         <input value={number}
//           onChange={(e) => setnumber(e.target.value)}
//           type="number"
//           placeholder="Phone Number"
//         />
//         <button type="submit">Add Data</button>
//       </form>
//     </div>
//   );
// };

// export default AddData;

import React, { useState } from "react";
import { getDatabase, ref, set } from "firebase/database";
import { app } from "../firebase";
import { useNavigate } from "react-router-dom";

import "./AddData.css"; // Import the CSS for styling

const AddData = () => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [salary, setsalary] = useState("");
  const [date, setdate] = useState("");
  const [id, setid] = useState("");
  const nav = useNavigate("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const db = getDatabase(app);
    set(ref(db, "Employee/" + id), {
      FirstName: firstname,
      LastName: lastname,
      Email: email,
      Salary: salary,
      Date: date,
    });
    setdate("");
    setemail("");
    setfirstname("");
    setlastname("");
    setsalary("");
    setid("");
    nav("/studentlist");
  };

  return (
    <div className="form-container">
      <form className="responsive-form rf-2" onSubmit={handleSubmit}>
        <h2>Employee Form</h2>
        <label>
          Employee Id:
          <input
            type="text"
            name="EmployeeId"
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
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddData;
