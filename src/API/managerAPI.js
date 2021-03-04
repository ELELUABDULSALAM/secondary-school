import axios from "axios";

// http://192.168.43.159:5000
//https://staff-manager-server.herokuapp.com
//http://localhost:5000

const instance = axios.create({
  baseURL: "https://halal-school.herokuapp.com",
});

export default instance;
