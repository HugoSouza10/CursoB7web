

/*
g: (Encontra todas as ocorrênciais)
i: insertitive - (Encontra todas as ocorrências com letras maísculas)
(): Podemos separar a expressão em grupos diferentes. Podemos colocar sub grupos também (())
!:ou (Podemos filtra uma coisa ou outra)

funções:

test: (Verifica se existe, caso exista retorna true)
exec: (Com isso posso extrair o texto encontrado)
*/


const regExp1 = /(maria|joão|luiz)(, hoje sua esposa)/i; //Expressão

const found = (regExp1.exec(texto));

if(found){
    console.log(found[0]);
    console.log(found[1]);
    console.log(found[2]);
}











/*PODEMOS VALIDAR CPF E EMAIL POR EXEMPLO 

Você pode filtrar por grandes blocos de textos


obs: Quando usamos grupos, é gerado um array com todos os grupos filtrados.
vantagem de usar grupos é poder adicionar blocos de códigos para cada grupo


*/