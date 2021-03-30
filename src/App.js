import React from "react";
import { Switch, Route } from "react-router-dom";
import FoodList from "./components/FoodList/FoodList";
import { PrivateRoute, AnonRoute } from "./components/Routes";
import Signup from "./components/SignupForm/SignupForm";
import Login from "./components/LoginForm/LoginForm";
import DailyGoal from "./components/DailyGoal/DailyGoalForm";
import DailyGoalDetail from "./views/DailyGoal";
import UserDailyGoals from "./views/DailyGoals";
import Navbar from "./components/Navbar/Navbar";
import { UpdateDailyGoal } from "./views/Update/UpdateDailyGoal";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
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
        <PrivateRoute exact path="/dailyGoal">
          <UserDailyGoals />
        </PrivateRoute>
        <PrivateRoute path="/dailyGoal/:dailyGoalId/edit">
          <UpdateDailyGoal />
        </PrivateRoute>
        <PrivateRoute exact path="/dailyGoal/:dailyGoalId">
          <DailyGoalDetail />
        </PrivateRoute>
        <Route exact to="/">
        </Route>
        <Route path="*">
          <h1>Not Found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
