
let pessoa = {
    nome:"Hugo",
    sobreNome:"Souza",
    idade: 24,
    social:{
        facebook:"HugoSouza",
        instagram:{
            url:"@Hugo",
            seguidores: 1000
        }
    },

    /*Método nomeCompleto */
    nomeCompleto: function(){
        return `${this.nome} ${this.sobreNome}`;
    }

};



function pegarNomeCompleto(obj){
        return `${obj.nome} ${obj.sobreNome}`;
}


pegarNomeCompleto(pessoa);

console.log(pessoa.nome);


// Segunda forma de fazer de uma maneira mais rápido

function pegarNome({nome, idade}){
    return `${nome = "Fulano"} ${idade}`;
}

console.log(pegarNome(pessoa));



//Formas de pegar dados de um objeto

//Pegando facebook e instagram

/* let {facebook, instagran} = pessoa.social;

console.log(facebook, instagran); 


let {nome, idade, social:{instagran}} = pessoa;


console.log(instagran);

*/

/*Pegando instagram e renomendo ele
let {nome, idade, social:{instagram:{url:instagram}}} = pessoa;

console.log(instagram); */





/*



*/