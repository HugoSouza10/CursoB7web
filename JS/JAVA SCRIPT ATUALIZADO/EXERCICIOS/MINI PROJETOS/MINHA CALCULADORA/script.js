const numeros = document.querySelectorAll('[id*=tecla]');
const operadores = document.querySelectorAll('[id*=operador');
const display = document.getElementById('display');
const limparDisplay = document.getElementById('limparDisplay');
const ingual = document.getElementById('ingual');
const limpaDisplay = document.getElementById('limparDisplay');
const decimal = document.getElementById('decimal');


let numeroAtual;
let numeroAnterior;
let numeroNovo = true;
let operador;

//Todos esses botões são nodeList

//Operador pendente
const operadorPendente = () => operador =! undefined;

const calcular = () =>{
    if(operadorPendente){
      numeroAtual = parseFloat(display.textContent);
      numeroNovo = true;
      
      if(operador == '+'){
         atualizarDisplay(numeroAtual+numeroAnterior);
      }

      if(operador == '-'){
        atualizarDisplay(numeroAtual-numeroAnterior);
     }

     if(operador == '*'){
        atualizarDisplay(numeroAtual*numeroAnterior);
      }

      if(operador == '/'){
        atualizarDisplay(numeroAtual/numeroAnterior);
      }
    }
}

const selecionarOperador = (op) =>{
    if(!numeroNovo){
      calcular();
      operador = op.target.textContent;
      numeroAnterior = display.textContent;
      formatNumero(numeroAnterior);

      numeroAnterior = parseFloat(display.textContent+=operador);
      inserirDecimal(numeroAnterior.textContent);
      numeroNovo = true;
      console.log(operador);

    }

   
}


const atualizarDisplay = (evento) =>{
  if(numeroNovo){
    display.textContent = evento;
    numeroNovo = false;
  }else{
    display.textContent += evento;
    
  }
    

}

const inserirNumero = (n) => atualizarDisplay(n.target.textContent);

//Função acionar igual
const acionarIgual = () =>{
    calcular();
}

//Função formar numero
const formatNumero = (evento) =>{
    if(evento.length == 4){
      let numberFormat = evento.substring(0,2);
      numberFormat+='.';
      let numberMasc = numberFormat+=evento;
      atualizarDisplay(numberMasc);
     
      
       
    }
}

/*Função limpar tela */
const acionarLimparDisplay = () =>{
      display.textContent = '';
}

//Função inserir decimal
const inserirDecimal = () => {
    if(!numeroNovo){
      console.log(parseFloat(display.textContent+='.'));
        //Você precisa converter para parseFloat para concatenar

    }
   // console.log(evento.target.textContent);
}


//Adicionando cliques
numeros.forEach(numero =>numero.addEventListener('click',inserirNumero));
operadores.forEach(op =>op.addEventListener('click',selecionarOperador));
ingual.addEventListener('click', acionarIgual);
limpaDisplay.addEventListener('click',acionarLimparDisplay);

decimal.addEventListener('click', inserirDecimal);





//  display.textContent = evento;


/*

Informações importantes:
quando você adiciona um add.EventListener: Você pode enviar parâmetro daquele objeto que 
você quer




*/