import {useContagem} from '../src/reducers/contagem';
const App = () =>{
    //Chamando o reducer
    const [contagem, dispathContagem] = useContagem();

    return (
        <div className="p-5">
            Contagem:{contagem.count}
            <hr/>
            <button onClick={()=>dispathContagem({type:'ADD'})}>Adicionar</button>
            <button onClick={()=>dispathContagem({type:'DEL'})}>Deletar</button>
            <button onClick={()=>dispathContagem({type:'RESET'})}>Resetar</button>
        </div>
    )
}


export default App;