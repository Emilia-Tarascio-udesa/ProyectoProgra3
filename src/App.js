import React from "react";
import {Route, Switch } from 'react-router-dom';
import Home from "../src/screens/Home/";
import Footer from "./Components/Footer/Footer"
import Header from "./Components/Header/Header";
//import Buscador from "./Components/Buscador/Buscador";
//import DetallePeli from "./Components/DetallePeli";


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" component={Home}/>
        <Route path="/resultados/:title" component={Resultados}/>
      </Switch>
      <Footer/>
    
    </div>
  );
}

export default App;
