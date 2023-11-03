import { MainRoutes } from './routes/MainRoutes';

const App = ()=>{

    return (
      <div className="p-4">
        <header>
          <h1>Titulo do site</h1>
        </header>
        <hr />
        <div className="py-4">
          <MainRoutes/>
        </div>
        <hr />
        <footer>Todos os dirreitos reservados.</footer>
      </div>
    ) 

}

export default App;