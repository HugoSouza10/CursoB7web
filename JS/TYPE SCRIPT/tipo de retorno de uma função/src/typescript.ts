

function firstLetterUpperCase(name:string):string{
        let letter = name.charAt(0).toLocaleUpperCase();
        return letter+name.substring(1);
}

console.log(firstLetterUpperCase('hugo'));

//O retorno a gente coloca no final da função