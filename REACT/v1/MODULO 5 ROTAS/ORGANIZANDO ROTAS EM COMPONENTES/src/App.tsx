import { MainRoutes } from './routes/MainRoutes';
import { Link} from 'react-router-dom';

const App = ()=>{

    return (
      <div className="p-4">
        <header>
          <h1>Titulo do site</h1>
        </header>
        <hr />
        <div className="py-4">
          <li><Link to="/sobre">Sobre</Link></li>
          <MainRoutes/>
        </div>
        <hr />
        <footer>Todos os dirreitos reservados.</footer>
      </div>
    ) 

}

export default App;