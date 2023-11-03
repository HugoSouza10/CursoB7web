
//Dados
let current: number = 0;

function select(target: string): HTMLElement {
    return document.querySelector(target) as HTMLElement;
}


//Render
function renderQuestion() {
    select('.questionArea').style.display = 'block';
    select('.question').innerHTML = questions[current].question;
   
}

renderQuestion();