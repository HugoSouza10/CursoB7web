import { Routes, Route, useRoutes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import {AboutBonieky} from '../pages/AboutBonieky';
import {AboutHugo} from '../pages/AboutHugo';
import { NotFound } from '../pages/NotFound';
import { AboutItem } from '../pages/AboutItem';


export const MainRoutes = () => {

    return useRoutes ([
        { path: '/', element:<Home/> },
        { path: '/sobre', element:<About/> },
        { path: '/sobre/:slug', element:<AboutItem/> },
        { path: '*', element:<NotFound/>},
    ])
    
    
    
    
    /* EM COMPONENTES
    return (

     
        <Routes>
             <Route path="/" element={<Home/>}/>
             <Route path="/sobre" element={<About/>}/>
             <Route path='/sobre/bonieky' element={<AboutBonieky/>}/>
             <Route path='/sobre/hugo' element={<AboutHugo/>}/>
             <Route path="*" element={<NotFound/>}/>
             --Rotas dinâmicas--
             <Route path='sobre/:slug' element={<AboutItem/>}/>
          </Routes>
    );

    */
    

    
}