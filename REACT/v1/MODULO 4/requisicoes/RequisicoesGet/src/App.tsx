import { useState, useEffect } from 'react';
import { Movies } from './types/Movies';

const App = ()=>{
  const [movies, setMovies] = useState<Movies[]>([]);
  const [loading, setLoading] = useState(true);
  const [addTitile, setAddTitle] = useState('');
  const [addBodyText, setAddBodyText] = useState('');

  useEffect(()=>{
    loadMovies();
  })


  const loadMovies = async ()=>{

      try {
        let response = await fetch('https://api.b7web.com.br/cinema/');
        let json = await response.json();
        setLoading(false);
        setMovies(json);
      }catch(e){
        
      }

  }


  //Post
  const handdleAddMovie = ()=>{
      if(addTitile && addBodyText){
       
      }else{
        alert('Preencha os dados!');
      }
  }


  return (
   <div>
     <button onClick={loadMovies} className='block bg-blue-400 p-2 rounded'>Carregar filmes</button>

      {loading &&
        <div>Carregando...</div>
      }

      <fieldset className='border-2 mb-3 p-3'>
        <legend>Adicionar novo</legend>
        <input value={addTitile} onChange={e=>setAddTitle(e.target.value)} className='block border' type="text"  placeholder='Digite um título'/>
        <textarea value={addBodyText} onChange={e=>setAddBodyText(e.target.value)} className='border block' placeholder='Informe uma descrição'></textarea>
        <button onClick={handdleAddMovie}>Adicionar</button>
      </fieldset>

      {!loading &&
          <>
            Total: {movies.length}
            <div className='grid grid-cols-6 gap-3'>
                {movies.map((item, index)=>
                  <div key={index}>
                    <img src={item.avatar} className="w-32" alt="" />
                    {item.titulo}
                  </div>
                )}
            </div>
          
          </>
      
      }

   
   </div>
  )
}

export default App;