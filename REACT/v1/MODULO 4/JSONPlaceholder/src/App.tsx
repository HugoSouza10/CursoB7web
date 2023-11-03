import { useState, useEffect, ChangeEvent } from 'react';
import { typePost } from './types/Posts';

const App = ()=>{
  const [post, setPost] = useState<typePost[]>([]);
  const [loading, setLoading] = useState(true);

  const [addTitleText, setAddTitleText] = useState('');
  const [addBodyText, setAddBodyText] = useState('');

  useEffect(()=>{
    loadPosts();
  })


  const loadPosts = async ()=>{
      try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let json = await response.json();
        setLoading(false);
        setPost(json);
      }catch(e){
        setLoading(false);
      }

  }

  const handdleAddTitleChange = (e:ChangeEvent<HTMLInputElement>)=>{
        setAddTitleText(e.target.value);
  }

  const hanndleAddBodyText = (e:ChangeEvent<HTMLTextAreaElement>)=>{
      setAddBodyText(e.target.value);
  }


  return (
   <div className='p-4'>

      {loading &&
        <div>Carregando...</div>
      }

      <fieldset className='border-2 mb-3'>
        <legend>Adicionar novo post</legend>
          <input 
            value={addTitleText} 
            className='block border' 
            type="text" 
            placeholder='Digite um titulo'
            onChange={handdleAddTitleChange}
          />
          <textarea 
            value={addBodyText}
            onChange={hanndleAddBodyText}
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
                    <p>{item.body}</p>
                  </div>
                )}
            </div>
          
          </>
      
      }

      {!loading && post.length == 0 &&
        <div>Tente mais novamente!</div>
      
      }

   
   </div>
  )
}

export default App;