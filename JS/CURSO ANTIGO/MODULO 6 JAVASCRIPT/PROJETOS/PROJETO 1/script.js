function verificar(){
	var numero01 = document.getElementById("n01").innerHTML;
	var numero02 = document.getElementById("n02").value;
	var display = document.getElementById("display").innerHTML;
	var resultado;

	if(numero01 %2 ==0 & numero02 %2 == 0) {
		document.getElementById("display").innerHTML = "Parabéns (PAR)";
		 
	}else
	if(numero01 %2 ==1 & numero02 %2 ==1 ){
		document.getElementById("display").innerHTML = "Parabéns (IMPAR)";
	}else{
		document.getElementById("display").innerHTML = "Você errou";
	}
   resetar();
    placar();

	
}

function resetar(){
	document.getElementById("n01").innerHTML = "";
	document.getElementById("n01").innerHTML = Math.floor(Math.random() * 100);
	document.getElementById("n02").value = "";

}



function placar(){

	var numero03 = document.getElementById("n01").innerHTML;
	var numero04 = document.getElementById("n02").value;

	if (numero03 == numero04) {
		
		var acumulada = document.getElementById("placar").innerHTML = acumulada++;
	}

}



