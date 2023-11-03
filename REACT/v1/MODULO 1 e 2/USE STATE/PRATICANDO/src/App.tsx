import { ChangeEvent, useState } from "react"

const App = () =>{

    const [priceSoap, setPriceSoap] = useState(2.00);
    const [priceNoodle, setPriceNoodle] = useState(3.90);
    const [priceBean, setBean] = useState(11.90);


    type infoType = {
      title:string;
      price:number;
    }
    const infoCart:infoType[] = [
        {title: 'Sabão',price:priceSoap},
        {title: 'Macarrão', price:priceNoodle},
        {title: 'Feijão', price:priceBean},
    ]

    const handleInputValue = ()=>{
        setPriceSoap(priceSoap+priceSoap)
    }


    return (
      <div><br/>
        <div>{infoCart[0].title} <strong>{infoCart[0].price.toFixed(2)}</strong></div><br/>
        <div>
          <div>
            Qt:
            <input onChange={handleInputValue} type="number" placeholder="Informe a quantidade"/>
            <button>Comprar</button>
          </div>

          <div><br/>
            <div>{infoCart[1].title} <strong>{infoCart[1].price.toFixed(2)}</strong></div><br/>
            Qt:
            <input type="number" placeholder="Informe a quantidade"/>
            <button>Comprar</button>
          </div>

          <div><br/>
            <div>{infoCart[2].title} <strong>{infoCart[2].price}</strong></div><br/>
            Qt:
            <input type="number" placeholder="Informe a quantidade"/>
            <button>Comprar</button>
          </div>
        </div>
      </div>
    )
}

export default App;