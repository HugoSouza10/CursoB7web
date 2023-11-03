function fazer(){
   let promise = new Promise((resolve, reject) =>{

    setTimeout(()=>{
        resolve('ok');
    }, 3000);
   



    //Aqui dentro é a promessa na qual vai esperar a resposta da requisição
   });

   return promise;
}


fazer().then((resposta) =>{
    console.log(resposta);
});


function requisicao() {
   return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve('Requisição');
        }, 3000);
   })
}


requisicao().then((respost2) =>{
     console.log(respost2);
})





/*

Promise: Essa função serve para quando você deseja aguardar resposta
de algum servidor, quando ele achar a resposta, então será executada
enquanto não então fica na espera

promise é um objeto

 let promise = new Promise((resolve, reject): 

 Parâmetro resolve: Serve par pegar a resposta da requisição
 reject: Significa que a requisição foi rejeitada, ou seja, deu algum erro

 then: Significa a partir disso
*/