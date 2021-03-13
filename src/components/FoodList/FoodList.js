import React, { Component } from "react";
import shortid from "shortid";
import FoodBox from "../FoodBox/FoodBox";
import AddNewFood from "../AddNewFood/AddNewFood";
import Search from "../Search/Search";
import TodayFood from "../TodayFood/TodayFood";

const mockedFoods = [
  {
    name: "food",
    calories: 11,
    image:
      "https://www.besthealthmag.ca/wp-content/uploads/2019/07/junk-food-1.gif",
    fat: 10,
    carbohydrates: 100,
    protein: 12,
  },
];

class FoodList extends Component {
  state = {
    foodsList: mockedFoods,
    filteredFoodsList: mockedFoods,
    showForm: false,
    todayFood: [],
    totalCalories: 0,
  };

  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm });
  };

  addFood = (newFoodObj) => {
    const foodsListCopy = [...this.state.foodsList];
    foodsListCopy.unshift(newFoodObj);
    this.setState({ filteredFoodsList: foodsListCopy });
    this.state.showForm = false;
  };

  filterFoods = (searchTerm) => {
    const searchedTerm = searchTerm.toLowerCase();
    const filteredList = [...this.state.foodsList].filter((foodObj) => {
      return foodObj.name.toLowerCase().includes(searchedTerm);
    });
    this.setState({ filteredFoodsList: filteredList });
  };

  addTodayFood = (foodObj) => {
    let todayFoodsCopy = [...this.state.todayFood];
    let found = todayFoodsCopy.find((food) => food.name === foodObj.name);
    foodObj.calories *= foodObj.quantity;
    if (found) {
      found.quantity += foodObj.quantity;
      found.calories += foodObj.calories;
    } else {
      todayFoodsCopy.push(foodObj);
    }
    const totalCalories = todayFoodsCopy.reduce(
      (acc, val) => acc + val.calories,
      0
    );
    this.setState({ todayFood: todayFoodsCopy, totalCalories });
  };

  deleteFood(index) {
    const todayFoodsCopy = [...this.state.todayFood];
    todayFoodsCopy.splice(index, 1);
    const totalCalories = todayFoodsCopy.reduce(
      (acc, val) => acc + val.calories,
      0
    );
    this.setState({ todayFood: todayFoodsCopy, totalCalories });
  }
  render() {
    return (
      <div className="container">
        <div className="section">
          <h1 className="title">Food Tracker</h1>

          <Search searchFoods={this.filterFoods} />

          <div id="add-section">
            <button className="button" onClick={this.toggleForm}>
              Add Food
            </button>
            {this.state.showForm ? <AddNewFood addFood={this.addFood} /> : null}
          </div>

          <div className="columns">
            <div className="column">
              {this.state.filteredFoodsList.map((food, index) => {
                food.id = shortid.generate();
                return (
                  <FoodBox
                    key={index}
                    food={food}
                    updateTodayFood={this.addTodayFood}
                  />
                );
              })}
            </div>
          </div>
        </div>

        <div className="section">
          <h2 id="todays-food-title">Today's foods</h2>
          {this.state.todayFood.length > 0 ? (
            <div>
              <ul>
                {this.state.todayFood.map((oneTodayFood, index) => {
                  oneTodayFood.id = shortid.generate();
                  return (
                    <TodayFood
                      key={oneTodayFood.id}
                      {...oneTodayFood}
                      deleteFood={() => this.deleteFood(index)}
                    />
                  );
                })}
              </ul>
              <p>Total calories: {this.state.totalCalories}</p>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default FoodList;
