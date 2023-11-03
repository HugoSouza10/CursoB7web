function loadPosts(){
    document.getElementById('comments').innerHTML = 'Carregando....';
     fetch('https://jsonplaceholder.typicode.com/posts')//Fetch é uma função que faz a requisição, ela recebe uma promessa
     .then(function(resultado){
         return resultado.json(); //Retorna o resultado em json, mas lembre-se que o resultado é uma promessa!
     })

     .then(function(json){ //Recebendo o resultado da promessa do json e mostrando na tela
            montarComments(json);
     })

     .catch(function(error){
         console.log('Erro!');
     })
}


function montarComments(comments){
    let html = ' ';

    for(let i in comments){
        html += '<h3'+comments[i].body+'</h3>';
        html += comments[i].body+'</br>';
        html += '</hr>';
    }
}


