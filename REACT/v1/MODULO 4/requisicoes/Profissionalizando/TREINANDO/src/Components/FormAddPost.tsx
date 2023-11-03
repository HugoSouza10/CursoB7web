import {useState, ChangeEvent} from 'react';

type Props = {
    PostAdd: (title:string, body:string) => void;
}

export const FormAddPost = ({PostAdd}:Props)=>{

    const [addTitleText, setAddTitleText] = useState('');
    const [addBodyText, setAddBodyText] = useState('');

    const handdleAddTitleChange = (e:ChangeEvent<HTMLInputElement>)=>{
        setAddTitleText(e.target.value);
    }
  
    const handdleAddBodyChange = (e:ChangeEvent<HTMLTextAreaElement>) =>{
        setAddBodyText(e.target.value);
    }

    const handdleAddClick = ()=>{
        PostAdd(addTitleText, addBodyText);
    }
  
    return (
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
    )
   
}