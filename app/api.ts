import axios from "axios";

// NOTE: For physical devices, replace localhost with your machine's IP address (e.g., http://192.168.1.x:5000)
const api = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
