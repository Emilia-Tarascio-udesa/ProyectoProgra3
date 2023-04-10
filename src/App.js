import React from "react";
import {Route, Switch } from 'react-router-dom';
import Home from "./screens/Home/Home";
import Footer from "./Components/Footer/Footer"
import Header from "./Components/Header/Header";
import Buscador from "./Components/Buscador/Buscador";
import DetallePelicula from "../src/screens/DetallePelicula/DetallePelicula";
import Favoritas from "../screens/Favoritas/Favoritas"


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" component={Home}/>
        <Route path="/peliculasFavoritas" component={Favoritas}/>
        <Route path="/buscador" component={Buscador}/>
        <Route path="/detallePelicula" component={DetallePelicula}/>
      
      </Switch>
      <Footer/>
    
    </div>
  );
}

export default App;
// <Route path="/resultados/:title" component={Resultados}/>