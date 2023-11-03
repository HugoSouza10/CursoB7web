//Res com Spreed

function adicionar(nomes, ...novoNomes){
    let conjunto = [...nomes, ...novoNomes];
    return conjunto;
}

let nomes = ['Hugo', 'Bonieky'];

console.log(adicionar(nomes, 'Fulano', 'Cicrano', 'Beltrano'));



// Spreed

let  adicionar2 = (item) =>{
       let novos = [...item, 4,5,6];
       return novos;
}

let array = [1,2,3];

console.log(adicionar2(array));

/*

O operador res funciona semelhante ao spreed, porém 
o res serve para quando você não sabe a quantidade de valores
que você irá definir.

obs: o res cria um novo array de itens

*/