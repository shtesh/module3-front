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
import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import UpdateDailyGoal from "./views/UpdateDailyGoal";

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
        <PrivateRoute exact path="/dailyGoal/:dailyGoalId">
          <DailyGoalDetail />
        </PrivateRoute>
        <PrivateRoute path="/dailyGoal/:dailyGoalId/edit">
          <UpdateDailyGoal />
        </PrivateRoute>
        <Route exact to="/">
          <h1>Home</h1>
        </Route>
        <Route path="*">
          <ErrorBoundary>
            <BuggyComponent />
          </ErrorBoundary>
        </Route>
      </Switch>
    </div>
  );
  const delay = () => new Promise((res) => setTimeout(() => res(true), 2000));
  const error = () => {
    throw new Error("error");
  };

  function BuggyComponent() {
    const [state, setState] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState(false);

    async function getData() {
      try {
        setIsLoading(true);
        error();
        setState(["ready", "steady", "go"]);
        setIsLoading(false);
      } catch (e) {
        console.error(e);
        setError(true);
        setIsLoading(false);
      }
    }
    React.useEffect(() => {
      getData();
    }, []);

    if (error) {
      return <h2>Error</h2>;
    }
    if (isLoading) {
      return <h2>Loading...</h2>;
    }
    return (
      <div>
        {state.map((value) => (
          <p>value</p>
        ))}
        <button onClick={() => setState({})}>break</button>
      </div>
    );
  }
}

export default App;
