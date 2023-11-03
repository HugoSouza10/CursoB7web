async function inserirPost(){
   document.getElementById('post').innerHTML = 'Carregando....';

    //Aqui você pode específicar os parâmetros da requisição envinado um cabeçalho e um corpo
    let req = await fetch('https://jsonplaceholder.typicode.com/posts',{
            method: 'POST',
            body: JSON.stringify({
                title: 'Titudo do post exemplo',
                body: 'Corpo de teste',
                userId: 123
            }),

            headers:{
                'Content-Type': 'application/json'
            }
    });

    let json = await req.json();

    console.log(json);
}


//Body: corpo da requisição: dados que são enviados internamentes, todos os dados são enviados em forma de string