import { Post } from '../types/Posts';
import { EditarPost } from './EditarPost';
type Props = {
    data:Post
}

export const PostUnit = ({data}:Props)=>{

    const handdleEdit = () =>{
        EditarPost(data);
    }
    return (
        <div className='py-4'>
            <h4 className='font-bold'>{data.title}</h4>
            <small>#{data.id} Usuario: {data.userId}</small>
            <p>{data.body}</p>
            <button onClick={handdleEdit}>Editar</button>
            <button>Excluir</button>
            <button>Alterar</button>
        </div>
    )
}