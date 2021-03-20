import { useParams, Link } from "react-router-dom";
import { getDailyGoal } from "../services/dailyGoal.service";


function DailyGoalDetail() {
  const { dailyGoalId } = useParams();
  const [dailyGoal, setDailyGoal] = React.useState({});
  React.useEffect(() => {
    getDailyGoal().then(({ data }) => setDailyGoal(data));
  }, [dailyGoalId]);

  return (
    <div>
      <p>{dailyGoal.date}</p>
      <p>{dailyGoal.caloriesGoal}</p>
      <p>{dailyGoal.currentCalories}</p>
      <p>{dailyGoal.meals}</p>
      <Link to={`/dailyGoal/${goal._id}/edit`}>Edit</Link>
    </div>
  );
}
