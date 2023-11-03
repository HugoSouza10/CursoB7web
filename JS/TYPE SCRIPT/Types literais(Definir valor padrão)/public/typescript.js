//EX1
function mostrarTexto(text, alinhamento) {
    return "<div style=\"text-align:".concat(alinhamento, "\"></div>");
}
console.log(mostrarTexto('Hugo', 'Center'));
function temName(name) {
    return name ? true : false;
}
console.log(temName('Hugo'));
//EX2
function darkMode(mode) {
    return mode;
}
console.log(darkMode('dark'));
/*
A gente específica um valor padrão para ele, então ele só vai aceitar
aquele valor padrão

mode:'dark' | 'light' |'auto': Aqui estou definido que o valor padrão do mode é light ou dark ou auto
*/
