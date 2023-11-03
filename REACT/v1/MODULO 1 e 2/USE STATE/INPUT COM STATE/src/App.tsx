import React, {useState } from 'react';

const App = ()=>{

  const [name, setName] = useState('');

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
      setName(e.target.value);
  }

  
  return(
    <>
       <input value={name} type="text" onChange={handleChange} />
       <div>{name}</div>
    </>
   
  )

}

export default App;

//Quando roda qualque evento, você pode pegar o evento


