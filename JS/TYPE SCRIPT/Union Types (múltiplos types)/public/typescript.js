function mostrarIdade(idade) {
    if (typeof idade === 'string') {
        console.log(idade);
    }
    else {
        console.log(idade);
    }
}
mostrarIdade('idade');
mostrarIdade(20 + 1);
/*
|: Aqui a gente específica se é uma coisa ou outra

obs: É bom específica o typeOf quando se tá usando uma função bem específica

toUpperCase: Esta função é exclusiva para string, então ao receber um número vai dá erro
dá erro por que minha função não sabe quando vai receber uma string

*/
