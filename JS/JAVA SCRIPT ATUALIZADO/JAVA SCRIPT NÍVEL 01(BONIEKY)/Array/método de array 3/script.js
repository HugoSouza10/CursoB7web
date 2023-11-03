let lista = [45, 4, 9, 16, 25 ];
let lista2 = [];

lista2 = lista.findIndex(function(item){
       return (item==25)?true:false;
});

let res = lista2;

console.log(res);


/*O find procura o primeiro item que ele achar no array e retorna ele para você */

/*findIndex: retorna a posição do item */