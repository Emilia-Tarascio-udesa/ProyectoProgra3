import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Buscador.css'

class Buscador extends Component{
    
    constructor(props){
        super(props);
        this.state={
            input: "",
        }
    }
    prevenirLoad(e){ 
        e.preventDefault();
    };

    guardarCambios(e){ 
        this.setState({
            input: e.target.value
        }); 
    };
    render () {
        return (
            <React.Fragment>
                <form  className="buscador-container" onSubmit={(e) => this.prevenirLoad(e)}>
                    <input className="buscador-input" type='text' placeholder='pelicula' onChange={(e) => this.guardarCambios(e)} value={this.state.input} />
                    {
                        this.state.input ?
                            <Link to={`/resultados/${this.state.input}`}>
                                <input className="buscador-submit"  type='submit' value='submit' /> 
                            </Link> 
                            :
                            <input className="buscador-submit" type='submit' value='submit' /> 
                    }
                </form> 
            </React.Fragment>
        )

    }
}

export default Buscador;