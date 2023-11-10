import React from 'react';
import Navbar from '../Componentes/Navbar/Navbar';
import MobileHeader from '../Componentes/MobileHeader/MobileHeader';

function Home (){
    const isMobile = window.innerWidth <= 810 && window.innerWidth >= 320;
   

    return(
        <React.Fragment>
            {isMobile ? <MobileHeader /> : <Navbar />}
        <div className='video'>
            <video src='video/isologotipoamenities.mp4' height='530px' autoPlay='true' loop></video>
            <source src='video/isologotipoamenities.mp4' type="video/mp4"></source>
        </div>
        <div className='logomundo'> 
            <img src='/img/LOGONEWAMENITIES.jpg' alt="Logo de New Amenities"></img>
        </div>
        <div className='logowpp'>
            <a href="https://wa.me/59113940/?text=Hola, como estas?" target="_blank" rel="noreferrer"><img className='whatsapp' width="48" height="48" src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="whatsapp--v1"/></a>
        </div>
        </React.Fragment>
    );
}

export default Home;