
let names = ['Hugo','Bonieky','Pedro','Gustavo',90];


names.forEach((item)=>{
        //Só entra nesse if se for string
        if(typeof item === 'string'){
              console.log(item.toUpperCase());
        }else{
                console.log(item);
        }
    
});


/*

Basicamente o type script indentifica o contexto do retorno
no array temos somente string, logo o type string irá assumir retorno de string

typeOf: Retorna o tipo da variável ou objeto

*/