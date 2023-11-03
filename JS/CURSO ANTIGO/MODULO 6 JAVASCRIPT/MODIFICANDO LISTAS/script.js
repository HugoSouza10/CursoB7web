function adicionarIngrediente(){
	var ingrediente = document.getElementById("engrdiente").value;
	var lista = document.getElementById("lista").innerHTML;

	lista = lista + "<li>"+ingrediente+"</li>";

    document.getElementById("lista").innerHTML= lista;

	
}


//var lista = document.getElementById("lista").innerHTML; AQUI A VÁRIÁVEL TA PEGANDO O CONTEÚDO HTML DO ID LISTA

//var lista = document.getElementById("lista").innerHTML; AQUI SELECIONA O CONTEÚDO HTML DA LISTA


/*lista = lista + "<li>"+ingrediente+"</li>"; ATUALIZA O CONTEÚDO DA LISTA ACRESCENTANDO UMA NOVA LISTA
FEITA PELO O USUÁRIO


/* document.getElementById("lista").innerHTML= lista; AQUI RECEBE A NOVA LISTA*/