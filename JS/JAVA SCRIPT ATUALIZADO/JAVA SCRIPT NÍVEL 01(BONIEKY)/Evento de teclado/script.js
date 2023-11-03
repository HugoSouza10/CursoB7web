function digitou(e){
   if(e.keyCode == 13 && e.ctrlKey == true){
      let texto = document.getElementById('campo').value;
      console.log(texto);
   }

}

//SE VOCÊ PRECISA SABER O CÓDIGO DA TECLA É SÓ PROCURAR NA OPÇÃO KEYCODE
//  if(e.keyCode == 13): esse é o comando para saber qual tecla foi acionado