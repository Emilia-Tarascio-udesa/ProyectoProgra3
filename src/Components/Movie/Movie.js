import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import MovieCard from '../MovieCard/MovieCard';
import './Movie.css'

let urlpopularMovies = "https://api.themoviedb.org/3/movie/popular?api_key=cd01343e0629131590a07adb7eb11c98"


class Movies extends Component {
    constructor() {
        super()
        this.state = {
            peliculasPopulares: [],
            loading: true
        }
    }

    componentDidMount() {
        //Buscamos los datos de las peliculas mas populares
        fetch(urlpopularMovies)
            .then(res => res.json())
            .then(data => {
                let listaPeliculasPopulares = []
                data.results.filter((unaPelicula, idx) => {
                    if (idx < 4) {
                        listaPeliculasPopulares.push(unaPelicula)
                    }
                    return null
                })
                this.setState(
                    {
                        peliculasPopulares: listaPeliculasPopulares,
                        loading: false
                    }
                )
            })
            .catch(err => console.log(err))
    }

    redirectToAll(e) {
        e.preventDefault()
        this.props.history.push('/ver-todas-las-peliculas')
    }

    render() { 
        return (
            <React.Fragment>
                <h1 className='encabezado'>Películas Populares <Link to="/ver-todas-las-peliculas" >Ver todas</Link></h1>
                <section className='cardContainer'>
                    {
                        this.state.loading ? <img src="/img/loading.gif" alt="" /> :
                        this.state.peliculasPopulares.map((unaPelicula, idx) => <MovieCard key={unaPelicula.name + idx} datosPeliculas={unaPelicula} />)
                    }
                </section>
            </React.Fragment>
        )
    }
}

export default Movies;