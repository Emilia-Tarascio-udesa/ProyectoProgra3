import React, { Component } from 'react';
import SeriesCard from '../../Components/SeriesCard/SeriesCard';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

let urlpopularSeries ='https://api.themoviedb.org/3/tv/top_rated?api_key=cd01343e0629131590a07adb7eb11c98'

class VerTodasSeries extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            series : [],
            loading: true
        }
    }

    componentDidMount() {
        fetch(urlpopularSeries)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    series: data.results,
                    loading: false
                })
            })
            .catch(err => console.log(err))
    }

    render() {
        return(
            <React.Fragment>
                <Header />
                <h1 className='encabezado'>Series Populares</h1>
                
                <section className='cardContainer'>
                    {
                        this.state.loading ? <img src="/img/loading.gif" alt="" /> :
                        this.state.series.map((unaPelicula, idx) => <SeriesCard key={idx} datosSeries={unaPelicula} />)
                    }
                </section>
                <Footer />
            </React.Fragment>
        )
    }
}

export default VerTodasSeries;