import { useState } from 'react';

const App = ()=>{

  const [numero, setN] = useState(0);

  const More = ()=>{
    numero>=10?setN(numero):setN(numero+1);
  }

  const Minus = () =>{
      numero<=0? setN(numero): setN(numero-1);
  }

  return(
    <>
      <button onClick={More}>+</button>
      <div>{numero}</div>
      <button onClick={Minus}>-</button>
    </>
  )

}

export default App;


