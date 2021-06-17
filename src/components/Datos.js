import React from 'react';
import PropTypes from 'prop-types';

const Datos = ({datos}) => {

    const {strArtist, strArtistThumb, strGenre, strCountry, strBiographyES, strBiographyEN } = datos;

    return ( 
        <div className="col-12 col-md-6 my-4">
            <img className="img-fluid" src={strArtistThumb} alt={strArtist} />
            <h1>{strArtist}</h1>
            <p><strong>Genero:</strong> {strGenre}</p>
            <p><strong>Ubicación: </strong> {strCountry}</p>
            <p><strong>Biografia: </strong> <br />{(strBiographyES === null) ? strBiographyEN : strBiographyES}</p>
        </div>
     );
}

Datos.propTypes={
    datos:PropTypes.array.isRequired
}
 
export default Datos;