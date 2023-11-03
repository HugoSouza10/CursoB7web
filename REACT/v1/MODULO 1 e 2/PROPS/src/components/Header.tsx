
//ESPECÍFICANDO A PROP: NO TYPESCRIPT VOCÊ PRECISA ESPECÍFICAR A PROP

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
      <div>
        <h1>{teste('Aprendendo React')}</h1>
        <h3>{title}</h3>
        <hr />
      </div>
    )
}




/*

title?:string ? Significa quando queremos deixar algum como opcional

*/