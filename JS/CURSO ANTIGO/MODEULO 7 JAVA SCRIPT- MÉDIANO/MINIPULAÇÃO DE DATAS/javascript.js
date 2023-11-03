var  data = new Date(); // ESSA FUNÇÃO PEGA A DATA ATUAL.


data.getHours(); // PEGA SOMENTE A HORA

data.getSeconds();  // PEGA SOMENTE OS SEGUNDOS

data.getDay(); // RETORNA O DIA DA SEMANA

data.getFullYear(); // RETORNA O ANO DESSA DATA



// FORMATO BRASILEIRO!!

data.getDate()+"/"+(data.getMonth()+1)+"/"+data.getFullYear()+"/";

document.write(data);

//data.getDate() : PEGA O DIA DO MÊS.

//data.getMonth()// PEGA O MÊS

//data.getFullYear(); PEGA O ANO




var dias = ["Domindo", "Segunda", "Terça", "Quarta", "Sexta", "Sábado"];
// AQUI É IMPORTANTE PARA IMPRIMIR OS DIAS DA SEMANA DE FORMA CORRETA


dias[data.getDay()];