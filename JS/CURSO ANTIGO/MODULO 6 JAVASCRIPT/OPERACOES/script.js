function calcular(){
	var campo1 = parseInt(document.getElementById("campo1").value);
	var campo2 = parseInt(document.getElementById("campo2").value);
	var painel = document.getElementById("painel").value;
    
    soma =campo1+campo2;
	document.getElementById("painel").innerHTML = soma;


}

	//var campo1 = document.getElementById("campo1").value; AQUI PEGA O VALOR DE UM INPUT