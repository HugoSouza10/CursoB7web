let lista = [1,5,10,20];
let lista2 = [];
let numero = 5;


calcular(numero, lista, lista2);

function calcular(numero){
    list2 = lista.map(function(item){
        if(item>=5){
           return console.log(item*numero);
        }
    });
}

   




















/* PRIMEIRA SOLUÇÃO COM FOREACH
calcular(lista, numero);

function calcular(lista, numero){
        lista.forEach(item => {
            if(item>=5){
                return console.log(item*numero);
            }else{
                return false;
            }
        });
}

*/