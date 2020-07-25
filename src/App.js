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
      cards: [
        {
          img:
            "https://pbs.twimg.com/profile_images/1259719811296309249/um6CLRiM_400x400.jpg",
          title: "CourseIt",
          description: "Descripción de CourseIt",
        },
        {
          img:
            "https://pbs.twimg.com/profile_images/1052208764726730753/s5bagDr__400x400.jpg",
          title: "Endava",
          description: "Descripción de Endava",
        },
      ],
    };
  }

  handleData(inputValue) {
    this.setState({ inputValue: inputValue });
  }

  componentDidMount() {
    let listaStartUps = localStorage.getItem("lista");
    console.log(listaStartUps);
    if (listaStartUps === null) {
      let { cards } = this.state;
      let startUps = JSON.stringify(cards);
      localStorage.setItem("lista", startUps);      
    } else {
      let lista = localStorage.getItem("lista")
      let startUps = JSON.parse(lista);
      this.setState({ cards: startUps });
    }
    document.title = "StartUps ARG";
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
