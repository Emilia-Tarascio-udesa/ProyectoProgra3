import React, { Component } from 'react'

class DetallePelicula extends Component {
    constructor(props){
        super(props)
        this.state={
            id:this.props.match.params.id,
            peliculaquellega:'',
            generos: []
        }
    }
    componentDidMount(){
        fetch("https://api.themoviedb.org/3/movie/${this.state.id}?api_key=cd01343e0629131590a07adb7eb11c98")
        .then(resp => resp.json())
        .then(data => this.setState({
            peliculaquellega:data,
            generos: data.genres
        }))
        .catch()
    }
    
    render() {
        return(
            <>
                <h2 className='name'>{this.state.peliculaquellega.title}</h2> 
                <img className='movie' src={`https://image.tmdb.org/t/p/w342/${this.state.peliculaquellega.poster_path}`} alt=""></img>
                <p className='resumen'>Resumen: {this.state.peliculaquellega.overview}</p>
                <h2 className='rating'>Rating: {this.state.peliculaquellega.vote_average}</h2>
                <h2 className='estreno'>Fecha de estreno: {this.state.peliculaquellega.release_date}</h2>
                <div> <ul>
                 {this.state.generos.map((Genero, idx) => <li key={Genero.name + idx}>{Genero.name}</li>)}
                </ul> </div>
            </>
        )
    }    
}
export default DetallePelicula