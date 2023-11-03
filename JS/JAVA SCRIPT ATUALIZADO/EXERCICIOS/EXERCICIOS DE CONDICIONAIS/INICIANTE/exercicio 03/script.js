function verificar(){
    var n1 = parseInt(document.getElementById('numero1').value);
    let n2 = parseInt(document.getElementById('numero2').value);
    let n3 = parseInt(document.getElementById('numero3').value);
    let resultado;
   

   if(n1>n2 && n1>n3){
       resultado = n1;
       document.getElementById('resultado').innerHTML = resultado+' '+'É o maior';
   }else{
       if(n2>n1 && n2>n3){
           resultado = n2;
           document.getElementById('resultado').innerHTML = resultado+' '+'É o maior';
       }else{
          if(n3>n2 && n3>n1){
              resultado = n3;
              document.getElementById('resultado').innerHTML = resultado+' '+'É o maior';
          }
       }
   }
}