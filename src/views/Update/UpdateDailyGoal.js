import React from "react";
import { updateDailyGoal } from "../../services/dailyGoal.service";
import { useHistory, useParams } from "react-router-dom";

export function UpdateDailyGoal() {
  const { dailyGoalId } = useParams();
  const { push } = useHistory();
  const initialState = {
    title: "Breakfast",
    description: "",
    calories: 0,
  };
  const [dailyGoal, setDailyGoal] = React.useState(initialState);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await updateDailyGoal(dailyGoalId, dailyGoal);
      push("/dailyGoal");
    } catch (e) {}
  };

  const handleChange = ({ target }) => {
    setDailyGoal({ ...dailyGoal, [target.name]: target.value });
  };

  return (
    <div>
      <h1>{dailyGoal.date}</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Meal Title</label>
        <select
          name="title"
          id="title"
          type="select"
          value={dailyGoal.meals}
          onChange={handleChange}
          required
        >
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
        </select>
        <label htmlFor="calories">Calories</label>
        <input
          required
          type="number"
          name="calories"
          id="calories"
          onChange={handleChange}
        />
        <label htmlFor="description">Description</label>
        <input
          required
          type="text"
          name="description"
          id="description"
          onChange={handleChange}
        />
        <button type="submit">Edit</button>
      </form>
    </div>
  );
}
