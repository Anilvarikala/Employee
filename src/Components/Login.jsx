import React, { useState } from "react";
import "./SignUp.css";
import {signInWithEmailAndPassword,getAuth} from "firebase/auth"
import { app } from "../firebase";
import { useNavigate } from "react-router-dom";
const Login = () => {

  const nav=useNavigate('')
  const [email,setemail] = useState('')
  const [password,setpassword]= useState('')
  const handleForm = (e) => {
    e.preventDefault();
    const auth = getAuth(app)
    signInWithEmailAndPassword(auth,email,password)
    .then(res=>nav("/"))

  }
  return (
    <>
      <div className="auth-container">
        <form className="auth-form" onSubmit={(e) => handleForm(e)}>
          <h2>Login</h2>
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
            Password:
            <input
              type="password"
              name="password"
              // value={formData.password}
              onChange={(e) => setpassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </label>

          <button type="submit">Login</button>
          <p style={{color:"blue",cursor:"pointer"}}onClick={()=>nav("/signup")}>Don't have an account?</p>
        </form>
      </div>
    </>
  );
};

export default Login