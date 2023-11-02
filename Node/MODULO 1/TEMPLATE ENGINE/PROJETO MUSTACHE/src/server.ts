import express, {Request, Response} from 'express';
import path from 'path';
import mustache from 'mustache-express';
import mainRouter from './routes';
import painelRoutes from './routes/painel';


const server = express();

//Configurar mustache
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

//Pegar as pastas publicas
server.use(express.static(path.join(__dirname, '../public')));

server.use(mainRouter);
server.use('/painel', painelRoutes);

//Configurar página não encontrada
server.use((req:Request, res:Response)=>{
  res.status(404).send('Página não encontrada!');
});

//GET, POST, PUT, DELETE

server.listen(3000);