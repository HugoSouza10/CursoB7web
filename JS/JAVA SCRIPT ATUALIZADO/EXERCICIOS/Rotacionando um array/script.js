let vetorAlfabeto = ["A", "B", "C", "D", "E"];
vetorAlfabeto.sort();

let q = 4;

rotacao(q, vetorAlfabeto);


function rotacao(q, v){
    for(let i = 0; i<=5; i++){
        if(i>q){
            v.unshift(v.pop());
        }
    }

    console.log(v);
}

/*Você pode juntar várias funções de array para pegar o que você quiser */












//Pode usar a função pop para pegar o último elemento
//  let ultimoEle = v.pop()[index];


