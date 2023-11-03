

function validar(){
		var valor = document.getElementById("numero").value;

		if(valor.length != 2){
			alert("Você digitou um número maior ou menor que 2 algarismo!");
			return false;
		}
		else{
			return true;
		}


		
		
}


//length: PEGA O TAMANHO DA VARIÁVEL