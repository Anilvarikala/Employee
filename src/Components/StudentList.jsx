import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue, remove } from "firebase/database";
import { app } from "../firebase";
import { useNavigate } from "react-router-dom";
import "./StudentList.css";
const StudentList = () => {
  const nav = useNavigate("");
  const [data, setData] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);

    const db = getDatabase(app);
    const StudentRef = ref(db, "Employee");
    onValue(StudentRef, (snapshot) => {
      const data = snapshot.val();
      setData(data);
      console.log(data);
    });
  }, []);

  const deleteData = (key) => {
    const db = getDatabase(app);
    const EmployeeRef = ref(db, "Employee/" + key);
    remove(EmployeeRef);
  };

  return (
    <div className="table-container">
      <table className="responsive-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Salary</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            Object.entries(data).map(([key, value]) => (
              <tr key={key}>
                <td>{value.FirstName}</td>
                <td>{value.LastName}</td>
                <td>{value.Email}</td>
                <td>{value.Salary}</td>
                <td>{value.Date}</td>
                <td className="action">
                  <button
                    className="update-button"
                    onClick={() =>
                      nav("/updateStudent", { state: [key, value] })
                    }
                  >
                    Update
                  </button>
                  <button
                    className="delete-button"
                    onClick={() => deleteData(key)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
