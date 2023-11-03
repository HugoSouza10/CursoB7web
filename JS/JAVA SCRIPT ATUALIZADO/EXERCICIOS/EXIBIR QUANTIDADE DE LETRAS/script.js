function contar(){
	let frase = document.getElementById("frase").value;
	let total = frase.length;

	document.getElementById("total").innerHTML = "A palavra:"+" "+frase+"Tem"+" "+total;


}