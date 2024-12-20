// import React, { useState } from "react";
// import "./SignUp.css";
// import {signInWithEmailAndPassword,getAuth} from "firebase/auth"
// import { app } from "../firebase";
// import { useNavigate } from "react-router-dom";
// const Login = () => {

//   const nav=useNavigate('')
//   const [email,setemail] = useState('')
//   const [password,setpassword]= useState('')
//   const handleForm = (e) => {
//     e.preventDefault();
//     const auth = getAuth(app)
//     signInWithEmailAndPassword(auth,email,password)
//     .then(res=>nav("/"))

//   }
//   return (
//     <>
//       <div className="auth-container">
//         <form className="auth-form" onSubmit={(e) => handleForm(e)}>
//           <h2>Login</h2>
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

//           <button type="submit">Login</button>
//           <p style={{color:"blue",cursor:"pointer"}}onClick={()=>nav("/signup")}>Don't have an account?</p>
//         </form>
//       </div>
//     </>
//   );
// };

// export default Login







import React, { useState } from "react";
import "./SignUp.css";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();
    const auth = getAuth(app);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/"); // Redirect to the dashboard
    } catch (err) {
      setError(err.message); // Display error message
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleForm}>
        <h2>Login</h2>
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
        <button type="submit">Login</button>
        <p style={{color:"black"}}>
          Don't have an account?{" "}
          <span
            className="link-text" style={{color:"blue",cursor:"pointer"}}
            onClick={() => navigate("/signup")}
          >
            Sign up here
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;

