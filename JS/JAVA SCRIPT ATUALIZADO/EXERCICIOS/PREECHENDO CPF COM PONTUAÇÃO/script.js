function formataCPF(cpf){
	let cpfOriginal = cpf;
	let cpfAtualizado;

	cpfOriginal.replace(/[^\d]/g, "");
	// remove os caracteres indesejados

	cpfAtualizado = cpfOriginal.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3*$4");
	// esse código formato o padrão do cpf

	console.log(cpfAtualizado);
}

// replace FORMATA UMA STRING DO JEITO QUE AGENTE QUISER
function mascara(i){
   
   var v = i.value;
   
   if(isNaN(v[v.length-1])){ // impede entrar outro caractere que não seja número
      i.value = v.substring(0, v.length-1);
      return;
   }
   
   i.setAttribute("maxlength", "14");
   if (v.length == 3 || v.length == 7) i.value += ".";
   if (v.length == 11) i.value += "-";

}


//setAttribute: Adiciona um novo atributo ou modifica o valor de um atributo existente num elemento específico.