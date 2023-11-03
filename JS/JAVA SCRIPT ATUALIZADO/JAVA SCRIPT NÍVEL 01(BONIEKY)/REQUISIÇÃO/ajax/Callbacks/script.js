 //CALLBACK: É BASICAMENTE UMA FUNÇÃO NA QUAL LHE PROMETE LIGAR MAIS TARDE


//EU TE LIGO DE VOLTA! ESSE CALBACK É COMO SE FOSSE UMA PROMESSA NA QUAL RETORNARÁ UM RESULTADO


function alertar(){
    console.log('Olá, tudo bem?'); //CÓDIGO ASSICRÓNO, POIS VAI ESPERAR UMA RESPOSTA DO SERVIDOR
}
setTimeout(alertar, 2000);

let nome = 'Hugo';


let sobreNome = 'Souza';
console.log("NOME COMPLETO =  "+nome+' '+sobreNome);
