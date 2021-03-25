import React, { Component } from "react";
import shortid from "shortid";
import FoodBox from "../FoodBox/FoodBox";
import AddNewFood from "../AddNewFood/AddNewFood";
import Search from "../Search/Search";
import TodayFood from "../TodayFood/TodayFood";
import { getFoods } from "../../services/foods.service";

const mockedFoods = [
  {
    name: "Yogurt",
    calories: 114,
    image:
      "https://www.dianginsbergmd.com/wp-content/uploads/2020/03/yogurt.jpeg",
    fat: 5.2,
    carbohydrates: 8.4,
    protein: 7.2,
  },
  {
    name: "Apple",
    calories: 59,
    image:
      "https://www.applesfromny.com/wp-content/uploads/2020/05/Jonagold_NYAS-Apples2.png",
    fat: 0.2,
    carbohydrates: 15.6,
    protein: 0.3,
  },
  {
    name: "Banana",
    calories: 151,
    image:
      "https://www.indoindians.com/wp-content/uploads/2020/02/good-reasons-to-eat-a-banana-today.jpg",
    fat: 0.6,
    carbohydrates: 38.8,
    protein: 1.9,
  },
  {
    name: "Pear",
    calories: 82,
    image: "https://extension.purdue.edu/foodlink/functions/getImage.php?id=46",
    fat: 0.2,
    carbohydrates: 22,
    protein: 0.5,
  },
  {
    name: "Peach",
    calories: 67,
    image:
      "https://media.istockphoto.com/photos/peach-with-slice-and-leaf-isolated-on-white-picture-id828941520?k=6&m=828941520&s=612x612&w=0&h=rEsfdS7JodNKapZI5Hq6EFIfZtBt-atGwo9GzB11rgc=",
    fat: 0.4,
    carbohydrates: 16.5,
    protein: 1.6,
  },
  {
    name: "Orange",
    calories: 53,
    image:
      "https://st.depositphotos.com/1000141/1963/i/600/depositphotos_19638723-stock-photo-fresh-orange-fruit-with-leaf.jpg",
    fat: 0.1,
    carbohydrates: 13.2,
    protein: 1.1,
  },
  {
    name: "Asparagus",
    calories: 27,
    image:
      "https://snaped.fns.usda.gov/sites/default/files/styles/crop_ratio_7_5/public/seasonal-produce/2018-05/asparagus.jpg?h=f2c22e70&itok=sa1Ja1N0",
    fat: 0.2,
    carbohydrates: 5.2,
    protein: 3,
  },
  {
    name: "Cucumber",
    calories: 17,
    image:
      "https://st.depositphotos.com/1000350/1936/i/600/depositphotos_19364449-stock-photo-cucumber-and-slices-isolated-over.jpg",
    fat: 0.1,
    carbohydrates: 4,
    protein: 0.7,
  },
  {
    name: "Tomato",
    calories: 22,
    image:
      "https://www.thermofisher.com/blog/food/wp-content/uploads/sites/5/2014/08/tomatoes.jpg",
    fat: 0.2,
    carbohydrates: 4.8,
    protein: 1.2,
  },
  {
    name: "Lettuce",
    calories: 5,
    image: "https://cdn.britannica.com/77/170677-050-F7333D51/lettuce.jpg",
    fat: 0,
    carbohydrates: 0.9,
    protein: 0.4,
  },
  {
    name: "Eggplant",
    calories: 35,
    image:
      "https://www.veggycation.com.au/siteassets/veggycationvegetable/eggplant.jpg",
    fat: 0.3,
    carbohydrates: 8.4,
    protein: 1.4,
  },
  {
    name: "Egg",
    calories: 78,
    image:
      "https://assets.bonappetit.com/photos/58c70f879af34d432128e094/master/w_2002,h_1896,c_limit/jammy-eggs.jpg",
    fat: 5.6,
    carbohydrates: 0,
    protein: 6.7,
  },
  {
    name: "Beef",
    calories: 142,
    image:
      "https://i.pinimg.com/originals/47/64/a4/4764a447e3298472e47ce504261dfc60.jpg",
    fat: 10,
    carbohydrates: 0,
    protein: 12.3,
  },
  {
    name: "Chicken",
    calories: 136,
    image:
      "https://www.aldelis.com/wp-content/uploads/2017/10/beneficios-pollo.jpg",
    fat: 8.4,
    carbohydrates: 0,
    protein: 13.7,
  },
  {
    name: "Tofu",
    calories: 86,
    image:
      "https://www.alphafoodie.com/wp-content/uploads/2020/03/Tofu-1-of-1.jpeg",
    fat: 4.9,
    carbohydrates: 2.5,
    protein: 8.6,
  },
  {
    name: "Pork",
    calories: 137,
    image:
      "https://www.seriouseats.com/recipes/images/2016/02/20160208-sous-vide-pork-chop-guide-food-lab-37-1500x1125.jpg",
    fat: 4.6,
    carbohydrates: 1.1,
    protein: 26.2,
  },
  {
    name: "Butter",
    calories: 102,
    image:
      "https://thumbs.dreamstime.com/b/block-fresh-butter-wooden-cutting-board-sliced-against-blue-background-119564035.jpg",
    fat: 11.2,
    carbohydrates: 0.1,
    protein: 0.1,
  },
  {
    name: "Hamburger",
    calories: 250,
    image:
      "https://assets.biggreenegg.eu/app/uploads/2019/03/28145521/topimage-classic-hamburger-2019m04-800x534-600x401.jpg",
    fat: 10.9,
    carbohydrates: 20,
    protein: 17.5,
  },
  {
    name: "Potato",
    calories: 130,
    image: "https://c.ndtvimg.com/p5qg74v8_potato_625x300_01_August_18.jpg",
    fat: 0,
    carbohydrates: 28.1,
    protein: 3.2,
  },
  {
    name: "Rice",
    calories: 206,
    image:
      "https://www.recipetineats.com/wp-content/uploads/2020/03/Basmati-rice.jpg",
    fat: 0.4,
    carbohydrates: 44.8,
    protein: 4.3,
  },
  {
    name: "Whole Milk",
    calories: 146,
    image:
      "https://cdn-bbdid.nitrocdn.com/dXLomzNlicmTFrlYeLymuuBkWLKpJPTw/assets/static/source/wp-content/uploads/2020/02/e3cc4576103c6bd810cab757e50efe4e.SkimMilk-02.jpg",
    fat: 8,
    carbohydrates: 11.7,
    protein: 7.7,
  },
  {
    name: "Apple Cider",
    calories: 117,
    image:
      "https://www.thespruceeats.com/thmb/QRwkO45Op0-1uXvm7FcOqSNwys8=/2880x1920/filters:fill(auto,1)/simple-hot-spiced-cider-3051519-hero-01-13c37f95fbdd4520a93a008f609f4b61.jpg",
    fat: 0,
    carbohydrates: 29.2,
    protein: 0,
  },
  {
    name: "Quinoa",
    calories: 105,
    image:
      "https://post.healthline.com/wp-content/uploads/2020/09/quinoa-732x549-thumbnail-1.jpg",
    fat: 1.9,
    carbohydrates: 18.5,
    protein: 3.8,
  },
  {
    name: "Granola",
    calories: 120,
    image: "https://cookieandkate.com/images/2015/10/clumpy-granola.jpg",
    fat: 6.4,
    carbohydrates: 14.7,
    protein: 3.7,
  },
  {
    name: "Salmon",
    calories: 225,
    image:
      "https://www.seriouseats.com/recipes/images/2016/08/20160826-sous-vide-salmon-46-1500x1125.jpg",
    fat: 12,
    carbohydrates: 0.8,
    protein: 28.8,
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

  componentDidMount() {
    getFoods().then(({ data }) => console.log("data", data));
  }

  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm });
  };

  addFood = (newFoodObj) => {
    const foodsListCopy = [...this.state.foodsList];
    foodsListCopy.unshift(newFoodObj);
    this.setState({ filteredFoodsList: foodsListCopy, showForm: false });
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
          <h1 className="title">Foodie Cap</h1>

          <Search searchFoods={this.filterFoods} />
          <br />
          <div id="add-section">
            <button className="button is-info" onClick={this.toggleForm}>
              Add Food
            </button>
            {this.state.showForm ? <AddNewFood addFood={this.addFood} /> : null}
          </div>
          <br />
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
          <h2 id="todays-food-title"></h2>
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
