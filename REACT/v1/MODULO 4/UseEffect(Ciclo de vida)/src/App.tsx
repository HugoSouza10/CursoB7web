import { useEffect, useState } from 'react';

const App = () =>{

  const [name, setName] = useState('Hugo');

  useEffect(()=>{
    alert('Rodou!');
  },[name]);

  const handdleClick = () =>{
     setName('Bonieky');
  }

   return (
    <div>
      Nome: {name}
      <button onClick={handdleClick}>Mudar</button>
    </div>
   );
}


export default App;