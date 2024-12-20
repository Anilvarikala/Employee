// import React, { useState } from "react";
// import "./SignUp.css";
// import {createUserWithEmailAndPassword,getAuth} from "firebase/auth"
// import { app } from "../firebase";
// import { Link, useNavigate } from "react-router-dom";
// const SignUp = () => {

//   const nav=useNavigate('')
//   const [email,setemail] = useState('')
//   const [password,setpassword]= useState('')
//   const handleForm = (e) => {
//     e.preventDefault();
//     const auth = getAuth(app)
//     createUserWithEmailAndPassword(auth,email,password)
//     .then(res=>nav("/login"))

//   }
//   return (
//     <>
//       <div className="auth-container">
//         <form className="auth-form" onSubmit={(e) => handleForm(e)}>
//           <h2>Sign Up</h2>
//           <label>
//             Email:
//             <input
//               type="email"
//               name="email"
//               onChange={(e) => setemail(e.target.value)}
//               placeholder="Enter your email"
//               required
//             />
//           </label>
//           <label>
//             Password:
//             <input
//               type="password"
//               name="password"
//               // value={formData.password}
//               onChange={(e) => setpassword(e.target.value)}
//               placeholder="Enter your password"
//               required
//             />
//           </label>

//           <button type="submit">Sign Up</button>
//           <p style={{color:"blue",cursor:"pointer"}}onClick={()=>nav("/login")}>Already have an account?</p>
//         </form>
//       </div>
//     </>
//   );
// };

// export default SignUp;


import React, { useState } from "react";
import "./SignUp.css";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../firebase";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();
    const auth = getAuth(app);

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setError(err.message); // Display error message
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleForm}>
        <h2>Sign Up</h2>
        {error && <p className="error-message">{error}</p>}
        <label>
          Email:
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </label>
        <button type="submit">Sign Up</button>
        <p style={{color:"black"}}>
          Already have an account?{" "}
          <span
            className="link-text" style={{color:"blue",cursor:"pointer"}}
            onClick={() => navigate("/login")}
          >
            Login here
          </span>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
