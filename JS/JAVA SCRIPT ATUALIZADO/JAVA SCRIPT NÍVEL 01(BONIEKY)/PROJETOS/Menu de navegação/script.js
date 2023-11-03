function menuToggle(){
	let menu = document.getElementById('menu-area');

	if(menu.style.width == '200px'){
		menu.style.width = '0px';
	}else{
		menu.style.width = '200px';
	}
}






//VERIFICA SE EXISTE UMA CLASSE classList.contains

/*
let menuArea = document.getElementById("menu-area");

	if(menuArea.classList.contains('menuAberto') == true){
		menuArea.classList.remove('menuAberto');
	}else{
		menuArea.classList.add('menuAberto');
	}


*/