
//EX1
function mostrarTexto(
    text:string,
    alinhamento: 'Left' | 'Right' | 'Center'
){
    return `<div style="text-align:${alinhamento}"></div>`
}


 console.log(mostrarTexto('Hugo', 'Center'));



 //EX2:
 type trueOrFalse = true | false;

 function temName(name:string):trueOrFalse{
        return name?true:false;
 }

 console.log(temName('Hugo'));










//EX2
function darkMode(mode:'dark' | 'light' |'auto'):string{
    return mode;
}


console.log(darkMode('dark'));


/*
A gente específica um valor padrão para ele, então ele só vai aceitar 
aquele valor padrão

mode:'dark' | 'light' |'auto': Aqui estou definido que o valor padrão do mode é light ou dark ou auto
*/
