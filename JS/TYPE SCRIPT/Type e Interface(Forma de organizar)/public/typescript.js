function resumo(usuario) {
    return console.log("Ol\u00E1,".concat(usuario.name, " e voc\u00EA tem, ").concat(usuario.idade));
}
resumo({
    name: 'Hugo',
    idade: 23
});
/*

A gente cria types quando a gente tem uma quantidade muito grande de types
então a gente pode criar types e colocar todos os types que precisas

obs: O nome de cada letra começa com maíscula


primeira forma de criar

type Idade = string | number;

let idade:Idade = 20;

*/
