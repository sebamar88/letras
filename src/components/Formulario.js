import React, {useState} from 'react';
import PropTypes from 'prop-types';

const Formulario = ({setSearch}) => {

    const [busqueda, setBusqueda] = useState({
        artista: '',
        cancion: ''
    });
    const [error, setError]=useState(false)

    const {artista, cancion} = busqueda;

    const handleSubmit = e =>{
        e.preventDefault()

        if(cancion.trim()==='' || artista.trim()===''){
            setError(true)
            return;
        }
        setError(false)
        setSearch(busqueda)
    }

    return ( 
        <div className="bg-info">
            <div className="container">
                <div className="row">
                    <form
                    className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                    onSubmit={handleSubmit}
                    >
                        
                        <fieldset>
                            <legend className="text-center">Buscador Letras Canciones</legend>

                            <div className="row">
                                <div className="col-12 col-md-6">
                                   <div className="form-group">
                                       <label>Artista: </label>
                                       <input 
                                        type="text" className="form-control"
                                        name="artista"
                                        placeholder="Nombre Artista"
                                        value={artista}
                                        onChange={e => setBusqueda({...busqueda, [e.target.name]:e.target.value})}
                                       />
                                    </div> 
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="form-group">
                                       <label>Canción: </label>
                                       <input 
                                        type="text" className="form-control"
                                        name="cancion"
                                        placeholder="Nombre Canción"
                                        value={cancion}
                                        onChange={e => setBusqueda({...busqueda, [e.target.name]:e.target.value})}
                                       />
                                    </div> 
                                </div>
                            </div>
                            <button 
                            type="submit"
                            className="btn btn-primary btn-lg float-right"
                            >Buscar</button>
                        </fieldset>
                        {error ? <p className="my-3 p-4 text-center alert alert-primary" role="alert">Todos los campos son Obligatorios!</p> : null}
                    </form>
                </div>
            </div>
        </div>
     );
}

Formulario.propTypes = {
    setSearch:PropTypes.func.isRequired
}

export default Formulario;