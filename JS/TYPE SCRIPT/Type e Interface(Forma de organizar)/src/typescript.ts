
type User = {
    name:string,
    idade:number
}

function resumo(usuario:User){
    return console.log(`Olá,${usuario.name} e você tem, ${usuario.idade}`);
}

resumo({
    name:'Hugo',
    idade:23
})

/*

A gente cria types quando a gente tem uma quantidade muito grande de types
então a gente pode criar types e colocar todos os types que precisas

obs: O nome de cada letra começa com maíscula


primeira forma de criar

type Idade = string | number;

let idade:Idade = 20;

*/
