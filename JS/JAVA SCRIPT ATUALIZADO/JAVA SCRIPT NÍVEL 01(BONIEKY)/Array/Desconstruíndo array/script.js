let info = ['Hugo Souza', 'Hugo', 'Souza', '@hugo10'];


let [nomeCompleto, , , instagram] = info;

console.log(nomeCompleto, instagram);


function criar(){
    return  [1,2,3];
   
}

let [a,b,c] = criar();

console.log(a,b,c);

/*PODEMOS DESCONSTRUIR ATRAVÉS DE UMA FUNÇÃO */




/*

obs: APESAR DESSE ARRAY NÃO TIVER UM NOME, PRECISAMO ADICIONAR NOMES 
PARA PODE DESCONSTRUIR

obs2: A DESCONSTRUÇÃO DO ARRAY PRECISA SER NA ORDEM EM QUE O ARRAY É CRIADO


let [nomeCompleto, nome, sobreNome, instagram] = info;

console.log(nomeCompleto, nome, sobreNome, instagram);

É dessa maneira que se desconstrui um array


let [nomeCompleto, , , instagram] = info;
obs: Se você quiser pular de item, então você pode pular usando as vírgulas

let [nome, sobreNome] = ['Bonieky', 'Lacerda'];
Obs: essa forma comprimida de desconstruir é mais bem-vinda para quando se tem 
muitos dados

*/