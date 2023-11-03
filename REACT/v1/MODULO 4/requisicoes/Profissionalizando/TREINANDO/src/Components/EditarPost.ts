import { Post } from '../types/Posts';
type Props = {
    id:number
}
export const EditarPost = ({id}:Props)=>{
    alert('Opa, vamos editar seu post!'+id);
}