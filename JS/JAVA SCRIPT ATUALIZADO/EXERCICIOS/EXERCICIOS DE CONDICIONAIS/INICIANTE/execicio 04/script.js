function verificar(){
    var n1 = parseInt(document.getElementById('numero1').value);
    var n2 = parseInt(document.getElementById('numero2').value);

   var aux1 = n2;
   var aux2 = n1;

    

    document.getElementById('resultado').innerHTML = 'Esses são os valores originais:'+' '+n1+'e '+n2;
    document.getElementById('resultado2').innerHTML = 'Esses são os valores invertidos:'+' '+aux1+'e'+aux2;

    


    
}