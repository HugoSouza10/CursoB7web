
let dia = 3;
let diaNome = '';

switch(dia){
    case 1:
        diaNome = 'Segunda feira';
        break; // Ao terminar um caso dê um break
    case 2:
        diaNome = 'Terça feira';
        break;    

    case 3:
        diaNome = 'Quarta feira';
        break;
        
     case 4:
         diaNome = 'Quinta-feira';
         break;
         
      case 5:
          diaNome = 'Sexta feira';
          break;
       
       case 6:
           diaNome = 'Sabado';
           break;
           
        case 7:
            diaNome = 'Domingo';
            break;   

           
          
        
}

document.getElementById('dia').innerHTML = diaNome;


/*O switch: serve para quando temos várias verificações 

o switch funciona baseado em um valor específico

 default: defini uma condição padrão quando não se acha nenhuma condição

*/
