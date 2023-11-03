import { useState } from 'react';

const App = ()=>{

  let [numero, setNumero] = useState(0);
  let [name, setName] = useState('Hugo');


  const change = () =>{
     setNumero(numero+1);
  }

  const changeName = ()=>{
    setName('Bonieky');
  }

   return (
     <>
        <button onClick={change}>Contar</button>
        <button onClick={changeName}>Mudar nome</button>
        <div>{numero}</div>
        <div>Seu nome é:{name}</div>
     </>
   )
}

export default App;


