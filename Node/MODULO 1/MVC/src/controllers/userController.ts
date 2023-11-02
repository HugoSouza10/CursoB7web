import { Request, Response } from 'express';

export const nome = (req:Request, res:Response)=>{
    let nome: string = req.query.nome as string;
    let idade: string = req.query.idade as string
    res.render('nome', {
        nome,
        idade
    });
}

export const idade = (req:Request, res:Response)=>{

    let idade:number = 0;
    let mostrarIdade: boolean = false; 

    if(req.query.ano) {
        let anoNascimento: number =  parseInt(req.query.ano as string);
        let anoAtual: number = new Date().getFullYear();
        idade = anoAtual - anoNascimento;
        mostrarIdade = true;
    }
   
    res.render('idade',{
        idade,
        mostrarIdade
    });
}


export const idadeFormPost = (req:Request, res:Response)=>{
    let idade:number = 0;
    let mostrarIdade: boolean = false; 

    if(req.body.ano) {
        let anoNascimento: number =  parseInt(req.body.ano as string);
        let anoAtual: number = new Date().getFullYear();
        idade = anoAtual - anoNascimento;
        mostrarIdade = true;
    }
   
    res.render('idade',{
        idade,
        mostrarIdade
    });
}