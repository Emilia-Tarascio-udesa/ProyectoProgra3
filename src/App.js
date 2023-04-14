import React from "react";
import {Route, Switch } from 'react-router-dom';
import Home from "./screens/Home/Home";
import DetallePelicula from "./screens/DetallePelicula/DetallePelicula";
import DetalleSerie from "./screens/DetalleSerie/DetalleSerie";
import SearchResults from "./screens/SearchResults/SearchResults"
import VerTodasPeliculas from "./screens/VerTodas/VerTodasPeliculas";
import VerTodasSeries from "./screens/VerTodas/VerTodasSeries";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/ver-todas-las-peliculas" component={VerTodasPeliculas} />
        <Route path="/ver-todas-las-series" component={VerTodasSeries} />
        <Route path="/peliculas/detalle/id/:id" component={DetallePelicula}/>
        <Route path="/series/detalle/id/:id" component={DetalleSerie}/>
        <Route path="/resultados/title/:title" component={SearchResults}/>
      </Switch>
    </div>
  );
}

export default App;