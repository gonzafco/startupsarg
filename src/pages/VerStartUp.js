import React from "react";
import Navbar from "../components/Navbar";
import AddStartUp from "../components/Navbar/AddStartUp";
import { Link } from "react-router-dom";
import StartUp from "../components/StartUp";

class VerStartUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startUpName: "",
    };
  }
  componentDidMount() {
    this.setState(
      { startUpName: this.props.match.params.StartUpId },
      () => (document.title = "Ficha de " + this.state.startUpName)
    );
  }

  render() {
    return (
      <>
        <Navbar name="STARTUP ARGENTINA" search={false} />
        <StartUp searchStartUp={this.props.match.params.StartUpId} />
      </>
    );
  }
}

export default VerStartUp;
