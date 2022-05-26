import axios from "axios";

export default axios.create({
    baseURL: 'http://localhost:5241/api/',
    headers: {
      'Content-Type': 'application/json'
    }
  })