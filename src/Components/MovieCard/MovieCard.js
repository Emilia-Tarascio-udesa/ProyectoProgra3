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

//revisar 
    componentDidMount(){
        let storage = localStorage.getItem('favoritos')
        let storageAArray = JSON.parse(storage)
    
        if(storageAArray !== null){
          let estaEnElArray = storageAArray.includes(this.props.info.id)
          if(estaEnElArray){
            this.setState({
              esFavorito: true
            })
          }
        }
      }
 
    anhadirFav(id){
        let storage = localStorage.getItem('favoritos')
    
        if(storage === null){
          let idEnArray = [id]
          let arrayAString = JSON.stringify(idEnArray)
          localStorage.setItem('favoritos', arrayAString)
    
        } else {
          let deStringAArray = JSON.parse(storage) 
          deStringAArray.push(id)
          let arrayAString = JSON.stringify(deStringAArray)
          localStorage.setItem('favoritos', arrayAString)
        }
    
        this.setState({
          esFavorito: true
        })
      }
      
    
      sacarFav(id){
        let storage = localStorage.getItem('favoritos')
        let storageAArray = JSON.parse(storage)
        let filtro = storageAArray.filter((elm)=> elm !== id)
        let filtroAString = JSON.stringify(filtro)
        localStorage.setItem('favoritos', filtroAString)
    
        this.setState({
          esFavorito: false
        })
    
    
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
                        <button>Ir al detalle de la pelicula</button>
                    </Link>
                   
                </div>

            </article>
        )
    }
}

export default MovieCard;
