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
    <div className="box mr-6 ml-6">
      <form onSubmit={handleSubmit}>
          <div className="field">
        <label htmlFor="title">Date</label>
        <input
          name="title"
          id="title"
          type="date"
          required
          value={formState.date}
          onChange={handleChange}
          className="input"
        />
          </div>
          <div className="field">
        <label htmlFor="description">Consumed Food</label>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="10"
          onChange={handleChange}
          className="input"
        />
</div>
<div className="field">
        <label htmlFor="caloriesGoal">Calorie Goal</label>
        <input
          name="caloriesGoal"
          id="caloriesGoal"
          type="number"
          value={formState.caloriesGoal}
          onChange={handleChange}
          required
          className="input"
        />
</div>
<div className="field">
        <label htmlFor="currentCalories">Calorie Intake</label>
        <input
          name="currentCalories"
          id="currentCalories"
          type="number"
          value={formState.currentCalories}
          onChange={handleChange}
          required
          className="input"
        />
</div>
        <button type="submit" className="button is-info">Submit</button>
      </form>
    </div>
  );
}
