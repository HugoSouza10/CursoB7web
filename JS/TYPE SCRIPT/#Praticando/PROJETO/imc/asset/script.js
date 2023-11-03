//Dados
var weight = document.querySelector('.box .peso');
var height = document.querySelector('.box .altura');
var old = document.querySelector('.box .idosoValue');
var young = document.querySelector('.box .jovemValue');
var tableImcOld = [22, 27];
var tableImcYoung = [
    [18.5, 24.9],
    [25, 29.9],
    [30, 34.9],
    [35, 39.9],
    [40]
];
old.addEventListener('change', function () {
    var faixa = +old.value;
    young.checked = false;
    return imc(faixa);
});
young.addEventListener('change', function () {
    old.checked = false;
    var faixa = +young.value;
    return imc(faixa);
});
function imc(faixa) {
    if (weight.value && height.value != undefined) {
        var imc_1 = +weight.value / +Math.pow(+height.value, 2);
        verifyImc(imc_1, faixa);
    }
    else {
        alert('Opa, prencha os dados!');
    }
}
function verifyImc(imc, faixa) {
    //Objs com informações
    var infoImc = {
        imc: imc,
        faixa: 'Idoso',
        status: '',
        height: height.value,
        weight: weight.value
    };
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
        var infoImc_1 = {
            imc: imc,
            faixa: 'Jovem',
            status: '',
            height: height.value,
            weight: weight.value
        };
        //h atualizar array do array
        console.log(tableImcYoung[2][0]);
        console.log(imc);
        if (imc < tableImcYoung[0][0]) {
            infoImc_1.status = 'Abaixo do peso!';
            render(infoImc_1);
        }
        if (imc > tableImcYoung[0][0] && imc < tableImcYoung[0][1]) {
            infoImc_1.status = 'Peso ideal!';
            render(infoImc_1);
        }
        if (imc > tableImcYoung[1][0] && imc < tableImcYoung[1][1]) {
            infoImc_1.status = 'Excesso de peso!';
            render(infoImc_1);
        }
        if (imc > tableImcYoung[2][0] && imc < tableImcYoung[2][1]) {
            infoImc_1.status = 'Obesidade de Classe 1!';
            render(infoImc_1);
        }
        if (imc > tableImcYoung[3][0] && imc < tableImcYoung[3][1]) {
            infoImc_1.status = 'Obesidade de Classe 2!';
            render(infoImc_1);
        }
        if (imc > tableImcYoung[4][0]) {
            infoImc_1.status = 'Obesidade de Classe 3!';
            render(infoImc_1);
        }
    }
}
//Renderizar
function render(info) {
    var html = "\n    <div class=\"faixaContainer\">\n        <div class=\"imc\">Faixa: ".concat(info.faixa, "</div>\n        <div class=\"imc\">IMC: ").concat(info.imc.toFixed(2), "</div>\n        <div class= \"resultFinal\">Situa\u00E7\u00E3o: ").concat(info.status, "</div>\n    </div>\n    \n    ");
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
