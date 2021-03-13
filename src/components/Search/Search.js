import React, { Component } from "react";

class Search extends Component {
  state = {
    search: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    this.props.searchFoods(value);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          className="input search-bar"
          name="search"
          placeholder="Search for a food"
          value={this.state.search}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Search;
