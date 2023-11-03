// ESTÁ FUNÇÃO ADICIONA UMA BOLA NA TELA

function addBola(){

	var bola = document.createElement("div");
	bola.setAttribute("class", "bola");
	
	var p1 = Math.floor(Math.random() * 500);
	var p2 = Math.floor(Math.random() * 300);

	bola.setAttribute("style", "left:"+p1+"px; top:"+p2+"px;");
	bola.setAttribute("onclick", "estourar(this)");
	document.body.appendChild(bola);
}

function estourar(element){  // element rece o próprio objeto
      document.body.removeChild(element); // REMOVE ELEMENTOS

}

function iniciar(){
	setInterval(addBola, 1000); // AQUI É O TEMPO
}


//var bola = document.createElement("div"); 
// CRIANDO UMA DIV PARA COLOCAR A BOLA AQUI DENTRO (DIV ESTÁ VAZIA).

// bola.setAtribute("class","bola");
	 // ELE PEGA UMA CLASSE O OU CSS OU CONFIGURAÇÕES DO HTML E JOGA EM ALGUM LUGAR



//	var p1 = Math.floor(Math.random() *500); // VALOR DE X (LATERAL).
 //	var p2 = Math.floor(Math.random() *400); // VALOR DE Y (VERTICAL).

	// AQUI FICA O CÓDIGO DE GERAR A BOLA EM VÁRIOS LUGARES DA TELA.



//bola.setAtribute("style", "left: "+p1+"px;top:"+p2+"px"); 
// CÓDIGO PARA POSICIONAR A BOLA.


//bola.setAtribute("onclick", "estourar()"); FUNÇÃO ESTOURAR BOLA



//document.body.appendChild(): FUNÇÃO QUE PEGA O CONTEÚDO(BOLA), E ADICIONA UMANOVA.


//Math.floor(Math.random() O FLOR FUNÇÃO QUE PEGA SOMENTE VALORES INTEIROS.
