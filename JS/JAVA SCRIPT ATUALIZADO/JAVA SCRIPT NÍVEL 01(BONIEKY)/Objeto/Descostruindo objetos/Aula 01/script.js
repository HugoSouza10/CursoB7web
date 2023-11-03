
let pessoa = {
    nome:"Hugo",
    sobreNome:"Souza",
    idade: 24,
    social:{
        facebook:"HugoSouza",
        instagran:"HugoSouza10"
    },

    /*Método nomeCompleto */
    nomeCompleto: function(){
        return `${this.nome} ${this.sobreNome}`;
    }

};



let {nome:nome2, sobreNome, idade = 0} = pessoa;

// let nome = pessoa.idade; forma antiga

console.log(idade);


/*

Desconstruíndo objetos: É uma forma mais simples e rápida 
de pegar algum propriedade de algum objeto

this: Serve para pegar o próprio

pessoa.nome: E dessa forma que agente pega um atributo de um objeto


desconstruindo objetos:

let {} = pessoa; Primeiro defina quais atributos você deseja pegar, depois
específique o objeto específico na qual deseja pegar os atributos

nome:nome2: Aqui estou específicando que o atributo nome daquele objeto específico
vai ser salvo na variável nome2


 idade = 0: Aqui agente está dizendo se não tiver nenhuma idade definida, então
 coloque 0 no atríbuto idade, muito parecido com construct, ou seja, método construtor

*/