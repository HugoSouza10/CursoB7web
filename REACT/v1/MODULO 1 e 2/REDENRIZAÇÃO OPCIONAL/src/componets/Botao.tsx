
type Props ={
    text:string;
    logOutFn: (textLogOut:string)=>void;
}

export const Botao = ({text, logOutFn}:Props)=>{

    const handleClick = ()=>{
        logOutFn('LogOut');
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