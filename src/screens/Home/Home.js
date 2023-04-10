import React from 'react';
import Movie from '../../Components/Movie/Movie';
import Buscador from "../../Components/Buscador/Buscador"


function Home (){
    return(
        <React.Fragment>
            <Buscador/>

            <h1 className="titular-home">Películas en cartelera</h1>
            <Movie />
            



        </React.Fragment>
    )
}

export default Home;
//<h1 className="titular-home">Series en cartelera</h1>
//<Serie />