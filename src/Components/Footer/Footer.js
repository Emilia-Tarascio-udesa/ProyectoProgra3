import React from 'react'
import './Footer.css'

function Footer() {
    return (
        
        <footer className="formato">
            <nav className="uk-divider-icon">
                <div className= "tmdb">
                <img  className="logo"src="/img/logo.png"alt="logo"/>
                    </div>
                 

                <ul className="integrantes">
                    <li>Lucila Cabello</li>
                    <li>Rocco Pellegrino</li>
                    <li>Emilia Tarascio</li>
                </ul>
            </nav>
        </footer>

    );
}

export default Footer;


