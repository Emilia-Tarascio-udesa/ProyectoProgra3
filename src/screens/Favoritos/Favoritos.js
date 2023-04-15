import React, { Component } from 'react'
import MovieCard from '../../Components/MovieCard/MovieCard';
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header';

class Favoritos extends Component{
constructor(){
    super();
    this.state = {
        peliculasFavs:[] 
    }
}

componentDidMount(){
    let favoritos = [];
    let recuperoStorage = localStorage.getItem('favoritos')


    if(recuperoStorage !== null){

        favoritos = JSON.parse(recuperoStorage)

        favoritos.forEach(unIdFavorito => {    
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
        <>
        <Header/>
        <React.Fragment>
            
            <h2 className='favoritas'>Tus favoritas</h2>
             <section className='card-container'>
                { 
                    this.state.peliculasFavs.map( (unPelicula, idx) => <MovieCard key={unPelicula.titel+idx} datosPeliculas={unPelicula}/>)
                }
            </section>
        </React.Fragment>
        <Footer/>
         </>
    )
   
}
}

export default Favoritos;