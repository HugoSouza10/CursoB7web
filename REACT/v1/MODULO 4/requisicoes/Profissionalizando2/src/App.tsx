import { useState, useEffect, ChangeEvent } from 'react';
import { Post } from './types/Posts';
import { PostForm } from './components/PostForm';
import { PostItem }  from './components/PostItem';
import { api } from './api';



const App = ()=>{
  const [post, setPost] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
 

  useEffect(()=>{
    loadPost();
  })

  const loadPost = async () =>{
      let json = await api.getAllPost();
      setPost(json);
      setLoading(false)
  }


  const handdleAddPost = async (title:string, body:string)=>{
        let json = await api.getAddNewPost(title,body, 1);
        if(json.id){
          alert('Adicionado com sucesso!');
        }else{
          alert('Opa, deu problema!');
        }   

  }


  return (
   <div className='p-5'>

      {loading &&
        <div>Carregando...</div>
      }

      <PostForm onAdd = {handdleAddPost}/>


      {!loading && post.length > 0 &&
          <>
            Total de posts: {post.length}
            <div>
                {post.map((item, index)=>
                  <PostItem key={index} data={item}/>
                )}
            </div>
          
          </>
      
      }

      {!loading && post.length === 0 &&
        <div>Não há post para exibir</div>
      
      }

   
   </div>
  )
}

export default App;