import { ChangeEvent, useEffect, useState } from "react";

const App = () =>{
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');

  useEffect(()=>{
      setFullName(`${name} ${lastName}`);
  },[name, lastName]);

  const handdleName = (e:ChangeEvent<HTMLInputElement>)=>{
        setName(e.target.value);
  }

  const handdleLastName = (e:ChangeEvent<HTMLInputElement>)=>{
      setLastName(e.target.value);
  }

  return (
    <div>
      <input value={name} onChange={handdleName} type="text" placeholder="Digite seu Nome" />
      <input value={lastName} onChange={handdleLastName} type="text" placeholder="Digite seu Sobrenome"/>
      <p>Seu nome é:{fullName}</p>
    </div>
  )
}


export default App;