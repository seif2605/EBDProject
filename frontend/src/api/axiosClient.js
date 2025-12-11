import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:5000/api", // backend URL
});

// Add token automatically if logged in
axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Flowpay ${token}`;
  }
  return config;
});

export default axiosClient;
