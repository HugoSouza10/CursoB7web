
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import {AboutBonieky} from './pages/AboutBonieky';
import {AboutHugo} from './pages/AboutHugo';
import { NotFound } from './pages/NotFound';
import { AboutItem } from './pages/AboutItem';


const App = ()=>{
    return (
      <div className="p-4">
        <header>
          <h1>Titulo do site</h1>
        </header>
        <hr />
        <div className="py-4">
          <Routes>
             <Route path="/" element={<Home/>}/>
             <Route path="/sobre" element={<About/>}/>
             <Route path='/sobre/bonieky' element={<AboutBonieky/>}/>
             <Route path='/sobre/hugo' element={<AboutHugo/>}/>
             <Route path="*" element={<NotFound/>}/>
             {/* Rota dinâmica */}.
             <Route path='sobre/:slug' element={<AboutItem/>}/>
          </Routes>
        </div>
        <hr />
        <footer>Todos os dirreitos reservados.</footer>
      </div>
    ) 
}

export default App;