import React from "react";
import Navbar from "../components/Navbar";
import AddStartUp from "../components/Navbar/AddStartUp"
import { Link } from "react-router-dom";
import StartUp from "../components/StartUp"

class VerStartUp extends React.Component {
  
  render() {    
    return (
      <>
        <Navbar name="STARTUP ARGENTINA" search={false}/>
        <StartUp searchStartUp={this.props.match.params.StartUpId}/>
        <Link to="/">Ir a la home</Link>
      </>
    );
  }
}

export default VerStartUp;
