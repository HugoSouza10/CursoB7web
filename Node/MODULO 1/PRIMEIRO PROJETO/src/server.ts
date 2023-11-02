import express, {Request, Response} from 'express';
import mainRouter from './routes';
import painelRoutes from './routes/painel';
import path from 'path';

const server = express();

server.use(express.static(path.join(__dirname, '../public')));

server.use(mainRouter);
server.use('/painel', painelRoutes);

//Configurar página não encontrada
server.use((req:Request, res:Response)=>{
  res.status(404).send('Página não encontrada!');
});

//GET, POST, PUT, DELETE

server.listen(3000);