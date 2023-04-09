import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class MovieCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            descriptionClass: 'ocultar',
            textoMostrarDescripcion: 'Ver descripcion',
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

   
  
render() {
        return (
            <article className='movie-box'>


                <figure className='figuraImagen'>
                        <img src={`https://image.tmdb.org/t/p/w342/${this.props.datosPeliculas.poster_path}`} alt="Cartel de película" />
                </figure>


                <h2 className='titulo'>{this.props.datosPeliculas.title}</h2>
               
               
                <div className='descripcionCard'>
                    <p onClick={() => this.funcionalidadDescripcion()} className='OverViewCard'> {this.state.textoMostrarDescripcion} </p>
                    <p className={this.state.descriptionClass}>{this.props.datosPeliculas.overview}</p>
                    <Link to={`/peliculas/detalle/id/${this.props.datosPeliculas.id}`}>
                    </Link>
                </div>


                <div className='buttonsCard'>
                    <Link to={`/peliculas/detalle/id/${this.props.datosPeliculas.id}`}>
                        <button>Ir a detalle</button>
                    </Link>
                   
                </div>

            </article>
        )
    }
}

export default MovieCard;
