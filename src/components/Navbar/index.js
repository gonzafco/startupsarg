import React from "react";
import "./style.css";

import Search from "./Search";
import { Link } from "react-router-dom";

class navbar extends React.Component {
  handleChange(e) {
    const inputValue = e.target.value;

    // this.props.getData(inputValue)
    const { getData } = this.props;
    getData(inputValue);
  }

  render() {
    const {name, search} = this.props

    return (
      <div className="navbar">
        <Link to="/" ><span className="name">
          {name}
        </span></Link>
        {/* <Search /> */}
        {search &&
        <p><input
        onChange={(e) => this.handleChange(e)}
        className="inputSearch"
        type="text"
        placeholder="Buscar..."
      ></input></p>
      }
        
        

        <Link
          className="action"
          to="/agregar-startup"
        >
          Agregar Startup
        </Link>


        

        
      </div>
    );
  }
}

export default navbar;
