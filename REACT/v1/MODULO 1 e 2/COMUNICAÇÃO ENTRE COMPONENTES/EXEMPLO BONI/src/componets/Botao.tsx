
type Props ={
    text:string;
    ClickFn: (text:string)=>void;
    
}

export const Botao = ({text, ClickFn}:Props)=>{

   const handleClick = ()=>{
        ClickFn('Opa, testando!');
   }
    return(
        <button onClick={handleClick}>{text}</button>
    )
} 


/*
A comunicação do filho pro pai sempre acontece assim!

O pai manda uma prop que contém a ação que o filho deseja executar
depois o filho só executa

*/