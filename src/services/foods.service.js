import axios from "axios";

const foodApi = axios.create({
  baseURL: `${process.env.REACT_APP_API}/foods`,
  withCredentials: true,
});

export const createFood = (newFood) => foodApi.post("/", newFood);

export const getFoods = () => foodApi.get("/");
