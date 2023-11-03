import { useState, useEffect, ChangeEvent } from 'react';
import { Post } from './types/Posts';
import { PostUnit } from './Components/PostUnit';
import { FormAddPost } from './Components/FormAddPost';



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


  
  const handdleAddClick = async (addTitleText:string,addBodyText:string)=>{
      if(addTitleText && addBodyText){
          let response = await fetch('https://jsonplaceholder.typicode.com/posts',{
            method:'POST',
            body: JSON.stringify({
                title:addTitleText,
                body:addBodyText,
                userId:1
              }
            ),

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
  }


  return (
   <div className='p-5'>

      {loading &&
        <div>Carregando...</div>
      }

      <FormAddPost PostAdd = {handdleAddClick}/>
      

      {!loading && post.length > 0 &&
          <>
            Total de posts: {post.length}
            <div>
                {post.map((item,key)=>
                  <PostUnit data={item}/>
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