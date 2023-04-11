import React, { Component } from 'react'

class DetalleSerie extends Component {
    constructor(props){
        super(props)
        this.state={
            id:this.props.match.params.id,
            seriequellega:'',
            generos: []
        }
    }
    componentDidMount(){
        fetch("`https://api.themoviedb.org/3/tv/${this.state.id}?api_key=cd01343e0629131590a07adb7eb11c98")
        .then(resp => resp.json())
        .then(data => this.setState({
            seriequellega:data,
            generos: data.genres
        }))
        .catch()
    }
    
    render() {
        return(
            <>
                <h2 className='name'>{this.state.seriequellega.name}</h2> 
                <img className='movie' src={`https://image.tmdb.org/t/p/w342/${this.state.seriequellega.poster_path}`} alt=""></img>
                <p className='resumen'>Resumen: {this.state.seriequellega.overview}</p>
                <h2 className='rating'>Rating: {this.state.seriequellega.popularity}</h2>
                <h2 className='estreno'>Fecha de estreno: {this.state.seriequellega.first_air_date}</h2>
                <div> <ul>
                 {this.state.generos.map((Genero, idx) => <li key={Genero.name + idx}>{Genero.name}</li>)}
                </ul> </div>
            </>
        )
    }
}
export default DetalleSerie
