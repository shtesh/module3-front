import React from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { getDailyGoal, deleteDailyGoal } from "../services/dailyGoal.service";

function DailyGoalDetail() {
  const { dailyGoalId } = useParams();
  const [dailyGoal, setDailyGoal] = React.useState({});
  const { push } = useHistory();
  React.useEffect(() => {
    getDailyGoal(dailyGoalId).then(({ data }) => setDailyGoal(data));
  }, [dailyGoalId]);
  const handleDelete = async () => {
    try {
      await deleteDailyGoal(dailyGoalId);
      push("/dailyGoal");
    } catch (e) {}
  };
  return (
    <div>
      <p><i className="fas fa-bullseye"></i> Calorie goal: {dailyGoal.caloriesGoal} calories</p>
      <p><i className="fas fa-fish"></i> Calorie intake: {dailyGoal.currentCalories} calories</p>
      <p><i className="far fa-clipboard"></i> Recorded at: {dailyGoal.createdAt}</p>
      <p> Meals of the Day: </p>
      <div>
        {dailyGoal?.meals?.map((meal) => (
          <div key={meal._id}>
            <p><i className="fas fa-utensils"></i> {meal.title}</p>
            <p><i className="fas fa-carrot"></i> Consumed food: {meal.description}</p>
            <p><i className="fas fa-cart-plus"></i> {meal.calories} calories</p>
          </div>
        ))}
      </div>
      <button className="button is-logo"><Link to={`/dailyGoal/${dailyGoal._id}/edit`}><i className="far fa-edit"></i> Edit</Link></button>
      <button onClick={handleDelete} className="button is-logo"><i className="far fa-trash-alt"></i> Delete</button>
    </div>
  );
}
export default DailyGoalDetail;
