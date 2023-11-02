import {Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req:Request, res:Response)=>{

    let age: number = 17;
    let showOld = false;

    if(age > 50) {
        showOld = true;
    }
    res.render('home', {
        name: 'Hugo',
        age,
        showOld,
        produts: [
            {title: 'Notebook del', price: 5000},
            {title: 'celular xiomi', price: 2000},
            {title: 'Iphone 14 pro', price: 8000}
        ],

        frases: [
            'Opa, que frase linda!',
            'Caramba mano, tu é feio',
            'Tu caga um bode?'
        ]
    });
});

router.get('/sobre', (req:Request, res:Response)=>{
    res.render('sobre');
})

router.get('/nome', (req:Request, res:Response)=>{
    let nome: string = req.query.nome as string;
    let idade: string = req.query.idade as string
    res.render('nome', {
        nome,
        idade
    });
})

router.get('/idade', (req:Request, res:Response)=>{

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
})

//CRIANDO MÉTODO GET
router.post('/idade', (req:Request, res:Response)=>{
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
})

router.get('/contato', (req:Request, res:Response)=>{
    res.render('contato');
})

//Req é os dados que são enviados, res é a resposta
//Slug rota dinãmica
router.get('/noticia/:slug', (req:Request, res:Response)=>{
    let slug: String = req.params.slug;
    res.send(`Notitica: ${slug}`);
})


router.get('/voo/:origem-:destino', (req: Request<any>, res: Response) => {
    const { origem, destino } = req.params;
    res.send(`Procurando voo de: ${origem.toUpperCase()} até: ${destino.toUpperCase()}`);
});

export default router;


