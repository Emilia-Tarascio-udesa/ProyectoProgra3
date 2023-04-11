import React from 'react';
import Movie from '../../Components/Movie/Movie';
import Series from '../../Components/Series/Series';
import Buscador from "../../Components/Buscador/Buscador"


function Home (){
    return(
        <React.Fragment>
            <Buscador/>

            <h1 className="titular-home">Películas en cartelera</h1>
            <Movie />
            
            <h1 className="titular-home">Series en cartelera</h1>
            <Series />


        </React.Fragment>
    )
}

export default Home;
//<h1 className="titular-home">Series en cartelera</h1>
//<Serie />