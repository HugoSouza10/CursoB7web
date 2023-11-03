
//Dados
let weight = document.querySelector('.box .peso') as HTMLInputElement;
let height = document.querySelector('.box .altura') as HTMLInputElement;
let old = document.querySelector('.box .idosoValue') as HTMLInputElement;
let young = document.querySelector('.box .jovemValue') as HTMLInputElement;
let btnCalcule = document.querySelector('.calcular');



const tableImcOld = [22, 27];


const tableImcYoung = [
    [18.5, 24.9],
    [25, 29.9],
    [30, 34.9],
    [35, 39.9],
    [40]
]





old.addEventListener('change', () => {
    let faixa: number = +old.value;
    young.checked = false;
    imc(faixa);
});

young.addEventListener('change', () => {
    old.checked = false;
    let faixa: number = +young.value;
    imc(faixa);
})


function imc(faixa: number) {

    if (weight.value && height.value != undefined) {
        const imc: number = +weight.value / +Math.pow(+height.value, 2);
        verifyImc(imc, faixa);
    } else {
        alert('Opa, prencha os dados!');
    }


}




function verifyImc(imc: number, faixa: number) {
    //Objs com informações
    let infoImc = {
        imc: imc,
        faixa: 'Idoso',
        status: '',
        height: height.value,
        weight: weight.value
    }



    if (faixa === 1) {
        if (imc < tableImcOld[0]) {
            infoImc.status = 'Abaixo do peso!';
            render(infoImc);
        }

        if (imc > tableImcOld[0] && imc < tableImcOld[1]) {
            infoImc.status = 'Peso ideal!';
            render(infoImc);
        }

        if (imc > tableImcOld[1]) {
            infoImc.status = 'Sobrepeso!';
            render(infoImc);
        }
    }

    if (faixa === 2) {

        //Objs com informações
        let infoImc = {
            imc: imc,
            faixa: 'Jovem',
            status: '',
            height: height.value,
            weight: weight.value
        }


        //h atualizar array do array

        console.log(tableImcYoung[2][0]);
        console.log(imc);

        if (imc < tableImcYoung[0][0]) {
            infoImc.status = 'Abaixo do peso!';
            render(infoImc);
        }

        if (imc > tableImcYoung[0][0] && imc < tableImcYoung[0][1]) {
            infoImc.status = 'Peso ideal!';
            render(infoImc);
        }

        if (imc > tableImcYoung[1][0] && imc < tableImcYoung[1][1]) {
            infoImc.status = 'Excesso de peso!';
            render(infoImc);
        }

        if (imc > tableImcYoung[2][0] && imc < tableImcYoung[2][1]) {
            infoImc.status = 'Obesidade de Classe 1!';
            render(infoImc);
        }

        if (imc > tableImcYoung[3][0] && imc < tableImcYoung[3][1]) {
            infoImc.status = 'Obesidade de Classe 2!';
            render(infoImc);
        }

        if (imc > tableImcYoung[4][0]) {
            infoImc.status = 'Obesidade de Classe 3!';
            render(infoImc);
        }
    }

    calculeImcBtn(infoImc)
}




type infoType = {
    faixa: string,
    imc: number,
    status: string,
    height: string,
    weight: string
}

function calculeImcBtn(info: infoType) {
    btnCalcule.addEventListener('click', () => {
        render(info);
    });
}


//Renderizar
function render(info: infoType) {
    const html: string = `
    <div class="faixaContainer">
        <div class="imc">Faixa: ${info.faixa}</div>
        <div class="imc">IMC: ${info.imc.toFixed(2)}</div>
        <div class= "resultFinal">Situação: ${info.status}</div>
    </div>
    
    `
    document.querySelector('.faixaContainer').innerHTML = html;
}




/*Quando você usa retorno, então quem você usou que tem retorno, preciso ter o mesmo retorno */


/*https://dms.ufpel.edu.br/casca/modulos/imc-calc#comp/imc-main */

/*
obs: Quando se tem um retorno do tipo string, então a função que usar essa função
com este retorno, também deverá ter o retorno string independete de ela retorna outra coisa
no final


DIVIDIR ARRAY: https://pt.stackoverflow.com/questions/167531/dividir-array-em-grupos-menores

reduce
https://medium.com/@viniciusdacal/javascript-array-map-filter-e-reduce-tr%C3%AAs-m%C3%A9todos-para-manipula%C3%A7%C3%A3o-de-arrays-3fa9aebaf7fe

O que aprendemos?

-Tipos primitivos
-Tipos de array
-Retorno
-Type personalizado
*/