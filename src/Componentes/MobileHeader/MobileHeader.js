import React, { useState } from 'react';
import {Link} from 'react-router-dom';

function MobileHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="mobile-header">
      <nav className='headercelular'>
        <div className='logocelular'>
            <Link to='/'> <img src='/img/LOGO.png' alt="Logo de New Amenities"></img> </Link>
        </div>
        <div className='celulartodolootro'>
        <Link to='/buscador'><img width="20" height="20" src="https://img.icons8.com/ios/50/search--v1.png" alt="search--v1"/></Link>
        <a href='https://www.instagram.com/new_amenities/' target="_blank" rel="noreferrer"><img className='instagram' width="20" height="20" src="https://img.icons8.com/ios/50/instagram-new--v1.png" alt="instagram-new--v1"/></a>
      <button onClick={() => setMenuOpen(!menuOpen)} className='button-menu'>
          <img width="20" height="20" src="https://img.icons8.com/ios/50/menu--v7.png" alt="menu--v7"/>
      </button>
      </div>
      </nav>
      {menuOpen && (
        <nav className='aparezco'>
          <ul>
            <li><Link to='/'> HOME </Link></li>
            <li><Link to='/sobrenosotros'> SOBRE NOSOTROS </Link></li>
            <li><Link to='/productos'> PRODUCTOS </Link>  </li>
            <li><Link to='/sustentabilidad'> SUSTENTABILIDAD </Link>  </li>
            <li><Link to='/clientes'> CLIENTES </Link>  </li>
            <li><Link to='/contacto'> CONTACTO </Link> </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default MobileHeader;