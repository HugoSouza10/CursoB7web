async function loadPosts(){

    //Requisição com await

    let req = await fetch('https://jsonplaceholder.typicode.com/users') //Vai ficar esperando para continuar!!
    let json = await req.json()//Transformei em json

    montarInf(json);
}


let montarInf = (response) =>{
    console.log(response);
}

/*

para quer serve o Async e Await? Serve basicamente para a gente específicar que o código
vai ser Assicrono ou seja, ele vai ter que esperar uma respota

Await trabalha a resposta substituindo o .the

async: você obriga o código a esperar uma resposta!

*/