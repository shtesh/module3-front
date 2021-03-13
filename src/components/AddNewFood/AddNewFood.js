import React, { Component } from "react";

class AddNewFood extends Component {
  state = {
    name: "",
    calories: "",
    image: "",
    fat: "",
    carbohydrates: "",
    protein: "",
  };

  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newFood = this.state;
    this.props.addFood(newFood);
    this.setState({
      name: "",
      calories: "",
      image: "",
      fat: "",
      carbohydrates: "",
      protein: "",
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Calories</label>
            <div className="control">
              <input
                className="input"
                type="number"
                name="calories"
                value={this.state.calories}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Image</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="image"
                value={this.state.image}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Total Fat(g)</label>
            <div className="control">
              <input
                className="input"
                type="number"
                name="fat"
                value={this.state.fat}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Total Carbohydrates(g)</label>
            <div className="control">
              <input
                className="input"
                type="number"
                name="carbohydrates"
                value={this.state.carbohydrates}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Total Protein(g)</label>
            <div className="control">
              <input
                className="input"
                type="number"
                name="protein"
                value={this.state.protein}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="control">
            <button type="submit" className="button is-link">
              Create a food
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddNewFood;
