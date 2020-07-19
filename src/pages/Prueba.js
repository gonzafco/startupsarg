import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

class Prueba extends React.Component {
  render() {
    
    return (
      <>
        <Navbar name="STARTUP ARGENTINA" search={false} />
        <p></p>
        <Link to="/">Ir a la home</Link>
      </>
    );
  }
}

export default Prueba;
