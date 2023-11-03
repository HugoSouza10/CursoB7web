/*window.onscroll = function() {
	document.getElementById('header').style="background-color:yellowgreen";
  // executa um bloco de código ou funções, quando o scroll é feito na janela.
}*/

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("navbar").style = "background-color:red";
  } else {
    document.getElementById("navbar").style.top = "-50px";
    document.getElementById("navbar").style = "background-color:yellowgreen";
  }
  prevScrollpos = currentScrollPos;
}


//pageYOffset: PEGA AS INFORMAÇÕES EM PIXEL DO HEIXO Y

//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_navbar_hide_scroll