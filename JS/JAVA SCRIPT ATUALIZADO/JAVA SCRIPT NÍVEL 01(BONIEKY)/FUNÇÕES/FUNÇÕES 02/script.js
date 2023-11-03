function alterar(titulo){
    document.getElementById('titulo').innerHTML = titulo;
    alterar('Parametro');
}


function somar(x,y){
    let total = x+y;

    return total;
    //Essa função tem a capacidade de retornar alguma coisa quando é chamado
}


var resultado = somar(10,2);
console.log(resultado);




//Funções são blocos de códigos que podem ser utilizados a qualquer momento
//Funções podem receber parâmetros na qual você pode mandar valor, seja variável objeto qualuer coisa