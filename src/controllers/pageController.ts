import { Request, Response } from 'express';

const home = (req: Request, res: Response) => {
    res.send('home do controller');
    // res.render('pages/page');
}

const dogs = (req: Request, res: Response) => {
    res.send('dogs do controller');
}

const cats = (req: Request, res: Response) => {
    res.send('cats do controller');
}

const fishes = (req: Request, res: Response) => {
    res.send('fishes do controller');
}

export { home, dogs, cats, fishes };