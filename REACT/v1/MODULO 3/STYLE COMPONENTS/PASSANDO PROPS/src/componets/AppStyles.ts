import styled from 'styled-components';


type ContainerType = {
    cbg:string;
}

export const Container = styled.div <ContainerType> `
    margin:auto;
    background-color:${props=> props.cbg};
    color:#fff;
    max-width:1070px;
    padding:20px;

`

type BotaoType = {
    small?:boolean;
    bg:string;
    uppercase?:string;
}

export const Botao = styled.button <BotaoType> `
    background-color:${props=> props.bg};
    padding:10px;
    color:#fff;
    font-size:${props => props.small? '15px': '30px'};
    text-transform: ${props=>props.uppercase};

`