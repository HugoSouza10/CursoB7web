import {Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req:Request, res:Response)=>{
    res.send('Olá, mundo!');
});

router.get('/sobre', (req:Request, res:Response)=>{
    res.send('Página institucional');
})

router.get('/contato', (req:Request, res:Response)=>{
    res.send('Página de contatos');
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


