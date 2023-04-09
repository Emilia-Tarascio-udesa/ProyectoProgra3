import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class ResultadosCards extends Component {
    constructor(props) {
        super(props)
        this.state = {
            descripcionClass: 'ocultar',
            textoDescripcion: 'Ver descripcion',
        };
    };

    funcionDeDescripcion() {
        if (this.state.descriptionClass === 'ocultar') {
            this.setState({
                descripcionClass: 'mostrar',  textoDescripcion: 'Ocultar descripcion'
            })
        } else {
            this.setState({
                descripcionClass: 'ocultar',  textoDescripcion: 'Ver descripcion'
            })
        }
    }

   
  
render() {
        return (
            <article className='movie-box'>


                <figure className='figuraImagen'>
                        <img src={`https://image.tmdb.org/t/p/w342/${this.props.datosresult.poster_path}`} alt="Cartel de película" />
                </figure>


                <h2 className='titulo'>{this.props.datosresult.title}</h2>
               
               
                <div className='descripcionCard'>
                    <p onClick={() => this.funcionDeDescripcion()} className='OverViewCard'> {this.state.textoDescripcion} </p>
                    <p className={this.state.descripcionClass}>{this.props.datosresult.overview}</p>
                    <Link to={`/peliculas/detalle/id/${this.props.datosresult.id}`}>
                    </Link>
                </div>


                <div className='buttonsCard'>
                    <Link to={`/peliculas/detalle/id/${this.props.datosresult.id}`}>
                        <button>Ir a detalle</button>
                    </Link>
                    
                </div>

            </article>
        )
    }
}

export default ResultadosCards;
