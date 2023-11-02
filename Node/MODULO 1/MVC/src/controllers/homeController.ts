import { Request, Response } from 'express';

export const home = (req:Request, res:Response)=>{

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
}