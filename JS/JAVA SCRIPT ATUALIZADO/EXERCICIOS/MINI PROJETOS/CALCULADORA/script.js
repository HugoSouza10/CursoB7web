

const display = document.getElementById('display');

/*LISTA DE TODOS OS NÚMEROS */
const numeros = document.querySelectorAll('[id*=tecla]');
//PEGANDO OS OPERADORES
const operadores = document.querySelectorAll('[id*=op]');

let novoNumero = true;
let operador;
let numeroAnterior;

//FUNÇÃO VERIFICAR OPERAÇÃO PENDENTE

const operacaoPendente = () => operador != undefined;

/*FUNÇÃO QUE ATUALIZA A TELA QUANDO CLICAR EM UM NÚMERO */

const calcular = () =>{
    if(operacaoPendente()){
        const numeroAtual =  parseFloat(display.textContent);
        novoNumero = true;

        //Forma otimizada para realizar operação

        let resultado = eval (`${numeroAnterior}${operador}${numeroAtual}`);
        atualizarDisplay(resultado);

        /*
        if(operador == '+'){
            atualizarDisplay(numeroAnterior + numeroAtual);
        }else{
            if(operador == '-'){
                atualizarDisplay(numeroAnterior - numeroAtual);
            }else{
                if(operador == '*'){
                    atualizarDisplay(numeroAnterior * numeroAtual);
                }else{
                    if(operador == '/'){
                        atualizarDisplay(numeroAnterior / numeroAtual);
                    }
                }
            }
        }
        */
    }
}



let atualizarDisplay = (txt) =>{
    if(novoNumero){
        display.textContent = txt;
        novoNumero = false;
    }else{
         display.textContent += txt;
         //Concatenando 
    }
  
}

//NA FUNÇÃO INSERIR NÚMERO ELE ESTÁ RECEBENDO O EVENTO DO FOREACH
let inserirNumero = (evento) => atualizarDisplay(evento.target.textContent) ;


//ESSE FOREACH FAZ O PAPEL DE ADICIONAR O CLIQUE EM TODOS OS BOTÕES
numeros.forEach (numero => numero.addEventListener('click', inserirNumero));

//FUNÇÃO DE SELEÇÃO DE OPERADOR

const selecionarOperador = (evento) =>{
    //Aqui precisamos verificar se não é número novo para armazenar o operador e o número
    if(!novoNumero){
        calcular();
        operador = evento.target.textContent;
        novoNumero = true;
        numeroAnterior = parseFloat(display.textContent); //Transforme em número
        console.log(operador);
    }
   
}

//ADICIONANDO EVENTO DE CLIQUE EM TODOS OS OPERADORES
operadores.forEach(op => op.addEventListener('click', selecionarOperador));



//FUNÇÃO IGUAL

const ativarIngual = () =>{
    calcular();
    operador = undefined;
}


document.getElementById('ingual').addEventListener('click', ativarIngual);


//FUNÇÃO LIMPAR DISPLAY:


const limparDisplay = () => display.textContent = '';


document.getElementById('limparDisplay').addEventListener('click', limparDisplay);



//FUNÇÃO INSERIR DECIMAL

const existeDecimal = () => display.textContent.indexOf(' , ') != -1;
const existeValor = () => display.textContent.length > 0;

const inserirDecimal = () =>{
     if(!existeDecimal()){
         if(existeValor()){
             atualizarDisplay(',');
         }else{
             atualizarDisplay('0,');
         }
     }
}

document.getElementById('decimal').addEventListener('click', inserirDecimal);

















/*

textContent: Serve para pegar texto de uma node list
let element1 = numeros.item(0);

console.log(element1.textContent);

target> É o elemento alvo que foi clicado


 let resultado = eval (`${numeroAnterior}${operador}${numeroAtual}`);

 esta funcionalidade pode substituir uma caseta de if

 essa fução pega um parâmetro soma com o operador + numeroAtual
*/


















