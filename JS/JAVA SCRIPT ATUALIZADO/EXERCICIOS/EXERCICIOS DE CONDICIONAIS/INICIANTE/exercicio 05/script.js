function verificar(){
    var nu1 =  parseInt(document.getElementById('numero1').value);
    var nu2 = parseInt(document.getElementById('numero2').value);
    var nu3 = parseInt(document.getElementById('numero3').value);

    var aux = 0;


    if(nu1 > nu2){
        aux = nu2;
        nu2 = nu1;
        nu1 = aux;

    }

    if(nu2 > nu1){
        aux = nu3;
        nu3 = nu2;
        nu2 = aux;
    }

    if(nu3 > nu2){
        aux = nu3;
        nu3 = nu2;
        nu2 = nu3;
    }
    
    console.log(nu1);
    console.log(nu2);
    console.log(nu3);
  

}
