import React from 'react';
import Movie from '../../Components/Movie/Movie';
import Series from '../../Components/Series/Series';
import Buscador from "../../Components/Buscador/Buscador"
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';


function Home (){
    return(
        <React.Fragment>
            <Header/>
            <Buscador/>

            <h1 className="titular-home">Películas en cartelera</h1>
            <Movie />
            
            <h1 className="titular-home">Series en cartelera</h1>
            <Series />

            <Footer/>


        </React.Fragment>
    )
}

export default Home;
//<h1 className="titular-home">Series en cartelera</h1>
//<Serie />