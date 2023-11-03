"use strict";
//Dados
let current = 0;
function select(target) {
    return document.querySelector(target);
}
//Render
function renderQuestion() {
    select('.questionArea').style.display = 'block';
    select('.question').innerHTML = questions[current].question;
}
renderQuestion();
