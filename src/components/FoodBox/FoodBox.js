import React, { Component } from "react";

class FoodBox extends Component {
  state = {
    quantity: 1,
  };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ quantity: Number(value) });
  };

  render() {
    const {
      name,
      calories,
      image,
      fat,
      carbohydrates,
      protein,
    } = this.props.food;
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={image} width="200" height="150" alt="food" />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{name}</strong> <br />
                <small>{calories} cal</small>
                <small>Total fat(g):{fat}</small>
                <small>Total carbohydrates(g): {carbohydrates}</small>
                <small>Total protein(g): {protein}</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="number"
                  value={this.state.quantity}
                  onChange={this.handleChange}
                />
              </div>
              <div className="control">
                <button
                  onClick={() =>
                    this.props.updateTodaysFood({
                      ...this.props.food,
                      quantity: this.state.quantity,
                    })
                  }
                  className="button is-info"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default FoodBox;
