import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosClient from "../api/axiosClient";

export default function Wallet() {
  const navigate = useNavigate();
  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState("");

  // 1️⃣ Redirect if token missing
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  // 2️⃣ Load balance
  const loadBalance = async () => {
    try {
      const res = await axiosClient.get("/wallet/balance");
      setBalance(res.data.balance);
    } catch (error) {
      console.error("Failed to load balance", error);
    }
  };

  // 3️⃣ Load balance on page load
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    loadBalance();
  }, []);

  // 4️⃣ Add money
  const handleAdd = async () => {
    try {
      await axiosClient.post("/wallet/add", { amount });
      loadBalance();
      setAmount("");
    } catch (error) {
      console.error("Add money error:", error);
    }
  };

  // 5️⃣ Withdraw money
  const handleWithdraw = async () => {
    try {
      await axiosClient.post("/wallet/withdraw", { amount });
      loadBalance();
      setAmount("");
    } catch (error) {
      console.error("Withdraw error:", error);
    }
  };

  return (
    <div className="wallet-container">
      <h1>Wallet</h1>

      <h2>Balance: ${balance}</h2>

      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="wallet-input"
      />

      <button className="btn-grad" onClick={handleAdd}>
        Add Money
      </button>

      <button className="btn-grad" onClick={handleWithdraw}>
        Withdraw
      </button>
    </div>
  );
}
