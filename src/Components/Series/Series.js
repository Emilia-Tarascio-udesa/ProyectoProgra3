import React from "react"
import {Link} from 'react-router-dom';
import SeriesCard from '../SeriesCard/SeriesCard'


let urlpopularSeries =''

class Series extends Component {
    constructor() {
        super()
        this.state = {
            seriesPopulares: [],
        }
    }

    componentDidMount() {
        //Buscamos los datos de las series mas populares
        fetch(urlpopularSeries)
            .then(res => res.json())
            .then(data => this.setState({
                seriesPopulares: data.results,
            }))
            .catch()
    }

    render() {
        return (
            <React.Fragment>
                <h1 className='encabezado'>Series Populares</h1>
                <section className='cardContainer'>
                    {
                        this.state.seriesPopulares.map((unaSerie, idx) => <MovieCard key={unaSerie.name + idx} datosSeries={unaSerie} />)
                    }
                </section>
            </React.Fragment>
        )
    }
}

export default Series;