import React from "react";
import "./style.css";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import Card from "../../Cards/Card";
import Modal from 'react-modal';

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
      isOk: false,
      error: false,
      mensaje: "",
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
    if (isValid === true) {
      this.setState({ isOk: true, error:false, mensaje:"" });
    }
    else{
      this.setState({ isOk: false, error: true, mensaje: "Faltan completar campos que son obligatorios." });      
    }
    
  }

  agregarStartUp() {
    const { name, logo, description } = this.state;
    let newStartUp = {
      img: logo,
      title: name,
      description: description,
    };
    this.AddNewStartUp(newStartUp);
  }

  AddNewStartUp(startUp) {
    let listaStartUps = localStorage.getItem("lista");
    listaStartUps = JSON.parse(listaStartUps);

    if (this.checkStartUp(startUp.title, listaStartUps) === false) {
      listaStartUps.push(startUp);
      localStorage.setItem("lista", JSON.stringify(listaStartUps));
    } else {
      this.setState({
        isOk: false,
        error: true,
        mensaje: "La startup que desea agregar ya existe",
      });
    }
  }

  checkStartUp(startup, listaStartUps) {
    let resultado = listaStartUps.find(
      (item) => item.title.toLowerCase() === startup.toLowerCase()
    );
    return resultado === undefined ? false : true;
  }
  render() {
    const { isOk, exist, error } = this.state;
    const startUp = {
      title: this.state.name,
      img: this.state.logo,
      description: this.state.description,
    };

    return (
      <div className="formWrapper">
        {/* {this.state.showMessage && (
          <p>{this.state.estaOk ? "Todo salio bien" : "Todo salio mal"}</p>
        )} */}
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
          Validar
        </button>

        {isOk === true && (
          <>
            <div className="wardWrapper">
              <Card className startup={startUp} />
            </div>
            <button
              className="submitButton"
              onClick={() => this.agregarStartUp()}
            >
              Agregar Startup
            </button>
            
          </>
        )}

        {error === true && (
          <>
            <span className="errorWrapper">
              Hubo un error. {this.state.mensaje}
            </span>

          </>
        )}
      </div>
    );
  }
}

export default AddStartUp;

// componentDidUpdate(){
//   console.log("se actualizo")
//   const {isOk} = this.state
//   const startup = {
//     title: this.state.name,
//     img: this.state.logo,
//     description: this.state.description
//   }
//   let preview
//   if (isOk === true){
//     preview = <Card startup={startup} />
//   }
//   else{
//     preview = <p>Algo salio mal</p>
//   }

// }
