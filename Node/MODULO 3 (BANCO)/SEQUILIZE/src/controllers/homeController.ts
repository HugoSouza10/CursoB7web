import { Request, Response } from 'express';
import { sequelize } from '../instances/mysql';

import { Product } from '../models/Product';
import { User } from '../models/User';

export const home = async (req: Request, res: Response)=>{
    let age: number = 90;
    let showOld: boolean = false;

    let users = await User.findAll({
        // attributes: {exclude:['id']}
        where: {name: 'Hugo'}
    });

    console.log("USUÁRIOS:", JSON.stringify(users));

    if(age > 50) {
        showOld = true;
    }

    let list = Product.getAll();
    let expensiveList = Product.getFromPriceAfter(12);

    res.render('pages/home', {
        name: 'Bonieky',
        lastName: 'Lacerda',
        showOld,
        products: list,
        expensives: expensiveList,
        frasesDoDia: [],
        users
    });
};