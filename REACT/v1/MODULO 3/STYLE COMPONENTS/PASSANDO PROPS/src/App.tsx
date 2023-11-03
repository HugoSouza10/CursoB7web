import { useState } from 'react';
import * as C from './componets/AppStyles';

const App = ()=>{

  return(
    <C.Container cbg='blue'>
      <C.Botao  bg='red'>Botao Grande</C.Botao>
      <C.Botao bg='green' uppercase = 'uppercase' small>Botao Pequeno</C.Botao>
    </C.Container>
  )
  
}


export default App;
