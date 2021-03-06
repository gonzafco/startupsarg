import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddStartUp from "./pages/AgregarStartUp";
import StartUp from "./pages/VerStartUp";

ReactDOM.render(
  <Router>
    <Route exact path="/" component={App} />
    <Route exact path="/agregar-startup" component={AddStartUp} />
    <Route exact path="/start-up/:StartUpId" component={StartUp} />    
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

