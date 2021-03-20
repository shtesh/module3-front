import React, { useState } from "react";
import {createDailyGoal} from "../../services/dailyGoal.service";

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
    const response=await createDailyGoal(formState);
    console.log(response.data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Date</label>
        <input name="date" id="date" type="date" value={formState.date} onChange={handleChange}/>

        <label htmlFor="caloriesGoal">Calorie Goal</label>
        <input name="caloriesGoal" id="caloriesGoal" type="number" value={formState.caloriesGoal} onChange={handleChange}/>

        <label htmlFor="currentCalories">Calorie Intake</label>
        <input
          name="currentCalories"
          id="currentCalories"
          type="number"
          value={formState.currentCalories}
          onChange={handleChange}
        />

        <label htmlFor="meals">Meals</label>
        <select name="meals" id="meals" type="select" value={formState.meals} onChange={handleChange}>
        <option selected value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
        </select>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}
