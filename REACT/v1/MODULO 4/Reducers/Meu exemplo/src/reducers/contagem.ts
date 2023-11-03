import {useReducer } from 'react';


const StateInitial = {count:0};


type state = {
    count:number;
}

type reducerAction = {
    type:string;
}


const reducer = (state:state, action:reducerAction) =>{

    switch(action.type){
        case 'ADD':
           return {...state, count:state.count+1};
        break;

        case 'DEL':
            return {...state, count:state.count-1};
        break;

        case 'RESET':
            return StateInitial;
        break;
    }


    //Depois que fez as ações temos que retornar uma state contendo um objeto
    return state;
}








//O nosso reducer é montado no App
export const UseContagem = () =>{
    return useReducer(reducer, StateInitial);
}