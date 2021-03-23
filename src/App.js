import React from "react";
import { Switch, Link, Route } from "react-router-dom";
import FoodList from "./components/FoodList/FoodList";
import { PrivateRoute, AnonRoute } from "./components/Routes";
import Signup from "./components/SignupForm/SignupForm";
import Login from "./components/LoginForm/LoginForm";
import DailyGoal from "./components/DailyGoal/DailyGoalForm";
import DailyGoalDetail from "./views/DailyGoal";
import UserDailyGoals from "./views/DailyGoals";
import UpdateDailyGoal from "./views/UpdateDailyGoal";
import { useAuth } from "./context/AuthContext.utils";
import "./App.css";

function App() {
  const auth = useAuth();
  return (
    <div className="App">
      <nav>
        <Link to="/foods">Foods</Link>
        <Link to="/createDailyGoal">Create Daily Goal</Link>
        <Link to="/dailyGoal">Your Daily Goal</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
        <button onClick={auth.handleLogout}>
          <span className="icon-text">
            <span className="icon">
              <i className="fas fa-home"></i>
            </span>
            Log Me Out
          </span>
        </button>
      </nav>
      <Switch>
        <AnonRoute exact path="/login">
          <Login />
        </AnonRoute>
        <AnonRoute exact path="/signup">
          <Signup />
        </AnonRoute>
        <PrivateRoute path="/foods">
          <FoodList />
        </PrivateRoute>
        <PrivateRoute path="/private">
          <h2>this is private</h2>
        </PrivateRoute>
        <PrivateRoute path="/createDailyGoal">
          <DailyGoal />
        </PrivateRoute>
        <PrivateRoute exact path='/dailyGoal'>
<UserDailyGoals />
        </PrivateRoute>
        <PrivateRoute exact path="/dailyGoal/:dailyGoalId">
        <DailyGoalDetail/>
        </PrivateRoute>
        <PrivateRoute path="/dailyGoal/:dailyGoal/edit">
          <UpdateDailyGoal />
        </PrivateRoute>
        <Route exact to="/">
          <h1>Home</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
