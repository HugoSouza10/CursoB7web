import { useState } from 'react';
import {Botao} from './componets/Botao';
const App = ()=>{

  const [NewTextBotao, setBotao] = useState('Login');

  const logOut = (textLogOut:string)=>{
      NewTextBotao === 'Login'? setBotao(textLogOut): setBotao('Login');
  }

  return(
    <Botao text={NewTextBotao} logOutFn={logOut}/>
  )
  
}


export default App;