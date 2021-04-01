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
    <div className="box mr-6 ml-6">
      <div className="field"><i className="fas fa-bullseye"></i> Calorie goal: <strong>{dailyGoal.caloriesGoal} calories</strong></div>
      <div className="field"><i className="fas fa-fish"></i> Calorie intake: <strong>{dailyGoal.currentCalories} calories</strong></div>
      <div className="field"><i className="far fa-clipboard"></i> Recorded at: <strong>{dailyGoal.createdAt}</strong></div>
      <div className="box mr-6 ml-6">
      <div className="field"><i className="fas fa-ice-cream"></i> Meals of the Day:</div>
      <div className="field" className="box mr-6 ml-6">
        {dailyGoal?.meals?.map((meal) => (
          <div key={meal._id} className="field box mr-6 ml-6">
            <div className="field"><i className="fas fa-utensils"></i> <strong>{meal.title}</strong></div>
            <div className="field"><i className="fas fa-carrot"></i> Consumed food: <strong>{meal.description}</strong></div>
            <div className="field"><i className="fas fa-cart-plus"></i> <strong>{meal.calories} calories</strong></div>
          </div>
        ))}
        </div>
      </div>
      <div className="control">
      <button className="button is-logo"><Link to={`/dailyGoal/${dailyGoal._id}/edit`}><i className="far fa-edit"></i> Edit</Link></button> 
      <button onClick={handleDelete} className="button is-logo"><i className="far fa-trash-alt"></i> Delete</button>
      </div>
      </div>
  );
}
export default DailyGoalDetail;
