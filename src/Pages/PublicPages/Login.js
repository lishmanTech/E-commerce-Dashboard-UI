// src/components/Login.js
import React, { useState } from "react";
import "./Login.css"; // External CSS for styling
import { Link, useNavigate } from "react-router-dom";
import Title from "../../Component/Title";
import { useUserAuth } from "../../Context/UserAuthContext";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { login, googleSignin } = useUserAuth();

  const handleSubmit = async (e) => {
    setError("");
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/");
      toast.success("Logged in succesful");
    } catch (err) {
      setError(err.message);
      toast.error(
        "email or Password is incorrect"
      );
    }
  };

  const handleSignIn= async (e) =>{
     e.preventDefault()
   try {
       await googleSignin()
       navigate("/")
   } catch (err) {
     setError(err.message)
   }
  }

  return (
    <div className="page-container">
      <div className="login-container">
        <div className="login-form">
          <Title title="Welcome Back" />
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="email">Email Address</label>
              <input
                className="loginInput"
                type="email"
                id="email"
                placeholder="Enter your email"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                className="loginInput"
                type="password"
                id="password"
                placeholder="Enter your password"
                required
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>

            <button type="submit" className="login-btn">
              Login
            </button>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "16",
                marginBottom: "10px",
                marginTop: "10px",
              }}
            >
              Or
            </div>
            <button className="google-btn" onClick={handleSignIn}>Sign in with Google</button>
          </form>

          <div className="login-footer">
            <p>
              Don't have an account? <Link to="/signup">Sign Up</Link>
            </p>
            <p>
              <Link>Forgot Password?</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
