import React, {useState} from 'react'
import Frase from './components/frase';
import './app.css'



function App() {

  //state de frase
  const [frase, obtenerFrase] = useState({});

  const consultarApi = async () =>{
    
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');

    const frase = await  api.json();
    console.log(frase[0])
    obtenerFrase(frase[0]);
  }

  return (
  
    <div className='contenedor'>

      <Frase
        frase={frase}
      />

      <button
        className='btn'
        onClick={consultarApi}
      >Frases de brakingBad</button>
      
    </div>
    
    
  );
}

export default App;
