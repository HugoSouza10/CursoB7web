var number1 = document.getElementById("number1");
var number2 = document.getElementById("number2");
var result = document.getElementById("result");
var btn = document.getElementById("calcule");
//Aqui tô dizendo que vai receber números
function add(n1, n2) {
    return n1 + n2;
}
btn.addEventListener('click', function () {
    result.innerHTML = add(+number1.value, +number2.value).toString();
});
/*Na hora de chamar a função temos que converter para números, pois os parãmetros é do tipo números

o innerHTML Sempre deve receber string, então transformamos no final em string




//+ antes da variável a gente transforma em número





/*


as HTMLInputElement: Serve para específica que isso aqui é input html.


obs:É importante saber que a typagem server para específica os elementos
por exemplo HTMLInputElement a gente tá específicando que aqui será sempre
um input html

obs2: Se você abrir os arquivos ts e js ao mesmo tempo dá erro no editor

obs3: innerHTML: Sempre recebe string

*/ 
