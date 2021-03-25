import React from "react";
import { Link } from "react-router-dom";
import { getDailyGoals } from "../services/dailyGoal.service.js";

function UserDailyGoals() {
  const [dailyGoals, setDailyGoals] = React.useState([]);

  React.useEffect(() => {
    getDailyGoals().then(({ data }) => setDailyGoals(data));
  }, []);

  return (
    <div>
      {dailyGoals?.map((goal) => (
        <div key={goal._id}>
          <h4>{goal.title}</h4>
          <p>description: {goal.description}</p>
          <p>calories goal: {goal.caloriesGoal}</p>
          <p>date: {goal.createdAt}</p>
          <Link to={`/dailyGoal/${goal._id}`}>View details</Link>
        </div>
      ))}
    </div>
  );
}

export default UserDailyGoals;
