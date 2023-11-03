
import { useState } from 'react';
import { Pessoa } from './componets/Pessoa';
const App = ()=>{

  const [show, setShow] = useState(false);

  const handleClick = () =>{
    setShow(!show);
  }

  return (
    <>
      <button style={{backgroundColor:'red', color:'white'}} onClick={handleClick}>{show?'Ocultar':'Mostrar'}</button>

      {show &&
        <div>Conteúdo!</div>
      }
      
    </>
  )
  
}


export default App;

/*

Renderização condicional, consiste em renderizar uma coisa baseada em condições

*/