import { useState, useEffect, ChangeEvent } from 'react';
import { Post } from './types/Posts';
import { PostForm } from './components/PostForm';
import { PostItem }  from './components/PostItem';



const App = ()=>{
  const [post, setPost] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
 

  useEffect(()=>{
    loadPost();
  })

  const loadPost = async () =>{
      let response = await fetch('https://jsonplaceholder.typicode.com/posts');
      let json = await response.json();
      setPost(json);
  }



  const handdleAddPost = async (title:string, body:string)=>{
        let response = await fetch('https://jsonplaceholder.typicode.com/posts',{
            method:'POST',
            body: JSON.stringify({title,body,userId:1}),

            headers: {
                'Content-type': 'aplication/json'
            }
          });

          let json = await response.json();
          console.log(json);


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
                  <PostItem data={item}/>
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