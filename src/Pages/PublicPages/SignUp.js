// src/components/Login.js
import React, { useState } from "react";
import "./Login.css"; // I used this CSS for both Login and Signup page. They have the same elements
import { Link, useNavigate } from "react-router-dom";
import Title from "../../Component/Title";
import { useUserAuth } from "../../Context/UserAuthContext";
import { toast } from 'react-toastify';

const SignUp = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState('')
    const navigate = useNavigate()


    const {signUp} = useUserAuth();

    const handleSubmit = async (e) =>{
    setError("")
      e.preventDefault()
      try {
        await signUp(email, password)
        navigate("/")
        toast.success("User Created Succefully")
      } catch (err) {
        setError(err.message)
        toast.error("Make sure the email doesnt exist and password lenght should be more than 6 characters")
      }

    }
  return (
    <div className="page-container">
      <div className="login-container">
        <div className="login-form">
          <Title title="Sign Up" />
          <form onSubmit={handleSubmit}>

            <div className="input-group">
              <label htmlFor="email">Email Address</label>
              <input
                className="loginInput"
                type="email"
                id="email"
                placeholder="Enter your email"
                required
                onChange={(e)=>{setEmail(e.target.value)}}
              />
            </div>

            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                className="loginInput"
                id="password"
                type="password"
                placeholder="Enter your Password"
                required
                onChange={(e)=>{setPassword(e.target.value)}}
              />
            </div>

            <button type="submit" className="login-btn">
              Sign Up
            </button>
          </form>

          <div className="login-footer">
            <p>
              Do you have an account? <Link to="/login">Login</Link> 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
