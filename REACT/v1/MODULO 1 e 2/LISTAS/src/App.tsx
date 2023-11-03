
import { Pessoa } from './componets/Pessoa';
const App = ()=>{

  let list = [
    {name:'Hugo', age:24},
    {name:'Bonieky', age:90},
    {name:'Pedro', age:20},
    {name:'Carlos', age:18},
  ];

 return(
   <div>
     <h2>Lista de presença:</h2>
     <ul>
     {list.map((item,index)=>
        <Pessoa key={index} data={item}/>
     )}
     </ul>
   </div>
 )
  
}


export default App;

/*

<div>
     <h2>Lista de presença:</h2>
     <ul>
     {list.map((item,index)=>
        <li key={index}>{item.name} Idade: {item.age}</li>
     )}
     </ul>
</div>


*/