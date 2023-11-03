let lista = [45, 4, 9, 16, 25];
let lista2 = [];


lista2 = lista.filter(function(item){
    if(item<20){
            return true;
        }else{
            return false;
        }
});

let res = lista2;

console.log(lista2);



/*

lista2 = lista.map(function(item){
    return item *2;
});  Mapeia e percorrer todo o meu array e executa uma função

em cada item do array. Nesse caso a multiplicação dos itens

funções anônimas simplesmente é executadas


lista2 = lista.filter(function(item){
    if(item<20){
            return true;
        }else{
            return false;
        }
});

O filter tem a capacidade de filtrar coisas específicas através de uma função
que você mandar. Basicamente ele vai executar a função em cada item também, mas
retornando sempre true ou false. Retirnando todos os valores que ela achar



lista2 = lista.every(function(item){
        if(item<20){
            return true;
        }else{
            return false;
        }
});

Funciona muito parecido com o filter, mas ele verifica todos os itens

some: está função é similar ao every, mas se algum corresponder a verificação
ela true ou false


 return (item<20)? true : false; Operador ternário


*/