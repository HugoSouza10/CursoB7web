import { useReducer } from 'react';


//Tipagem do reducer
type reducerState = {
    count:number;
}

type reducerAction = {
    type: string;

}

const initialState = {count:0}; //Valor padrão e inicial do reducer
//Criação do reducer



const reducer = (state:reducerState, action:reducerAction) =>{ //state é o valor atualizado do reducer e action é a ação
    //Aqui fica as ações de monificações
    switch(action.type){
        case 'ADD':
           return {...state, count:state.count+1};
        break;

        case 'DEL':
            return {...state, count:state.count-1};
        break;

        case 'RESET':
            return initialState;
        break;
    }
    return state;
}



const App = () =>{
    //Criando o reducer
    const [state, dispatch] = useReducer(reducer, initialState);


    return (
        <div className="p-5">
            Contagem:{state.count}
            <hr/>
            <button onClick={()=>dispatch({type:'ADD'})}>Adicionar</button>
            <button onClick={()=>dispatch({type:'DEL'})}>Deletar</button>
            <button onClick={()=>dispatch({type:'RESET'})}>Resetar</button>
        </div>
    )
}


export default App;