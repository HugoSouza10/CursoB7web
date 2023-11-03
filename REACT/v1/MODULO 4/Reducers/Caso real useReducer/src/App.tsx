import { ChangeEvent, useState } from 'react';
import { UsepeopleList } from './reducers/peopleList';
const App = () =>{
    //Criando uma state para salvar dos dados do reducer
    const [list, dispatch] = UsepeopleList();

    const [nameInput, setNameInput] = useState('');


    const handleAddButton = () => {
        if(nameInput){
            dispatch({
                type: 'ADD',

                //Dados que serão enviados
                payload: {
                    name: nameInput
                }
            })
        }
    }

    const handleInputChange = (e:ChangeEvent<HTMLInputElement>)=>{
        setNameInput(e.target.value);
    }

    const handleOrderButton = () =>{
        dispatch({
            type:'ORDER',
        })
    }

    const deletePersona = (id:string)=>{
        dispatch({
            type:'DEL',
            payload: {id:id}
        })
    }

    return (
        <div className="p-5">
            Lista de pessoas:
            <input border-2 type='text' value={nameInput} onChange={handleInputChange}/>
            <button onClick={handleAddButton}>Adicionar</button>

            <hr />
            <ul>
                <button onClick={handleOrderButton}>Ordenar</button> 
                {list.map((item, index)=>(
                    <li key={index}>
                        {item.name}
                        <button onClick={()=>deletePersona(item.id)}>[ Deletar ]</button>  
                    </li>
                 ))}
           </ul>
        </div>
    )
}


export default App;