

let x = prompt('Informe quantos termos deseja da sequência');
let a = 0;
let b = 1;
let c;

console.log(a);
console.log(b);
calcularFibonaci(x);


function calcularFibonaci(x){
    for(let i = 0; i<x; i++){
       c = a+b;
       b = c;
       a = b; 
       console.log(c);
    }
   
}

































/* 
function fib(x) {

    let a = 0;
    let b = 1;
    let f = 1;

    for (let i = 0; i < x; i++) {

        arr.push(f);
        f = a + b;
        a = b;
        b = f;
        console.log(f);

    }
}

fib(x);

*/