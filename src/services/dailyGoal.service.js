import axios from "axios";

console.log("process.env", process.env);
const dailyGoalApi = axios.create({
  baseURL: `${process.env.REACT_APP_API}/dailyGoal`,
  withCredentials: true,
});

export const createDailyGoal= (dailyGoal) => {
    return dailyGoalApi.post("/", dailyGoal)
}