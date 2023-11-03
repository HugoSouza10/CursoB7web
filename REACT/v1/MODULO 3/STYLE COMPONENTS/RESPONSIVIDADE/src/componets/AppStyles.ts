import styled from 'styled-components';


type ContainerType = {
    cbg:string;
}

export const Container = styled.div <ContainerType> `
    display:flex;
    max-width:600px;
    margin:auto;
    background-color:${props=> props.cbg};
    color:#fff;
    max-width:1070px;
    padding:20px;

    span{
        background-color:orange;
        color:#fff;
        padding:10px;

    }

    @media (max-width:500px){
        background-color: green;
        flex-direction:column;

        span{
            background-color:blue;
        }

    }

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