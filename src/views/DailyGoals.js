import React from "react";
import { Link } from "react-router-dom";
import { getDailyGoals } from "../services/dailyGoal.service.js";

function UserDailyGoals() {
  const [dailyGoals, setDailyGoals] = React.useState([]);

  React.useEffect(() => {
    getDailyGoals().then(({ data }) => setDailyGoals(data));
  }, []);

  return (
    <div className="box mr-6 ml-6">
      {dailyGoals?.map((goal) => (
        <div key={goal._id} className="control">
          <div className="field"><i className="fas fa-bullseye"></i> Calorie goal: <strong>{goal.caloriesGoal} calories</strong></div>
          <div className="field"><i className="far fa-clipboard"></i> Recorded at: <strong>{goal.createdAt}</strong></div>
          <div className="control">
          <button className="button is-logo"><Link to={`/dailyGoal/${goal._id}`}><span><i class="fab fa-wpexplorer"></i></span>  View details</Link></button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UserDailyGoals;
