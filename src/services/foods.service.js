import axios from "axios";

console.log("process.env", process.env);
const foodApi = axios.create({
  baseURL: `${process.env.REACT_APP_API}/foods`,
  withCredentials: true,
});

export const createFood = (newFood) => foodApi.post("/", newFood);

export const getFoods = () => foodApi.get("/");
