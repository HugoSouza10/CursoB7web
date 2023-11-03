
import { useState } from 'react';

const App = ()=>{

  const [color, setColor] = useState('green');

  const handleClick = ()=>{
    color === 'green'? setColor('black') : setColor('green');
  }

  return(
    <button onClick={handleClick} style={{backgroundColor:color, color:'white',}}>Opa, clique aqui</button>
  )

}


export default App;
