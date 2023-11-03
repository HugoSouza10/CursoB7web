
//Tudo no react é componente

//Importação do código aqui!


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
       <Header title = 'Aprendendo React com ts'/>
       <div>Sua conta é: {somar(5,2)}</div>
    </div>
  )
}

export default App;


//Exportanto o componentes para que possa ser usado em outras partes do sistema



/*

//Expressões a gente pode chamar código java script

//parêmtros de uma tag chamamos de props

//Quando se tem mais de um componente nós podemos chamar assim: <Header>

*/
