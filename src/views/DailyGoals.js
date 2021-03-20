import React from "react";
import { Link } from "react-router-dom";
import { getDailyGoals } from "../services/dailyGoal.service";

function UserDailyGoals() {
  const [dailyGoals, setDailyGoals] = React.useState([]);
  React.useEffect(() => {
    getDailyGoals().then(({ data }) => setDailyGoals(data));
  }, []);

  return (
    <div>
      {dailyGoals.map((goal) => (
        <div>
          <p>{goals.date}</p>
          <Link to={`/dailyGoal/${goal._id}`}>View details</Link>
        </div>
      ))}
    </div>
  );
}

export default UserDailyGoals;
