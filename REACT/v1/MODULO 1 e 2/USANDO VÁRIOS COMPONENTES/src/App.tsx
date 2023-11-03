//Tudo no react é componente

//Importação do código aqui!

import { Footer } from './components/footer';
import { Header } from './components/Header';



//Rederização visual do código aqui!
const App = ()=>{
  let name:string = "Hugo";
  let n1: number = 10;
  let n2: number = 2;

  function somar(n1:number,n2:number){
    return n1*n2;
  }

  return (
    <div>
       <Header/>
       <div>Sua conta é: {somar(n1,n2)}</div>
       <Footer/>
    </div>
  )
}




//Exportanto o componentes para que possa ser usado em outras partes do sistema
export default App;



//Expressões a gente pode chamar código java script

//parêmtros de uma tag chamamos de props

//Quando se tem mais de um componente nós podemos chamar assim: <Header>