import React from 'react'
import './Footer.css'

function Footer() {
    return (
        
        <footer className="formato">
            <nav className="uk-divider-icon">
                <div className= "tmdb">
                    <img  src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_1-8ba2ac31f354005783fab473602c34c3f4fd207150182061e425d366e4f34596.svg" alt="TMDBLogo" />               
                    </div>
                

                <ul className="integrantes">
                    <li>Emilia Tarascio</li>
                    <li>Lucila Cabello</li>
                    <li>Rocco Pellegrino</li>
                </ul>
            </nav>
        </footer>

    );
}

export default Footer;


