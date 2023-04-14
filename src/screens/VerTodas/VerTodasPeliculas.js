import React, { Component } from 'react';
import MovieCard from '../../Components/MovieCard/MovieCard';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

let urlpopularMovies = "https://api.themoviedb.org/3/movie/popular?api_key=cd01343e0629131590a07adb7eb11c98"

class VerTodasPeliculas extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            peliculas : [],
            loading: true
        }
    }

    componentDidMount() {
        fetch(urlpopularMovies)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    peliculas: data.results,
                    loading: false
                })
            })
            .catch(err => console.log(err))
    }

    filtrarPeliculas = (e) => {
        e.preventDefault()
        let peliculasFiltradas = this.state.peliculas.filter(unaPelicula => unaPelicula.title.toLowerCase().includes(e.target.value.toLowerCase()))
        this.setState({
            peliculas: peliculasFiltradas
        })
    }

    render() {
        return(
            <React.Fragment>
                <Header />
                <h1 className='encabezado'>Películas Populares</h1>
                <input type="text" placeholder="Buscar" onChange={this.filtrarPeliculas} />
                <section className='cardContainer'>
                    {
                        this.state.loading ? <img src="/img/loading.gif" alt="" /> :
                        this.state.peliculas.map((unaPelicula, idx) => <MovieCard key={idx} datosPeliculas={unaPelicula} />)
                    }
                </section>
                <Footer />
            </React.Fragment>
        )
    }
}

export default VerTodasPeliculas;