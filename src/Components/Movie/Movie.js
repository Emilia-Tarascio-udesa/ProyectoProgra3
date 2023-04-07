import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import MovieCard from '../MovieCard/MovieCard';


let urlpopularMovies = "https://api.themoviedb.org/3/movie/popular?api_key=cd01343e0629131590a07adb7eb11c98"


class Movies extends Component {
    constructor() {
        super()
        this.state = {
            peliculasPopulares: [],
        }
    }

    componentDidMount() {
        //Buscamos los datos de las peliculas mas populares
        fetch(urlpopularMovies)
            .then(res => res.json())
            .then(data => this.setState({
                peliculasPopulares: data.results,
            }))
            .catch()
    }

    render() {
        return (
            <React.Fragment>
                <h1 className='encabezado'>Películas Populares</h1>
                <section className='cardContainer'>
                    {
                        this.state.peliculasPopulares.map((unaPelicula, idx) => <MovieCard key={unaPelicula.name + idx} datosPeliculas={unaPelicula} />)
                    }
                </section>
            </React.Fragment>
        )
    }
}

export default Movies;