
function calcular(){
	
let nome = document.getElementById('nome').value;	
document.getElementById('aluno').innerHTML = nome;
let n1 = parseFloat(document.getElementById('nota1').value);
let n2 = parseFloat(document.getElementById('nota2').value);

let media = (n1+n2)/2;
document.getElementById('media').innerHTML = media;


if(media >= 6){
	document.getElementById('situacao').innerHTML = 'Aprovado';
}else{
	if(media == 5){
		document.getElementById('situacao').innerHTML = 'Recuperação';
	}else{
		document.getElementById('situacao').innerHTML = 'Reprovado';
	}
}


	
	
}

	

	


	/*OBS: PARA PEGAR VALORES VOCÊ PRECISA TRANSFORMAR EM PASSFLOAT OU INT */