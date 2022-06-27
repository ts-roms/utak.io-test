import axios from "axios";

const axiosService = axios.create({
  baseUrl: "",
  headers: {
    "Content-type": "application/json",
  },
});

export default axiosService;
