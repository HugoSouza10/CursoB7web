

let texto = '';

for(let i = 0; i<50; i++){
    texto = texto + i + '</br>';
}

//Pra usar o for você precisa definir uma variável auxíliar para começar a contagem
//Depois você só precisa definir a condição de contagem
//Aumente sua variável auxília para que ela atualize seu valor


document.getElementById('loop').innerHTML = texto;



// LOOP DE ARRAY LISTAS
let lista = ['fusca','Palio','Corola'];

let html = '<ul>';

    for(let t in lista){
        html+= '<li>'+lista[t] +'</li>'
    }


html+='</ul>';

document.getElementById('loopArray').innerHTML = html;

// BASICAMENTE ELE VAI PERCORRER O ARRAY E LISTANDO TUDO







/*O loop for serve para fazer repetições inumeras vezes 

temos dois tipos de for:

for loop:
for array:


*/