
let slideTotal = document.querySelectorAll('.slider--item').length;
/*selectorAll para pegar todos os slides */
document.querySelector('.slider--width').style.width = 'calc(100vw * ${slideTotal})';