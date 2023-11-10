import React, { useState } from 'react';
import {Link} from 'react-router-dom';

import firebase from 'firebase/app';
import 'firebase/firestore';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const db = firebase.firestore();
      await db.collection('mail').add({
        email,
      });
      // Limpiar los campos después de guardar los datos
      setEmail('');
      console.log('Datos guardados en Firestore.');
    } catch (error) {
      console.error('Error al guardar los datos:', error);
    }
  };
    return (
    <React.Fragment>
        <nav className='caja-footer'>
        <nav className="footer">
            <div className="barrabajo">
                <ul>
                    <li><Link to='/sobrenosotros'> QUIENES SOMOS </Link></li>
                    <li><Link to='/productos'> PRODUCTOS </Link>  </li>
                    <li><Link to='/clientes'> CLIENTES </Link>  </li>
                </ul>
            </div>
            <div className='divalado'>
              <ul>
                <li><Link to='/sustentabilidad'> SUSTENTABILIDAD </Link> </li>
                <li><Link to='/contacto'> CONTACTO </Link>  </li>
              </ul>
            </div>
            <div className='seguinos'>
                <form onSubmit={handleSubmit} className='formulariofooter'>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Dirección de correo electórnico" className='mailfooter'/>
                    <button type="submit" className='botonfooter'>Suscribir</button>
                </form>
                <p>SEGUINOS EN:</p><a href='https://www.instagram.com/new_amenities/' target="_blank" rel="noreferrer"><img className='instagram' width="20" height="20" src="https://img.icons8.com/ios/50/instagram-new--v1.png" alt="instagram-new--v1"/></a>
            </div>
        </nav>
        <p className='copyright'>© 2023 by New Amenities.S.R.L</p>
        </nav>
    </React.Fragment>
    )
}

export default Footer