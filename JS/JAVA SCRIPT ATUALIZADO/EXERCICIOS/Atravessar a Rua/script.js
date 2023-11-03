function atravessaRua(pi, pf, p){
    let positionInicial = parseInt(pi.value);
    let positionFinal = parseInt(pf.value);
    let passos = parseInt(p.value);
    calcularDistancia(positionInicial, positionFinal, passos);

}


function calcularDistancia(pi, pf, p){
       let distancia = 0;

       distancia = pi+p;

       if(distancia >= pf){
           let atravessou = document.getElementById('atravessou').innerHTML = 'Parabéns você atravessou a rua que você deseja!';
       }else{
           status(p, pf);
       }

}

function status(d,pf){
        let status = d;
        document.getElementById('status').innerHTML= 'numeros de passos'+' '+status+' '+'De'+' '+pf;
}
