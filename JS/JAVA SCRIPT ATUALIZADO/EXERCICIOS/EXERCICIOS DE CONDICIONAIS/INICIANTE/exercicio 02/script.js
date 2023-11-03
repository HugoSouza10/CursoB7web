function verificar(){
  var letra = document.getElementById('letra').value;
 
    if(letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o'){
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = 'Vogal';
    }else{
        resultado.innerHTML ='Consoante';
    }
 
}