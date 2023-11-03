
let B7Validator = {
    handleSubmit:(event) =>{
        event.preventDefault();
        let send = true;

        let inputs = document.querySelectorAll('input');

        B7Validator.clearErrors();

        for(let i=0; i<inputs.length; i++){
            let input = inputs[i];
            /*Pega todos os inputs */
            let check = B7Validator.checkInput(input);
            /*Envia os input para a função verificar input */

            if(check !== true){
                send = false;
                //Exibir erro 
                B7Validator.showErro(input, check);
            }
        }


        if(send){
            form.submit();
        }
    },

    //Essa função verifica todos os campos e todas as regras
    checkInput:(input)=>{
        let rules = input.getAttribute('data-rules');
        if(rules !== null){
            rules = rules.split('|');
            for(let k in rules){
                let rDetails = rules[k].split('=');

                //Regras
                switch(rDetails[0]){
                    case 'required':
                        if(input.value ==''){
                            return 'Campo não pode ser vazio';
                        }
                    break;

                    case 'min':

                    break;
                }
            }
        }

        return true;
        //Pega a regra específica daquele campo com o getAttribute
        // rules = rules.split('|'); Aqui gera as regras
    },
    showErro: (input, error) =>{
            input.style.borderColor = "red";

            let erroElement = document.createElement('div');
            erroElement.classList.add('erro');

           erroElement.innerHTML = error;

           input.parentElement.insertBefore(erroElement, input.ElementSibling);
    },

    clearErrors: ()=>{
        
       let inputs =  form.querySelectorAll('input');

       for(let i =0; i<inputs.length; i++){
           inputs[i].style='';
       }

        let erroElement = document.querySelectorAll('.erro');
        for(let i = 0; i<erroElement.length; i++){
                erroElement[i].remove('error');
        }
    }
}

let form = document.querySelector('.b7validator');

form.addEventListener('submit',B7Validator.handleSubmit);


//split(): dividi algum através de um separador

//parentElement.insertBefore: insere algum antes de alguma coisa

//parentElement.insertBefore(erroElement, input.ElementSibling): insere um elmento depois