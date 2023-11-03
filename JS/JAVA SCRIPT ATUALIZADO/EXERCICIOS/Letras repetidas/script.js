let vetor = ["a", "b", "a", "a", "c", "b"];
vetor.sort();



function encontraIsolado(vetor){
    let od;

    vetor.foreach((element, index) =>{
        let thisElement = vetor[index];
        let nextEle = vetor[index + 1];

        if(thisElement == nextEle){
            index++;
        }else{
            od = thisElement;
        }
    })

    return od;
}

console.log(encontraIsolado(["a", "b", "a", "a", "c", "c", "b", "d"]));







