

function resumo(usuario:{name:string, idade:number}){

        if(usuario.idade === undefined){
                return `Olá,${usuario.name}`;
        }else{
                return `Olá ${usuario.name}, tudo bem? Você tem ${usuario.idade} anos`; 
        }
       
}


let usuario = {
        name:'Hugo',
        idade: 20
        
}

console.log(resumo(usuario));


/*

Nos types de objetos, a gente monta um objeto no parâmetro na
função e específica o tipo dele.

obs:Se você não enviar todos os atributos, então dará erro


obs2: ? Serve para dizer que type é opcional

*/