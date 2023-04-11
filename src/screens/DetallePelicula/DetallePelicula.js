import React, { Component } from 'react'

class DetallePelicula extends Component {
    constructor(props){
        super(props)
        this.state={
            id:this.props.match.params.id,
            movie:''
        }
    }
    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=cd01343e0629131590a07adb7eb11c98&language=en-US&query=${this.state.id}&page=1&include_adult=true`)
        .then(resp => resp.json())
        .then(data => this.setState({
            movie:data
        }))
        .catch()
    }
    
    render() {
        return(
            <>
                <h2 className='name'>{this.state.movie.title}</h2> 
                <img className='movie' src={'https://image.tmdb.org/t/p/w342' + this.state.movie.poster_path} alt=""></img>
                <p className='resumen'>Resumen: {this.state.movie.overview}</p>
                <h2 className='rating'>Rating: {this.state.movie.vote_average}</h2>
                <h2 className='estreno'>Fecha de estreno: {this.state.movie.release_date}</h2>
            
            </>
        )
    }    
}
export default DetallePelicula