import React, { Component } from "react"
import Buscador from "../../Components/Buscador/Buscador"
import ResultadosCards from "../../Components/ResultadosCards/ResultadosCards"

class SearchResults extends Component {}
constructor(props) {
    super(props)
      this.state = {
          loading: true,
          peliculas: [],
          palabraEncontrada: this.props.match.params.title,
      };
    }
  
    componentDidMount(); {
  
      fetch(`https://api.themoviedb.org/3/search/multi?api_key=cd01343e0629131590a07adb7eb11c98&language=en-US&query=${this.state.palabraEncontrada}&page=1&include_adult=true`)
        .then((res) => res.json())
        .then((data) =>
          this.setState({
              loading: false,
            peliculas: data.results,
          })
        )
        .catch((error) => {
          console.error("Error fetching search results:", error);
        });
    }
  
    render() {
        return (
          <>
            <Buscador />
            <h1>Resultados de tu busqueda</h1>
            {this.state.loading ? (
              <img src="/img/loading.gif" alt="" />
            ) : (
              <section>
                {this.state.peliculas.length !== 0 ? (
                  this.state.peliculas.map((unaPelicula, idx) =>
                    unaPelicula.media_type === "tv" ? (
                      <ResultadosCards key={unaPelicula.title + idx} datosresult={unaPelicula} tipo="serie" />
                    ) : unaPelicula.media_type === "movie" && (
                      <ResultadosCards key={unaPelicula.title + idx} datosresult={unaPelicula} tipo="pelicula" />
                    )
                  )   
                ) : (
                  <h1>No se encontraron resultados</h1>
                )}
              </section>
            )}
          </>
        );
      }

      export default SearchResults