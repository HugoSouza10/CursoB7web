let vetor = ["a", "b", "a", "a", "c", "b"];


function encontraIsolado(vetor){
    let sorted = vetor.sort();
    let odd;
    sorted.forEach((element, index) => {
        let thisElement = sorted[index];
        let nextEle = sorted[index +1];

        if (thisElement == nextEle){
            index++;
        } else {
            odd = thisElement;
        }
    })
    return odd;
    
}
console.log(encontraIsolado(["a", "b", "a", "a", "c", "c", "b", "d"]));


/*funcionamento do comando foreach

ela executa um bloco de código para cada item do meu array


foreach tem alguns parâmetros: 

1- o elemento específico, ou seja o meu array
2- a posição do meu array que é o idex, mas pode ser qualquer nome
3- o terceiro parâmetro é a própria lista que você está percorrendo!

*/