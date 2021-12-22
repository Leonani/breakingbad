import React from 'react'
import './frase.css'

const Frase = ({frase}) => {

    if(Object.keys(frase).length === 0) return null;

    return(
        <div className='frase'>
            <h1>{frase.quote}</h1>
            <p>- {frase.author}</p>
        </div>
    );
}

export default Frase;