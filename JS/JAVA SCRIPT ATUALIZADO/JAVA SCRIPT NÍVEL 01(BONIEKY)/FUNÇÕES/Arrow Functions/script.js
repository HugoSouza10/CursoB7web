//Tipo tradicional de função

/*
function somar(x,y){
    return x+y;
}

*/
/*Função anônima dentro de variáveis

let somar = function(x,y){
    return x+y;
}

*/

//Função arrow function

/*
let somar = (x,y) =>{
    return x+y;
}
*/

let somar = (x,y) => x+y;


console.log(somar(10, 5));


/*let letrasNoNomes = (nome) =>{
   return nome.length;
}

*/

let letrasNoNomes  = nome => nome.length;

console.log(letrasNoNomes('hugo'));





/*
Obs: Arrow function não possui o atributo this, ou seja, aquele atributo que
serve para pegar o próprio objeto quando se trabalha com objetos, então
muito cuidado ao usar esse tipo de função.

obs: Abrir chaves é opcional nas arrow function, quando faz sem chaves
então não precisa do return, poi so código que você colocar ele 
automaticamente funcionará como return




let letrasNoNomes  = nome => nome.length; Se tiver apenas um parãmetro, então você pode 
usar sem os parêmtros da função
*/