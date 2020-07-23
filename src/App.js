import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      cards: [],
    };
  }

  handleData(inputValue) {
    this.setState({ inputValue: inputValue });
  }

  componentDidMount() {
    document.title = "StartUps ARG"
    let listaStartups = localStorage.getItem("lista")
    listaStartups = JSON.parse(listaStartups)
    this.setState({
       cards: listaStartups
    });
  }

  render() {
    const { inputValue, cards } = this.state;
    return (
      <div className="App">
        <Navbar
          getData={(inputValue) => this.handleData(inputValue)}
          name="STARTUP ARGENTINA"
          search={true}
        />
        <Cards filter={inputValue} cards={cards} />
        <Footer creator="Gonzalito" />
      </div>
    );
  }
}

export default App;
