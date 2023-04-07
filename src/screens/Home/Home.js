import React from 'react';
import Movie from '../../Components/Movie/Movie';

function Home (){
    return(
        <React.Fragment>
            <h1 className="titular-home">Películas en cartelera</h1>
            <Movie />

            <h1 className="titular-home">Películas en cartelera</h1>
            <Serie />
        </React.Fragment>
    )
}

export default Home;