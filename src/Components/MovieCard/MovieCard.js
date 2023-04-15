import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.css'

class MovieCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            descriptionClass: 'ocultar',
            textoMostrarDescripcion: 'Ver descripcion',
            Favs : 'Agregar a favoritos'
        };
    };

    funcionalidadDescripcion() {
        if (this.state.descriptionClass === 'ocultar') {
            this.setState({
                descriptionClass: 'mostrar', textoMostrarDescripcion: 'Ocultar descripcion'
            })
        } else {
            this.setState({
                descriptionClass: 'ocultar', textoMostrarDescripcion: 'Ver descripcion'
            })
        }
    }

    componentDidMount(){

      let favoritos = [];
      let recuperoStorage = localStorage.getItem('favoritos')

      if(recuperoStorage !== null){
          let favoritosGuardados = JSON.parse(recuperoStorage);
          favoritos = favoritosGuardados

      }
      if (favoritos.includes(this.props.datosPeliculas.id)){
          this.setState ({
              favs: 'Quitar de Favoritos'
          })
      }
  }
  AgregarFavs(id) {

    let favoritos = [];
    let recuperoStorage = localStorage.getItem('favoritos')

    if (recuperoStorage !== null) {
        let favoritosGuardados = JSON.parse(recuperoStorage);
        favoritos = favoritosGuardados

    }

    if (favoritos.includes(id)) {

        favoritos = favoritos.filter(elId => elId !== id);
        this.setState({
            favs: 'Agregar a Favoritos'
        })
    }

    else {
        favoritos.push(id);
        this.setState({
            favs: 'Quitar de Favoritos'
        })
    }


    let favoritosAString = JSON.stringify(favoritos);

    localStorage.setItem('favoritos', favoritosAString);

    console.log(localStorage)
}

   


render() {
        return (
            <article className='movie-box'>


                <figure className='figuraImagen'>
                        <img src={`https://image.tmdb.org/t/p/w342/${this.props.datosPelicula.poster_path}`} alt="Cartel de película" />
                </figure>


                <h2 className='titulo'>{this.props.datosPelicula.title}</h2>
               
               
                <div className='descripcionCard'>
                    <p onClick={() => this.funcionalidadDescripcion()} className='OverViewCard'> {this.state.textoMostrarDescripcion} </p>
                    <p className={this.state.descriptionClass}>{this.props.datosPelicula.overview}</p>
                    <Link to={`/peliculas/detalle/id/${this.props.datosPelicula.id}`}>    </Link>
                   
                </div> 


                <div className='buttonsCard'>
                    <Link to={`/peliculas/detalle/id/${this.props.datosPelicula.id}`}>
                    <button>Ir al detalle de la pelicula </button>
                    </Link>
                   
                </div>
                <div>
                  <button onClick={()=>this.AgregarFavs(this.props.datosPeliculas.id)}>{this.state.Favs}</button>
                </div>

            </article>
        )
    }
}

export default MovieCard;
