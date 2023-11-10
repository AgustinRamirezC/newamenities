import React, { useState } from 'react';
import {Link} from 'react-router-dom';

function SustentabilidadMobileHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sustentabilidad-header">
        <video className='cascada' src='video/waterfall-in-the-jungle-2023-03-02-20-24-19-utc.mov' autoplay='true' loop>
            <source src='video/waterfall-in-the-jungle-2023-03-02-20-24-19-utc.mov' type="video/mp4"/>
        </video>
      <nav className='sustentabilidadcelular'>        
        <div className='logosustcelular'>
            <Link to='/'> <img className='imgLOGOblanco' src='/img/newamenitieslogoblanco.png' alt="Logo de New Amenities"/> </Link>      
        </div>
        <div className='sustceltodolootro'>
            <Link to='/buscador'><img width="20" height="20" src="https://img.icons8.com/ios/50/FFFFFF/search--v1.png" alt="search--v1" className='instagram'/></Link>
            <a href='https://www.instagram.com/new_amenities/' target="_blank" rel="noreferrer"><img width="20" height="20" src="https://img.icons8.com/ios/50/FFFFFF/instagram-new--v1.png" alt="instagram-new--v1" className='instagram'/></a>
      <button onClick={() => setMenuOpen(!menuOpen)} className='button-menu'>
            <img width="20" height="20" src="https://img.icons8.com/ios-filled/50/FFFFFF/menu--v6.png" alt="menu--v6"/>
      </button>
      </div>
      </nav>
      {menuOpen && (
        <nav className='sustentabilidadaparezco'>
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

export default SustentabilidadMobileHeader;