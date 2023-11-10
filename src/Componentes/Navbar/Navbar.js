import React from 'react';
import {Link} from 'react-router-dom';

function Navbar(){
    return (
    <React.Fragment>
        <nav className='header'>
            <div className="logo">
                <Link to='/'> <img className='imgLOGO' src='/img/LOGO.png' alt="Logo de New Amenities"/> </Link>
            </div>
            <div className='links'>
                <ul>
                    <li><Link to='/'> HOME </Link></li>
                    <li><Link to='/sobrenosotros'> SOBRE NOSOTROS </Link></li>
                    <li><Link to='/productos'> PRODUCTOS </Link>  </li>
                    <li><Link to='/sustentabilidad'> SUSTENTABILIDAD </Link>  </li>
                    <li><Link to='/clientes'> CLIENTES </Link>  </li>
                    <li><Link to='/contacto'> CONTACTO </Link>  </li>
                </ul>
            </div>
            <div className='buscador-insta'>
                <Link to='/buscador'><img width="20" height="20" src="https://img.icons8.com/ios/50/search--v1.png" alt="search--v1"/></Link>
                <a href='https://www.instagram.com/new_amenities/' target="_blank" rel="noreferrer"><img className='instagram' width="20" height="20" src="https://img.icons8.com/ios/50/instagram-new--v1.png" alt="instagram-new--v1"/></a>               
            </div>
        </nav>
    </React.Fragment>
    );
}

export default Navbar