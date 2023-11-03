let checklist = [
    {
        decricao: "Organizar Registros",
        completo: true
    },

    {
        decricao: "Contar Estoque",
        completo: false
    },

    {
        decricao: "Prepara Mercadoria",
        completo: true
    },

    {
        decricao: "Confirmação de Despacho",
        completo: false
    },

    
];


function criarLista(){
         checklist.forEach((element, index) =>{
               let descricao = element.decricao;
               let ulLista = document.getElementById('listaTarefas');
               let elementoLi = document.createElement("li");
               let inputCheck = document.createElement('input');
               inputCheck.type = 'checkbox';

               let completo = element.completo;
              
               elementoLi.append(inputCheck);
               elementoLi.append(descricao);
        

               ulLista.append(elementoLi);
               

               //Função que verifica quais itens estão completos
               
               function verificarStatus(completo, inputCheck){
                    if(completo == true){
                        
                        elementoLi.classList.add('completo');

                        
                    }
               }

               /*Função de marca como completo ao clicar no checkbox */

               inputCheck.addEventListener('click', function(){
                    if(inputCheck.checked){
                        elementoLi.classList.add('completo');
                        completo = true;
                    }else{
                        elementoLi.classList.remove('completo');
                        completo = false;
                    }
                   
                        
               })

               verificarStatus(completo);

            


             

              
        });

       
}


window.onload = () =>{
    criarLista();
   
}


/*

 let ulLista = document.querySelector("#listaTarefas");
    let descricao;
    let elementoLi = document.createElement("li");



    append: serve para adicionar um novo elemento no html
    document.createElement: função que serve para criar qualquer elemento html usando js


    como criar um checkbox dinâmico com js: crie um elemento input com a função create
    depois pegue este mesmo input e defina o tipo dele



    Esse addEventListener adiciona um evento
    inputCheck.addEventListener('click', function(){
                   console.log('clicou');
   })


   inputCheck.checked: Verifica se o checkbox está selecionado ou não


*/