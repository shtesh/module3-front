import { useHistory, useParams } from "react-router-dom";
import { updateDailyGoal } from "../services/dailyGoal.service";

function UpdateDailyGoal() {
  const { dailyGoalId } = useParams();
  const { push } = useHistory();
  const [dailyGoal, setDailyGoal] = React.useState({});
  React.useEffect(() => {
    getDailyGoal().then(({ data }) => setDailyGoal(data));
  }, [dailyGoalId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedDailyGoal = await updatedDailyGoal(dailyGoalId, dailyGoal);
    push("/dailyGoals");
  };

  const handleChange = ({ target }) => {
    setDailyGoal({ ...dailyGoal, [target.name]: target.value });
  };
  return (
    <div>
      <h1>{dailyGoal.date}</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Date</label>
        <input
          name="date"
          id="date"
          type="date"
          value={dailyGoal.date}
          onChange={handleChange}
        />

        <label htmlFor="caloriesGoal">Calorie Goal</label>
        <input
          name="caloriesGoal"
          id="caloriesGoal"
          type="number"
          value={dailyGoal.caloriesGoal}
          onChange={handleChange}
        />

        <label htmlFor="currentCalories">Calorie Intake</label>
        <input
          name="currentCalories"
          id="currentCalories"
          type="number"
          value={dailyGoal.currentCalories}
          onChange={handleChange}
        />

        <label htmlFor="meals">Meals</label>
        <select
          name="meals"
          id="meals"
          type="select"
          value={dailyGoal.meals}
          onChange={handleChange}
        >
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
        </select>

        <button type="submit">Edit</button>
      </form>
    </div>
  );
}

export default UpdateDailyGoal;
