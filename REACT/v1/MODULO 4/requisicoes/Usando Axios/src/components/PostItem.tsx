import {Post} from '../types/Posts';
type Props = {
    data: Post;
}

export const PostItem = ({data}:Props) =>{
    return (

        <div className="bg-white rounded-lg shadow-md overflow-hidden mt-6">
            <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{data.title}</h2>
                <small>#{data.id} Usuario: {data.userId}</small>
                <p className="text-gray-600">{data.body}</p>
            </div>
        </div>
    )
}