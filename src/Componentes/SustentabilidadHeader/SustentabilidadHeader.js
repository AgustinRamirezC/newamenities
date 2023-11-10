import React from 'react';
import {Link} from 'react-router-dom';

function SustentabilidadHeader (){
    return (
    <React.Fragment>
        <nav className='sustentabilidad-header'>
            <video src='video/waterfall-in-the-jungle-2023-03-02-20-24-19-utc.mov' autoplay='true' loop>
                <source src='video/waterfall-in-the-jungle-2023-03-02-20-24-19-utc.mov' type="video/mp4"/>
            </video>
            <nav className='cajatextos'>
            <div className="logosustentabilidad">
                <Link to='/'> <img className='imgLOGOblanco' src='/img/newamenitieslogoblanco.png' alt="Logo de New Amenities"/> </Link>                
            </div>
            <div className='linkssustentabilidad'>
                <ul>
                    <li className='negro'><Link to='/'> HOME </Link></li>
                    <li><Link to='/sobrenosotros'> SOBRE NOSOTROS </Link></li>
                    <li><Link to='/productos'> PRODUCTOS </Link>  </li>
                    <li><Link to='/sustentabilidad'> SUSTENTABILIDAD </Link>  </li>
                    <li className='negro'><Link to='/clientes'> CLIENTES </Link>  </li>
                    <li><Link to='/contacto'> CONTACTO </Link> </li>
                </ul>
            </div>
            <div className='buscador-instasustentabilidad'>  
                <Link to='/buscador'><img width="20" height="20" src="https://img.icons8.com/ios/50/FFFFFF/search--v1.png" alt="search--v1" className='instagram'/></Link>
                <a href='https://www.instagram.com/new_amenities/' target="_blank" rel="noreferrer"><img width="20" height="20" src="https://img.icons8.com/ios/50/FFFFFF/instagram-new--v1.png" alt="instagram-new--v1" className='instagram'/></a> 
            </div>    
            </nav>          
        </nav>
    </React.Fragment>
    );
}

export default SustentabilidadHeader;