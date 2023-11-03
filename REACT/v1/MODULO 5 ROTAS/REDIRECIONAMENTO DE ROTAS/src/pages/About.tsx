import {Link} from 'react-router-dom';

export const About = () => {
    return(
        <>
            <div>Página SOBRE</div>
            <ul>
                <li><Link to="/sobre/bonieky">Sobre Bonieky</Link></li>
                <li><Link to="/sobre/hugo">Sobre Hugo</Link></li>
            </ul>
        </>
       
    )
}