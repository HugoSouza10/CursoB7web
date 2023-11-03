import { UseContagem } from '../src/reducers/contagem';

const App = () =>{
    const [contagem, dispatchContagem] = UseContagem();

    return (
        <div className="p-5">
            contagem:{contagem.count}
            <hr/>
            <button onClick={e=>dispatchContagem({type: 'ADD'})}>Adicionar</button>
            <button onClick={e=>dispatchContagem({type:'DEL'})}>Deletar</button>
            <button onClick={e=>dispatchContagem({type:'RESET'})}>Resetar</button>
        </div>
    )
}

export default App;


//dispatchContagem: Serve para acionar as ações