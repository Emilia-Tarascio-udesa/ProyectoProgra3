import React, { Component } from 'react'
import MovieCard from '../../components/MovieCard/MovieCard'


class Favoritas extends Component{
    constructor(){
        super();
        this.state = {
            peliculasFavs:[] 
        }
    }

    componentDidMount(){
        let favoritas = [];
        let recuperoStorage = localStorage.getItem('favoritos')

        if(recuperoStorage !== null){
            favoritas = JSON.parse(recuperoStorage) /
            

            favoritas.forEach(unIdFavorito => {
                
                let url = `https://api.themoviedb.org/3/movie/${unIdFavorito}?api_key=a21964bccbb974a7f0bb1668b14f27bd&language=en-US&page=1`
                fetch(url)
                    .then(res => res.json())
                    .then(data => this.setState({ peliculasFavs: this.state.peliculasFavs.concat(data) }))
                    .catch(e => console.log(e))
                    
            })  
        }    
    }
   
    render(){
        return(
            <React.Fragment>
                
                <h2 className='favoritas'>Tus favoritas</h2>
                 <section className='card-container'>
                    { 
                        this.state.peliculasFavs.map( (unPelicula, idx) => <Card key={unPelicula.titel+idx} datosPelicula={unPelicula}/>)
                    }
                </section>
            </React.Fragment>
        )
    }
}

export default Favoritas;