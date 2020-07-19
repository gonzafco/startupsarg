import React from "react";
import Navbar from "../components/Navbar";
import AddStartUp from "../components/Navbar/AddStartUp"
import { Link } from "react-router-dom";

class AgregarStartUp extends React.Component {
  render() {
    return (
      <>
        <Navbar name="STARTUP ARGENTINA" search={false}/>
        <AddStartUp/>
        <Link to="/">Ir a la home</Link>
      </>
    );
  }
}

export default AgregarStartUp;
