import React from "react";
import "./style.css";

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: "",
    };
  }

  handleChange(e) {
    this.setState(
      {
        inputValue: e.target.value,
      },
      () => {
        //console.log(this.state.inputValue);
      }
    );
  }
  render() {
    return (
      <div className="search">
        <input
          onChange={(e) => this.handleChange(e)}
          className="inputSearch"
          type="text"
          placeholder="Buscar..."
        ></input>
      </div>
    );
  }
}

export default Search;
