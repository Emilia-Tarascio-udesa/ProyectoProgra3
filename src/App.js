import React from "react";
import { Route, Link } from "react-router-dom";
import {Switch } from 'react-router-dom';
import Home from "./screens/Home/Home";
import DetallePelicula from "./screens/DetallePelicula/DetallePelicula";
import DetalleSerie from "./screens/DetalleSerie/DetalleSerie";
import SearchResults from "./screens/SearchResults/SearchResults"
import VerTodasPeliculas from "./screens/VerTodas/VerTodasPeliculas";
import VerTodasSeries from "./screens/VerTodas/VerTodasSeries";
import Favoritos from "./screens/Favoritos/Favoritos";


function App() {
  return (
    <main className="App">
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/ver-todas-las-peliculas" component={VerTodasPeliculas} />
        <Route path="/ver-todas-las-series" component={VerTodasSeries} />
        <Route path="/peliculas/detalle/id/:id" component={DetallePelicula}/>
        <Route path="/series/detalle/id/:id" component={DetalleSerie}/>
        <Route path="/resultados/title/:title" component={SearchResults}/>
        <Route path="/peliculas/favoritos" component={Favoritos}/>
      </Switch>
    </main>
  );
}

export default App;