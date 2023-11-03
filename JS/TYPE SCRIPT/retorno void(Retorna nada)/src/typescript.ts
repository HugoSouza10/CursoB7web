
type anyFunction = () => void;

const algo:anyFunction = ()=>{
    return true;
}

/*

retorno void não retorna nada, somente executa o código

obs: Quando criamos um type específico, então podemos
dizer que a função retorna ou não alguma coisa.


obs2: Se eu quiser construir um type para minha função, entã tenho que específica
o type do parêmtro e do retorno

type exemplo = (name: string) => string;


*/
