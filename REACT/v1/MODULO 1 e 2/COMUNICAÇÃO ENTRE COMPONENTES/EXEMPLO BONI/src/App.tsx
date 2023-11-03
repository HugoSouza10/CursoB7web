
import {Botao} from './componets/Botao';
const App = ()=>{
  let textBotao = 'Clique no botão';
  const botaoEventAction = (frase:string) =>{
      alert(frase);
  }

  return (
    <div>
      <Botao text = {textBotao} ClickFn={botaoEventAction}/>
    </div>
  )
  
}


export default App;