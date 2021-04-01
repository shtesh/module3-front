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
    <div className="box mr-6 ml-6">
      <h1>{dailyGoal.date}</h1>
      <form onSubmit={handleSubmit}>
      <div className="field">
          <div className="control">
        <label htmlFor="title" className="label"><i className="fas fa-utensils"></i> Meal Title</label>
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
        </div>
        </div>
        <div className="field">
          <div className="control">
        <label htmlFor="calories" className="label"><i className="fas fa-cookie-bite"></i> Calories</label>
        <input
          required
          type="number"
          name="calories"
          id="calories"
          onChange={handleChange}
        />
        </div>
        </div>
        <div className="field">
          <div className="control">
        <label htmlFor="description" className="label"><i className="fas fa-mortar-pestle"></i> Description</label>
        <div className="control">
        <textarea
          required
          type="textarea"
          className="textarea has-fixed-size"
          cols="10"
          rows="10"
          name="description"
          id="description"
          placeholder="e.g. bagel"
          onChange={handleChange}
        ></textarea>
        </div>
        </div>
        </div>
        <div className="control">
        <button type="submit" className="button is-link"><i className="far fa-edit"></i> Edit</button>
        </div>
      </form>
    </div>
  );
}
