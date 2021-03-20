import axios from "axios";

console.log("process.env", process.env);
const dailyGoalApi = axios.create({
  baseURL: `${process.env.REACT_APP_API}/dailyGoal`,
  withCredentials: true,
});

export const createDailyGoal= (dailyGoal) => {
    return dailyGoalApi.post("/", dailyGoal)
}

export const getDailyGoal = (dailyGoal) => {
  return dailyGoalApi.get("/:dailyGoal", dailyGoal)
}

// export const getDailyGoals = (dailyGoal) => {
//   return dailyGoalApi.get("/dailyGoal/dailyGoals", dailyGoals)
// }

export const updateDailyGoal = (dailyGoal) => {
  return dailyGoalApi.patch("/:dailyGoal", updateDailyGoal)
}