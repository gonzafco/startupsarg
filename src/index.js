import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Navbar";
import Prueba from "./pages/Prueba";
import AddStartUp from "./pages/AgregarStartUp";
import StartUp from "./pages/VerStartUp";


const startUps = 
  [{
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
  }]
;

localStorage.setItem("lista",JSON.stringify(startUps))

ReactDOM.render(
  <Router>
    <Route exact path="/" component={App} />
    <Route exact path="/prueba" component={Prueba} />
    <Route exact path="/AgregarStartUp" component={AddStartUp} />
    <Route exact path="/StartUp/:StartUpId" component={StartUp} />    
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

