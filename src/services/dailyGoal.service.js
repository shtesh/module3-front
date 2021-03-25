import axios from "axios";

console.log("process.env", process.env);
const dailyGoalApi = axios.create({
  baseURL: `${process.env.REACT_APP_API}/dailyGoal`,
  withCredentials: true,
});

export const createDailyGoal = (dailyGoal) => {
  return dailyGoalApi.post("/", dailyGoal);
};

export const getDailyGoal = (dailyGoalId) =>
  dailyGoalApi.get(`/${dailyGoalId}`);

export const getDailyGoals = () => dailyGoalApi.get("/");

export const updateDailyGoal = (dailyGoalId, dailyGoal) => {
  return dailyGoalApi.patch(`/${dailyGoalId}`, dailyGoal);
};

export const deleteDailyGoal = (dailyGoalId) =>
  dailyGoalApi.delete(`/${dailyGoalId}`);
