
const url = 'https://alunos.b7web.com.br/api/ping';
const params = {
    method:'GET',
    body:JSON.stringify({
        method:'GET'
    })
   

};
//Agente monta um objeto e específica as coisas que queremos mandar

fetch(url, params)
/*AQUI É A REQUISIÇÃO */
    .then((r)=>r.json())
    .then((json) =>{
        console.log(json);
    });
    /*AQUI ELE RECEBE UMA PROMESSA  E PEGA A RESPOSTA DA REQUISIÇÃO */



    //Nova forma de fazer uma requisição ajax



    


















    

    /*
    
    A RESPOSTA DADO É EM JSON, ENTÃO VOCÊ PRECISA TRANSFORMAR A RESPOTA EM JSON

    QUANDO VOCÊ RECEBER A RESPOSTA VOCÊ PRECISA TRATA-LA COM OUTRA PROMESSA


    const params = {//Você pode enviar alguns parâmetros para a requisição};


    explicando os parâmetro da rquisição:

    url: Seve para você específicar o endereço na qual você deseja fazer requisições

    params: Você construi um objeto com alguns parãmetros que pode ser enviado durante a requisição
    Method: Método de envio da requisição
    Body: Corpo da requisição, aqui você manda o que quiser


    */