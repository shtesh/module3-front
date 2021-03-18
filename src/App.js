import React from "react";
import { Switch, Link, Route } from "react-router-dom";
import FoodList from "./components/FoodList/FoodList";
import { PrivateRoute, AnonRoute } from "./components/Routes";
import Signup from "./components/SignupForm/SignupForm";
import Login from "./components/LoginForm/LoginForm";
import DailyGoal from "./components/DailyGoal/DailyGoal";
import { useAuth } from "./context/AuthContext.utils";
import "./App.css";

function App() {
  const auth = useAuth();
  return (
    <div className="App">
      <nav>
        <button onClick={auth.handleLogout}>Log Me Out</button>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/foods">Foods</Link>
        <Link to="/createDailyGoal">Daily Goal</Link>
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
        <Route exact to="/">
          <h1>Home</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
