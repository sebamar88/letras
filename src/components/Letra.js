import React from 'react';
import PropTypes from 'prop-types';

const Letra = ({letra}) => {


    return ( 
        <div className="col-12 col-md-6 my-4">
            <h2>Letra de la canción</h2>
            <p className="letra">{letra}</p>
        </div>
     );
}

Letra.propTypes={
    letra:PropTypes.string.isRequired
}
 
export default Letra;