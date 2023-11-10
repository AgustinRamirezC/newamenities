import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../Componentes/Navbar/Navbar';
import MobileHeader from '../Componentes/MobileHeader/MobileHeader';

function Productos (){
    const isMobile = window.innerWidth <= 810 && window.innerWidth >= 320;

    return(
    <React.Fragment>
        {isMobile ? <MobileHeader /> : <Navbar />}
    <div className='parrafoiproductos'>
        <p>Desde hace más de 30 años buscando ideas innovadoras que aporten valor agregado e inspiración al sector hotelero</p>
        <h3>NUESTRA GAMA DE PRODUCTOS</h3>
    </div>
    <nav className='productos'>
        <div>
            <img src='img/jobonc.png' alt='Foto jabones'></img>
            <h3>JABONES</h3>
            <Link className='boton' to='/jabones'>VER MAS</Link>
        </div>
        <div>
            <img src='img/frasco2.png' alt='Foto frascos'></img>
            <h3>FRASCOS</h3>
            <Link className='boton' to='/frascos'>VER MAS</Link>
        </div>
    </nav>
    <div className='amenitiesproducto'>
        <img src='img/kk.png' alt='Foto amenities'></img>
        <h3>AMENITIES</h3>
        <Link className='boton' to='/amenities'>VER MAS</Link>
    </div>
    <div className='logowpp'>
            <a href="https://wa.me/59113940/?text=Hola, como estas?" target="_blank" rel="noreferrer"><img className='whatsapp' width="48" height="48" src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="whatsapp--v1"/></a>
        </div>
    </React.Fragment>
    );
}

export default Productos;