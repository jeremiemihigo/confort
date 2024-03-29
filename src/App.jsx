import React from "react";
import ReactDOM from "react-dom/client";
import { Route, Switch } from "react-router-dom";
import Acceuil from "./Pages/Acceuil.jsx";
import "./App.scss";
import "./index.css";
import "./Component/style.css";
import About from "./Pages/About.jsx";
import Projet from "./Pages/Projet.jsx";
import Service from "./Pages/Service.jsx";
import VoirPlus from "./Pages/VoirPlus.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

function App(){
  return (
     <Switch>
    <Route exact path="/" component={Acceuil} />
    <Route exact path="/about" component={About} />
    <Route exact path="/projet" component={Projet} />
    <Route exact path="/service" component={Service} />
    <Route exact path="/plus" component={VoirPlus} />
    <Route component={Acceuil} />
  </Switch>
  )
}
export default App
