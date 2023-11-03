function carregar(){
	var data = new Date();
	var hora = data.getHours();
    document.getElementById("hora").innerHTML = "Agora são:" + hora + " horas ";
    var img = document.getElementById("foto");


    if(hora>0 && hora<12){
        img.src = 'IMAGEM/DIA.png';
        document.body.style.background = '#f5db95';

    }

    if(hora>12 && hora<=17){
        img.src = 'IMAGEM/TARDE.png';
        document.body.style.background = '#eb9d44';

    }else
    if(hora>17 && hora<24){
        img.src = "IMAGEM/NOITE.png";
        document.body.style.background = '#7d7c7a';
    }


}




//var data = new Date();
//var hora = data.getHours();

