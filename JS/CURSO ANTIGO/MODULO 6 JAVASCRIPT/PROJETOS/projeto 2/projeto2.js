function verificar(){
	var n1 = document.getElementById("n01").innerHTML;
	var n2 = document.getElementById("n02").value;

	if(n1 == n2){
		document.getElementById("display").innerHTML = "PARABÉNS(ACERTOU)";
	}else{
		document.getElementById("display").innerHTML = "VOCÊ ERROU!";
	}

	resetar();
	placar();
}


function resetar(){
	 document.getElementById("n01").innerHTML = "";
	 document.getElementById("n01").innerHTML = Math.floor(Math.random()*100);
	 document.getElementById("n02").value = "";
}


function placar(){

	var contador = 0;
    var numero1 = document.getElementById("n01").innerHTML;
	var numero2 = document.getElementById("n02").value;

	if(numero1 ==  numero2){
		contador = (contador+1);
		alert(contador);
        
	}
}