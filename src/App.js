import React from "react";
import {Route, Switch } from 'react-router-dom';
import Home from "./screens/Home/Home";
import Footer from "./Components/Footer/Footer"
import Header from "./Components/Header/Header";
import Buscador from "./Components/Buscador/Buscador";
import DetallePelicula from "../src/screens/DetallePelicula/DetallePelicula";


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" component={Home}/>
      
      </Switch>
      <Footer/>
    
    </div>
  );
}

export default App;
// <Route path="/resultados/:title" component={Resultados}/>