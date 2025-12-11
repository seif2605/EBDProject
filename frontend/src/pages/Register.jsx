import { useState } from "react";
import axiosClient from "../api/axiosClient";
import { Link } from "react-router-dom";
import logo from "../assets/flowpay-logo.png";

export default function Register() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    try {
      const res = await axiosClient.post("/auth/register", form);
      alert("Registration successful!");
      localStorage.setItem("token", res.data.token);

      // FIX: redirect to wallet instead of dashboard
      window.location.href = "/wallet";

    } catch (err) {
      alert(err?.response?.data?.message || "Registration failed");
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
        name="fullName"
        placeholder="Full Name"
        onChange={handleChange}
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

      <input
        className="auth-input"
        name="phone"
        placeholder="Phone Number"
        onChange={handleChange}
      />

      <button className="btn-grad" onClick={handleRegister}>
        Register
      </button>

      <p className="switch-text">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}
