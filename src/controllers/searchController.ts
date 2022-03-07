import { Request, Response } from 'express';

const search = (req: Request, res: Response) => {
    res.send('search do controller');
    // res.render('pages/search');
}

export { search };