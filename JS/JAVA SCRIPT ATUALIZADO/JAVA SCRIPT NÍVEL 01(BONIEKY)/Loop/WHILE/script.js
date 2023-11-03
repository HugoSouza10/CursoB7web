let html = '';

let c = 0;
while(c<10){
    html +="Numero: "+c+"</br>";
    c++;

}

/* WHILE FAZ A MESMA COISA DO FOR */

document.getElementById('loop').innerHTML = html;