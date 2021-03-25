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
      <p>{dailyGoal.title}</p>
      <p>{dailyGoal.caloriesGoal}</p>
      <p>{dailyGoal.currentCalories}</p>
      <p>date: {dailyGoal.createdAt}</p>
      <p>Meals</p>
      <div>
        {dailyGoal?.meals?.map((meal) => (
          <div key={meal._id}>
            <p>{meal.title}</p>
            <p>{meal.description}</p>
            <p>{meal.calories}</p>
          </div>
        ))}
      </div>
      <Link to={`/dailyGoal/${dailyGoal._id}/edit`}>Edit</Link>
      <button onClick={handleDelete}>delete</button>
    </div>
  );
}
export default DailyGoalDetail;
