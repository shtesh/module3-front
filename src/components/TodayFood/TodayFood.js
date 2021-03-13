import React from "react";

const TodayFood = (props) => {
  const { name, calories, quantity, deleteFood } = props;
  return (
    <li>
      <p>
        {quantity} {name} = {calories} cal
      </p>
      <button className="button is-link" onClick={deleteFood}>
        Delete
      </button>
    </li>
  );
};

export default TodayFood;
