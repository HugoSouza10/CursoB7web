
function loadPosts(){
    document.getElementById('post').innerHTML = 'Carregando....';
     fetch('https://jsonplaceholder.typicode.com/users')//Fetch é uma função que faz a requisição, ela recebe uma promessa
     .then(function(resultado){
         return resultado.json(); //Retorna o resultado em json, mas lembre-se que o resultado é uma promessa!
     })

     .then(function(json){ //Recebendo o resultado da promessa do json e mostrando na tela
            document.getElementById('post').innerHTML = json.length;
     })

     .catch(function(error){
         console.log('Erro!');
     })
}



function loadPosts2(){
    document.getElementById('comments').innerHTML = 'carregando';
    fetch('https://jsonplaceholder.typicode.com/comments')

    .then(function(resultado2){
        return resultado2.json();
    })

    .then(function(json){
        document.getElementById('comments').innerHTML = json.length;
    })
}




/*No comando fetch a gente específica a url na qual desejamos fazer a requisição

tem basicamente dois parâmetro, um objeto com as informações da requisição como: tipo de envio post ou get

Quando fazemos uma requisição com fetch basicamente agente precisa de um parâmetro para receber uma resposta e outro para o erro!

obs: quando fazemos uma requisição recebemos o resultado em forma de string, então precimaos transformar em json
*/