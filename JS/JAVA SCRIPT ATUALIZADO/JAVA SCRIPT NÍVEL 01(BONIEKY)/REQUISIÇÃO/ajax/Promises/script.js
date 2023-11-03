function pegarTemperatura(){
    return new Promise(function(resolve, reject){ //Promessa código assicrono
        console.log("Pegando temperatura....."); //isso aqui é um código sicrono

        setTimeout(function(){
            resolve('40 na sombra');
        },2000)
    });

    
}

let temp = pegarTemperatura(); // guradei a promessa na variável promesse

temp.then(function(resultado){ // A função then serve para trabalhar o resultado da requisição
    console.log("TEMPERATURA:" +resultado);
}); 

temp.catch(function(){
    console.log('Eita, deu erro!');
});


//Quem tiver chamando a função pegar temperatura receberá a resposta e poderá ser usada