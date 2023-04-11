import React from "react";
import {Route, Switch } from 'react-router-dom';
import Home from "./screens/Home/Home";
import Footer from "./Components/Footer/Footer"
import Header from "./Components/Header/Header";
import Buscador from "./Components/Buscador/Buscador";
import DetallePelicula from "./screens/DetallePelicula/DetallePelicula";
import DetalleSerie from "./screens/DetalleSerie/DetalleSerie";
import SearchResults from "./screens/SearchResults/SearchResults"


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" component={Home}/>
        <Route path="/buscador" component={Buscador}/>
        <Route path="/peliculas/detalle/id/:id" component={DetallePelicula}/>
        <Route path="/series/detalle/id/:id" component={DetalleSerie}/>
        <Route path="/resultados/:title" component={SearchResults}/>
      </Switch>
      <Footer/>
    
    </div>
  );
}

export default App;