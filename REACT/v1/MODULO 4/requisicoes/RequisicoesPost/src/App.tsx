import { useState, useEffect, ChangeEvent } from 'react';
import { Post } from './types/Posts';


const App = ()=>{
  const [post, setPost] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [addTitleText, setAddTitleText] = useState('');
  const [addBodyText, setAddBodyText] = useState('');
 

  useEffect(()=>{
    loadPost();
  })

  const loadPost = async () =>{
      let response = await fetch('https://jsonplaceholder.typicode.com/posts');
      let json = await response.json();
      setPost(json);
  }


  const handdleAddTitleChange = (e:ChangeEvent<HTMLInputElement>)=>{
      setAddTitleText(e.target.value);
  }

  const handdleAddBodyChange = (e:ChangeEvent<HTMLTextAreaElement>) =>{
      setAddBodyText(e.target.value);
  }



  const handdleAddClick = async ()=>{
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

      <fieldset className='border-2 mb-3 p-3'>
        <legend>Adicionar novo post</legend>
          <input
            onChange={handdleAddTitleChange}
            value={addTitleText} 
            className='block border' 
            type="text" 
            placeholder='Digite um titulo'
  
          />
          
          <textarea
            onChange={handdleAddBodyChange}
            value={addBodyText}
            className='block border'>  
          </textarea>
          <button onClick={handdleAddClick} className='block border'>Adicionar</button>
        </fieldset>

      {!loading && post.length > 0 &&
          <>
            Total de posts: {post.length}
            <div>
                {post.map((item, index)=>
                  <div className='py-4' key={index}>
                    <h4 className='font-bold'>{item.title}</h4>
                    <small>#{item.id} Usuario: {item.userId}</small>
                    <p>{item.body}</p>
                  </div>
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