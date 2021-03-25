import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.utils.js";

function Navbar() {
  const { user, handleLogout } = useAuth();
  const space = { margin: "10px" };
  return (
    <nav>
      {user?.isLogged ? (
        <>
          <Link to="/foods" style={space}>
            Nutrition Facts
          </Link>
          <Link to="/createDailyGoal" style={space}>
            Set Daily Goal
          </Link>
          <Link to="/dailyGoal" style={space}>
            Your Foodprint
          </Link>
          <button
            onClick={handleLogout}
            className="button is-info"
            style={space}
          >
            Log Me Out
          </button>
        </>
      ) : (
        <>
          <Link to="/signup" style={space}>
            Signup
          </Link>
          <Link to="/login" style={space}>
            Login
          </Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;
