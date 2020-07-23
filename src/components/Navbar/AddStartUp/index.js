import React from "react";
import "./style.css";
import Navbar from "../../Navbar";
import Footer from "../../Footer";

class AddStartUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      logo: "",
      mail: "",
      description: "",
      web: "",
      twitter: "",
      instagram: "",
      estaOk: "",
      showMessage: false,
      exist: false,
    };
  }

  handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { name, mail, logo, description } = this.state;
    const isValid = name && mail && logo && description ? true : false;
    this.setState({ estaOk: isValid, showMessage: true }, () => {
      if (isValid) {
        let newStartUp = {
          img: logo,
          title: name,
          description: description,
        };
        this.AddNewStartUp(newStartUp);
      }
    });
  }

  AddNewStartUp(startUp) {
    let listaStartUps = localStorage.getItem("lista");
    listaStartUps = JSON.parse(listaStartUps);
    
    if (this.checkStartUp(startUp.title, listaStartUps) === false) {
      console.log("no existe y la agrego")
      listaStartUps.push(startUp);
      localStorage.setItem("lista", JSON.stringify(listaStartUps));
    } else {
      this.setState({ exist: true }, () => {
        console.log(this.state.exist);
      });
    }
  }

  checkStartUp(startup, listaStartUps) {
    let resultado = listaStartUps.find(
      (item) => item.title.toLowerCase() === startup.toLowerCase()
    );
    return resultado === undefined ? false : true;
  }

  saveStartUp(item) {}

  render() {
    const { estaok, showMessage } = this.state;
    return (
      <div className="formWrapper">
        {this.state.showMessage && (
          <p>{this.state.estaOk ? "Todo salio bien" : "Todo salio mal"}</p>
        )}
        <div className="inputWrapper">
          <label className="label">
            Nombre *
            <input
              className="input"
              type="text"
              name="name"
              placeholder="Nombre"
              onChange={(e) => this.handleInputChange(e)}
            />
          </label>
        </div>
        <div className="inputWrapper">
          <label className="label">
            Logo *
            <input
              className="input"
              type="text"
              name="logo"
              placeholder="Link del logo"
              onChange={(e) => this.handleInputChange(e)}
            />
          </label>
        </div>
        <div className="inputWrapper">
          <label className="label">
            Mail *
            <input
              className="input"
              type="text"
              name="mail"
              placeholder="Mail"
              onChange={(e) => this.handleInputChange(e)}
            />
          </label>
        </div>
        <div className="inputWrapper">
          <label className="label">
            Descripción *
            <input
              className="input"
              type="text"
              name="description"
              onChange={(e) => this.handleInputChange(e)}
            />
          </label>
        </div>
        <div className="inputWrapper">
          <label className="label">
            Web
            <input
              className="input"
              type="text"
              name="web"
              placeholder="Web (opcional)"
              onChange={(e) => this.handleInputChange(e)}
            />
          </label>
        </div>
        <div className="inputWrapper">
          <label className="label">
            Twitter
            <input
              className="input"
              type="text"
              name="twitter"
              placeholder="Twitter (opcional)"
              onChange={(e) => this.handleInputChange(e)}
            />
          </label>
        </div>
        <div className="inputWrapper">
          <label className="label">
            Instagram
            <input
              className="input"
              type="text"
              name="instagram"
              placeholder="Instagram (opcional)"
              onChange={(e) => this.handleInputChange(e)}
            />
          </label>
        </div>
        <button className="submitButton" onClick={() => this.handleClick()}>
          Enviar
        </button>
      </div>
    );
  }
}

export default AddStartUp;
