import { Request, Response } from 'express';

// my app
import { Pet } from '../models/Pet';
import { createMenuObject } from '../helpers/createMenuObject';

const search = (req: Request, res: Response) => {
    let query: string = req.query.q as string;

    // redirecionando para página anterior caso não haja conteúdo no input
    if (! query) {
        let backURL: string = req.header('Referer') || '/';
        return res.redirect(backURL);
    }

    let pets = Pet.findByName(query);

    res.render('pages/page', {
        menu: createMenuObject(''),
        query,
        pets
    });
}

export { search };