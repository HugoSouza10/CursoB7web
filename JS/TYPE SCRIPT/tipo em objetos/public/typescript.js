function resumo(usuario) {
    if (usuario.idade === undefined) {
        return "Ol\u00E1,".concat(usuario.name);
    }
    else {
        return "Ol\u00E1 ".concat(usuario.name, ", tudo bem? Voc\u00EA tem ").concat(usuario.idade, " anos");
    }
}
var usuario = {
    name: 'Hugo'
};
console.log(resumo(usuario));
/*

Nos types de objetos, a gente monta um objeto no parâmetro na
função e específica o tipo dele.

obs:Se você não enviar todos os atributos, então dará erro


obs2: ? Serve para dizer que type é opcional

*/ 
