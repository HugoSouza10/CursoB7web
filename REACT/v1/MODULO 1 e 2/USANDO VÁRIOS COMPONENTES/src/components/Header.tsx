import {Modal} from './modal';

export const teste = (txt:string) =>{
    return (
        <h4>{txt.toUpperCase()}</h4>
    );
}

export const  Header = () =>{
    return(
      <div>
        <h1>{teste('Aprendendo React')}</h1>
        <Modal/>
        <hr />
      </div>
    )
}


