import React, { useState } from "react";
import { createDailyGoal } from "../../services/dailyGoal.service";
import { useHistory } from "react-router-dom";

export default function DailyGoal() {
  const initialState = {
    caloriesGoal: "",
    currentCalories: "",
    title: "",
    description: "",
  };
  const { push } = useHistory();
  const [formState, setFormState] = useState(initialState);
  const handleChange = ({ target }) => {
    setFormState({ ...formState, [target.name]: target.value });
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      await createDailyGoal(formState);
      push("/dailyGoal");
    } catch (e) {}
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          name="title"
          id="title"
          type="text"
          required
          value={formState.date}
          onChange={handleChange}
        />

        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="10"
          onChange={handleChange}
        />

        <label htmlFor="caloriesGoal">Calorie Goal</label>
        <input
          name="caloriesGoal"
          id="caloriesGoal"
          type="number"
          value={formState.caloriesGoal}
          onChange={handleChange}
          required
        />

        <label htmlFor="currentCalories">Calorie Intake</label>
        <input
          name="currentCalories"
          id="currentCalories"
          type="number"
          value={formState.currentCalories}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
