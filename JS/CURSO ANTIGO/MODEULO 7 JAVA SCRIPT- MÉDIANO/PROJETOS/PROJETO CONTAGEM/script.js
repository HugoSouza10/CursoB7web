function contar(){
    var contagem = 0;
     
    contagem = setInteval(2000);
	while(contagem<=10){	
        var contador = document.getElementById("contador").innerHTML = contagem;
        clearInterval(contagem);

	}else{
		 contagem++;
	}

	//passar número//


}