function firstLetterUpperCase(name) {
    var letter = name.charAt(0).toLocaleUpperCase();
    return letter + name.substring(1);
}
console.log(firstLetterUpperCase('hugo'));
