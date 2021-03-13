import React from "react";
import { Switch, Link } from "react-router-dom";
import FoodList from "./components/FoodList/FoodList";
import { PrivateRoute, AnonRoute } from "./components/Routes";
import Signup from "./components/SignupForm/SignupForm";
import Login from "./components/LoginForm/LoginForm";
import { useAuth } from "./context/AuthContext.utils";
import "./App.css";

function App() {
  const auth = useAuth();
  return (
    <div className="App">
      <nav>
        <button onClick={auth.handleLogout}>Logout</button>
        <Link to="/login">login</Link>
        <Link to="signup">signup</Link>
        <Link to="/foods">foods</Link>
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
      </Switch>
    </div>
  );
}

export default App;
