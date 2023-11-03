/*Operador spreed com array 
let numeros = [1,2,3,4];

let outros = [...numeros,5,6,7,8];

console.log(outros);

*/


/*Operador spreed com objetos 

let info = {
    nome: 'Hugo',
    sobreNome: 'Souza',
    idade: 90
}

let novaInfo = {
    ...info,
    pais:'Brasil',
    cidade:'Massapê',
    estado:'Ceará'
}

console.log(novaInfo);

*/


//Operador spreed com objetos


function adcionarInfor(info){
    let novasInfor = {
        ...info,
        endereco:'Major Juventus',
        bairro: 'Cetrema',
        faculdade: 'Ads'
    };
    return novasInfor;

   


}


console.log(adcionarInfor({nome:'Hugo', profissao:'Programador'}))

/*
este operador é muito útil, pois ele vai adicionar novos elementos
em array ou objetos sem precisa usar push

obs: aqui agente pode juntar um araay ou um objeto com outro

funcionamento do operador Spread com array :
let outros = [...numeros,5,6,7,8];

1- declare uma nova variável 
2- crie um novo array com ela
3- coloque ... é o array que você deseja e em seguida coloque os itens que você deseja adicionar

*/