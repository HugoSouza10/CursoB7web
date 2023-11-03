import { useParams, useNavigate } from 'react-router-dom';
export const AboutItem = ()=>{
    //A gente instância ai podemos ter acesso ao conteúdo do parâmetro
    const params = useParams();
    const navigate = useNavigate(); //Navigate serve para ir pra qualquer página

    const handdleBackButton = ()=>{
        navigate(-1);
    }

    const handdleHome = () =>{
        let nome = 'Bonieky';
        navigate(`/sobre/${nome}`);
    }

    return (
        <div>
            Página ITEM {params.slug}
            <hr/>
            <button onClick={handdleBackButton}>Voltar</button>
            <button onClick={handdleHome}>Home</button>
        </div>
    )
}