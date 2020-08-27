import React,{useState} from 'react';
import styled from '@emotion/styled';
import Frase from './components/Frase';

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
`;

/*Sin await
const consultarAPI=()=>{
  const resultado = fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
  const frase = resultado.then( respuesta=> respuesta.json());
  frase.then(resultado => console.log(resultado));
  
}
*/

function App() {
//State de frases
const [frase, guardarFrase] = useState({});


/**Con await */
const consultarAPI= async()=>{
  const api =await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
  const frase = await api.json()
  guardarFrase(frase[0]);
  
}

  return (
    <Contenedor>
      <Frase/>
      <Boton
        onClick={consultarAPI}
      >
        Obtener Frase
      </Boton>
    </Contenedor>
  );
}

export default App;
//instalar emotion: npm i @emotion/core @emotion/styled