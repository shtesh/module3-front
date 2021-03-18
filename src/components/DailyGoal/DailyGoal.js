import React, { useState } from "react";

export default function DailyGoal() {
  const initialState = {
    date: "",
    caloriesGoal: "",
    currentCalories: "",
    meals: "",
  };

  const [formState, setFormState] = useState(initialState);
  const handleChange = ({ target }) => {
    setFormState({ ...formState, [target.name]: target.value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Date</label>
        <input name="date" id="date" type="date" value="" />

        <label htmlFor="caloriesGoal">Calorie Goal</label>
        <input name="caloriesGoal" id="caloriesGoal" type="number" value="" />

        <label htmlFor="currentCalories">Calorie Intake</label>
        <input
          name="currentCalories"
          id="currentCalories"
          type="number"
          value=""
        />

        <label htmlFor="meals">Meals</label>
        <input name="meals" id="meals" type="text" value="" />
      </form>
    </div>
  );
}
