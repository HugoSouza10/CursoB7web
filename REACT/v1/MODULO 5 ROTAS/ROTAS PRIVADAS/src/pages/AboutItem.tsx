import { useParams } from 'react-router-dom';
export const AboutItem = ()=>{
    //A gente instância ai podemos ter acesso ao conteúdo do parâmetro
    const params = useParams();
    return (
        <div>
            Página ITEM {params.slug}
        </div>
    )
}