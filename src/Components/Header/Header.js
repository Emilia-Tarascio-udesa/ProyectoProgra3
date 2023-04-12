import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom';

function Header() {
    
    return (
        <header className="encabezado">
            <nav className="computer">
                <div>
                    <ul className="navegador">
                        <li className="comp-nav">
                            <Link to="/">
                                <img  className="logo"src="/img/logo.png"alt="logo"/>
                            </Link>
                        </li>
                        
                        <li className="comp-nav">
                            <Link to="/peliculas/favoritos">Favoritos</Link>
                        </li>
                        
                        <li className="comp-nav">
                            <Link to="/peliculas/pop">Peliculas</Link>
                        </li>
                        
                        <li className="comp-nav">
                            <Link to="/series/pop">Series</Link>
                        </li> 
                    
                    </ul>
                </div>
            </nav>
        </header>
    );
}


export default Header;
