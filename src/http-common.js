import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3090",
  headers: {
    "Content-Type": "application/json",
    "Authorization": localStorage.getItem("authorization"),
  }
});
