
let numero = '5';

console.log(numero.padEnd(9, '*'));


/*EXEMPLO PRÁTICO */


let cartao = '1234567891234567';

let lastDigits = cartao.slice(-4);

let cartaoMascarado = lastDigits.padStart(16, '*');

console.log('Este é o seu cartão?'+cartaoMascarado);



/*MEU EXEMPLO */

let cpf = '12341234';

console.log(cpf.padEnd(11, '-'));











/*

PadEnd: Você específica a quantidade de caracter que a string deve conter, depois específica
a o caracter que você deseja colocar casi ele não encontre todos os caracteres

PadEstar faz a mesma coisa, porém coloca tudo no começo


*/