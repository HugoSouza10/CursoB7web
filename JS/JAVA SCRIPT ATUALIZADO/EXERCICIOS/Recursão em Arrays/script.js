function contadorDecrescente(n){
        if(n<1){
            return [];
        }else{
            const arrayDecrescente = contadorDecrescente(n-1);
            arrayDecrescente.unshift(n);
            return arrayDecrescente;
        }
}

console.log(contadorDecrescente(5));

