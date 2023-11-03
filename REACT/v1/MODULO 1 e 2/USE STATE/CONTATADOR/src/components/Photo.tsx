import { ReactNode } from "react"
import { Modal } from "../components/Modal";


type Props = {
    lengend:string;
    children:ReactNode;
}



export const Photo = ({children,lengend}:Props) =>{ 
        return(
            <>
            <figure>
                {children}
                <p>{lengend}</p>
            </figure>
            <Modal>
                <h1>Olá, Hugo!</h1>
            </Modal>
           </>
        )

}



/*
import {ReactNode } from 'react';
//QUANDO CRIAR QUALQUER PROP NO TYPESCRIP, A GENTE CRIAR ESSA FUNÇÃO
type Props = {
    legend:string;
    children:ReactNode;
}



export const Photo = ({legend, children }:Props)=>{
    return(
        <div>
            {children}
            <p>{legend}</p>
        </div>
    )
}
*/