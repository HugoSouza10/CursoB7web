import { useReducer } from "react"


    const initialState = {count:0}; //Valor padrão e inicial do reducer
    //Criação do reducer


    //Tipagem do reducer
    type reducerState = {
        count:number;
    }

    type reducerAction = {
        type: string;

    }

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
    

export const useContagem = () =>{
    return useReducer(reducer,initialState);
}