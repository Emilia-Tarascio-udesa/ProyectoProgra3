import React, {Component} from "react"
import Buscador from "../../Components/Buscador/Buscador"
import ResultadosCards from "../../Components/ResultadosCards/ResultadosCards"

class Resultados extends Component {
    constructor(props){
        super(props);
        this.state={
           peliculas: [],
           palabraEncontrada: this.props.match.params.title ,
           loading: true,
        }
    }

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=cd01343e0629131590a07adb7eb11c98&language=en-US&query=${this.state.palabraEncontrada}&page=1&include_adult=true`)
        .then(res => res.json())
        .then(data => this.setState({
            peliculas: data.results,
            loading: false
        }))
        .catch()
}

render(){
    return(
        <React.Fragment>
            <Buscador/>

        <h1>Resultados de tu busqueda</h1>

        <section>{
        this.state.peliculasEncontradas.length !== 0 ? 
                            this.state.peliculas.map((unaPelicula, idx) => <ResultadosCards key={unaPelicula.title + idx} datosresult={unaPelicula}/>)
                                : 
                            <h1>No se encontraron resultados</h1>}
        </section>

        </React.Fragment>
        
    )
   
}

    }
