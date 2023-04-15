import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SeriesCard.css'



class SeriesCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            descriptionClass: 'ocultar',
            textoMostrarDescripcion: 'Ver descripcion',
            Favs:'agregar a favs'
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
    anadirFav(id){
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
            <article className='series'>


                <figure className='figuraImagen'>
                        <img src={`https://image.tmdb.org/t/p/w342/${this.props.datosSeries.poster_path}`} alt="Cartel de película" />
                </figure>

                <h2 className='titulo'>{this.props.datosSeries.original_name}</h2>
                  
                <div>
                    <p onClick={() => this.funcionalidadDescripcion()} className='OverViewCard'> {this.state.textoMostrarDescripcion} </p>
                    <p className={this.state.descriptionClass}>{this.props.datosSeries.overview}</p>
                    <Link to={`/peliculas/detalle/id/${this.props.datosSeries.id}`}>
                    </Link>
                </div>


                <div>
                    <Link to={`/series/detalle/id/${this.props.datosSeries.id}`}>
                        <button>Ir al detalle de la serie</button>
                    </Link>
                   
                </div>
                <div>
                { <button onClick={()=>this.anadirFav(this.props.datosSeries.overview)}>añadir a Favs</button> }
                </div>

            </article>
        )
    }
}

export default SeriesCard;

