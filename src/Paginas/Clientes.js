import React from 'react';
import Navbar from '../Componentes/Navbar/Navbar';
import MobileHeader from '../Componentes/MobileHeader/MobileHeader';

function Clientes (){
    const isMobile = window.innerWidth <= 810 && window.innerWidth >= 320;

    return(
    <React.Fragment>
        {isMobile ? <MobileHeader /> : <Navbar />}
        <nav className='caja-clientes'>
        <div className='clientes'>
            <h3>Clientes</h3>
            <p>Estas empresas confían y confiaron en nosotros</p>   
        </div>
        <div className='fotos-clientes'> 
            <img src='img/clientes.png' alt='Clientes'></img>
        </div>
        </nav>
        <div className='logowpp'>
            <a href="https://wa.me/59113940/?text=Hola, como estas?" target="_blank" rel="noreferrer"><img className='whatsapp' width="48" height="48" src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="whatsapp--v1"/></a>
        </div>
    </React.Fragment>
    );
}

export default Clientes;