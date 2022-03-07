import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';

// my app
import mainRoutes from './routes/index';

// Configuração do .env
dotenv.config();

// Iniciando o servidor
const server = express();

// Configurando a view engine
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

// Configurando a pasta pública
server.use(express.static(path.join(__dirname, '../public')));

// Rotas
server.use(mainRoutes);

// fallback
server.use((req: Request, res: Response) => {
    res.send('Página não encontrada!');
})

// "Escutando"
server.listen(process.env.APP_PORT);
