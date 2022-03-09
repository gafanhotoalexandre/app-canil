import { Request, Response } from 'express';

import { Pet } from '../models/Pet';
import { createMenuObject } from '../helpers/createMenuObject';

const home = (req: Request, res: Response) => {
    let pets = Pet.all();

    res.render('pages/page', {
        menu: createMenuObject('all'),
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        },
        pets
    });
}

const dogs = (req: Request, res: Response) => {
    let pets = Pet.findByType('dog');
    res.render('pages/page', {
        menu: createMenuObject('dog'),
        banner: {
            title: 'Cachorros',
            background: 'banner_dog.jpg'
        },
        pets
    })
}

const cats = (req: Request, res: Response) => {
    let pets = Pet.findByType('cat');
    res.render('pages/page', {
        menu: createMenuObject('cat'),
        banner:{
            title: 'Gatos',
            background: 'banner_cat.jpg'
        },
        pets
    });
}

const fishes = (req: Request, res: Response) => {
    let pets = Pet.findByType('fish');
    res.render('pages/page', {
        menu: createMenuObject('fish'),
        banner: {
            title: 'Peixes',
            background: 'banner_fish.jpg'
        },
        pets
    });
}

export { home, dogs, cats, fishes };