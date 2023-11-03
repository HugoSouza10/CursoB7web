
//Aqui é um objeto carro
let carro = {
   nome:'Palio',
   modelo:'Uno',
   peso:'800kg',
   ligado: '',
   // Propriedade: Aqui são as caracteristicas do objeto

   ligar:function(){
      console.log(this.modelo);
      this.ligado = false;
      console.log('Vrum, Vrum')
   },

   acelerar:function(){
      if(this.ligado == true){
         console.log('Lá vou eu');
      }else{
         console.log(this.nome+' '+this.modelo+' '+'Não está ligado');
      }
     
   }
   //Isso aqui é método, ou seja funções específicas que podem ser executadas

};

carro.ligar();
carro.acelerar();


let listaCarros = [
   {nome:'Fiat', modelo:'Palio'},
   {nome:'Toyota', modelo: 'UNo'}

];

console.log(listaCarros[1]);
//Obs: Se você quer acessar o próprio objeto, você acessa com o this
//Obs: No java script ele cria o objeto direto diferente de php que só cria uma ideia do objeto para depois ser instânciado 

//Obs: É possível colocar objetos dentro de array


/*Diferneça entre array e objetos
array é uma listagem numerada
objeto é uma listagem nomeada

*/