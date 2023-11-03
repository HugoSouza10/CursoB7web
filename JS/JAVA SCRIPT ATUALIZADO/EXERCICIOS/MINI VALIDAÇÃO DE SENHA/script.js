function validarSenha(senha){
	let = senha;

	if(senha < 5){
		document.getElementById("tamanhoSenha").innerHTML = "Opa senha fraca";
	}

	if(senha >5){
		document.getElementById("tamanhoSenha").innerHTML = "Senha forte";
	}

	if(senha>10){
		document.getElementById("tamanhoSenha").innerHTML = "Senha muito forte";
	}

	
}

function tamanhoSenha(s){
	console.log(s);
}