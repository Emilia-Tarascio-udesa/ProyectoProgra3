import React, {Component} from "react"
import {Link} from 'react-router-dom';
import SeriesCard from '../SeriesCard/SeriesCard'
import './Series.css'

let urlpopularSeries ='https://api.themoviedb.org/3/tv/top_rated?api_key=cd01343e0629131590a07adb7eb11c98'

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
                        this.state.seriesPopulares.map((unaSerie, idx) => <SeriesCard key={unaSerie.name + idx} datosSeries={unaSerie} />)
                    }
                </section>
            </React.Fragment>
        )
    }
}

export default Series;