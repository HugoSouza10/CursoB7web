import { useReducer } from 'react';
//Para gerar id aleatório
import { v4 as uuid4 } from 'uuid';

//Typagem para uma pessoa
type persona = {
    id:string,
    name:string,
}

//Typagem para o reducer
type reducerState = persona;

type actionType = {
    type:string;

    //Aqui serve para específicar as ações
    payload?: {
        name?: string,
        id?: string
    }
}


const initalState:persona[] = [];


const reducer = (state:persona[], action:actionType) =>{
    switch(action.type){
        case 'ADD':

            if(action.payload?.name){
                const newState = [...state];
                newState.push({
                    id:uuid4(),
                    name: action.payload?.name,
                });

                return newState;
            }
           
        break;

        case 'DEL':
            if(action.payload?.id){
                let newState = [...state];
                //Filtra tudo que for diferente do id mandado e retornando para a state
                newState = newState.filter(item=> item.id != action.payload?.id);

                return newState;
            }
        break;
            
        case 'ORDER':
            let newState = [...state];
            newState.sort((a,b)=>(a.name > b.name) ? 1: -1);
            return newState;
        break;    
    }
    return state;
}

//Responsável por montar o reducer
export const UsepeopleList = () =>{
    return useReducer(reducer, initalState);
}

/* state.sort((a,b)=>(a.name > b.name) ? 1: -1)
A: Primeiro item
B: Ultimo item

1: Ordem crescente
2: Decrescente

*/
