var number1 = document.getElementById("number1");
var number2 = document.getElementById("number2");
var result = document.getElementById("result");
var btn = document.getElementById("calcule");

function add(n1, n2) {
    return n1 + n2;
}
btn.addEventListener('click', function () {
    result.innerHTML = add(+number1.value, +number2.value).toString();
});
