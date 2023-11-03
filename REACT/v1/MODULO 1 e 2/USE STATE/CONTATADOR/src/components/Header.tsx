
//ESPECÍFICANDO A PROP: NO TYPESCRIPT VOCÊ PRECISA ESPECÍFICAR A PROP


import { Photo } from "./Photo";

type Props = {
  title?:string;
}



export const teste = (txt:string) =>{
    return (
        <h4>{txt.toUpperCase()}</h4>
    );
}


export const  Header = ({title}:Props) =>{
    return(
      <>
        <h1>{title}</h1>
        Olá, mundo!

        <Photo lengend ="Legenda da imagem">
          <img src="https://www.google.com.br/google.jpg" alt="" />
        </Photo>
        <h3>{teste("Mandando dados, testando...")}</h3>
        <hr />
      </>
    )
}




/*

title?:string ? Significa quando queremos deixar algum como opcional

<></>FRAGMENT

*/