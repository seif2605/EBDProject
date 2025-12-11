import { useState } from "react";
import axiosClient from "../api/axiosClient";
import { Link } from "react-router-dom";
import logo from "../assets/flowpay-logo.png";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  

  const handleLogin = async () => {
    try {
      const res = await axiosClient.post("/auth/login", form);
      alert("Login successful!");
      localStorage.setItem("token", res.data.token);
      window.location.href = "/wallet";

    } catch (err) {
      alert(err?.response?.data?.message || "Login failed");
    }
  };


  return (
    <div className="auth-container">
     <img 
  src={logo} 
  alt="FlowPay Logo" 
  className="app-logo" 
/>


      <input
        className="auth-input"
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />

      <input
        className="auth-input"
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleChange}
      />

      <button className="btn-grad" onClick={handleLogin}>
        Login
      </button>

      <p className="switch-text">
        Don’t have an account?{" "}
        <Link to="/register">Register</Link>
      </p>
    </div>
  );
  
}
