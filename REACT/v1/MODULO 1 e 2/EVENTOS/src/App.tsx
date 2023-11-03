

const App = ()=>{

   let name:string = 'hugo';

    const clicou = ()=>{
      alert(name);
    }
    return (
      <button onClick={clicou}>Clique aqui!</button>
    )
}

export default App;


