import React from 'react';
import Navbar from '../Componentes/Navbar/Navbar';
import MobileHeader from '../Componentes/MobileHeader/MobileHeader';

function SobreNosotros (){
    const isMobile = window.innerWidth <= 810 && window.innerWidth >= 320;

    return(
    <React.Fragment>
        {isMobile ? <MobileHeader /> : <Navbar />}
    <nav className='sobrenosotros'>
        <div className='parrafocha'>
            <h2>Quiénes somos</h2>
            <p>Hace más de 30 años, en New Amenities S.R.L, hemos mantenido un firme compromiso con la satisfacción de un cliente, proporcionando amenities de primera calidad para los hoteles y sanatorios más destacados del país.
            <br></br>
            En la actualidad nos encontramos en una emocionante etapa de crecimeinto y renovación. Cada día, canalizamos nuestras energias hacia la mejora constante de nuestros productos y fortalecer nuestra estructura. Nuestor compromiso es seguir superándonos para brindar a nuestros clientes experiencias excepcionales. Mantenemos nuestro enfoque en la calidad y la satisfacción, sabiendo que esto nos ha consolidado como líderes en el mercado por más de dos décadas.
            <br></br>
            ¡Gracias por formar parte de nuestra historia!
            <br></br>
            Natalia Lepora
            Socia Gerente</p>
            
        </div>
        <img src='/img/LOGO.png' alt='Logo New Amenities'></img>
    </nav>
    <div className='bienvenidoss'>
        <h3>¡Bienvenido a New Amenities, donde el lujo y la calidad se encuentran con la hospitalidad excepcional!</h3>
        <p>En New Amenities, creemos que los pequeños detalles marcan la diferencia. Nuestro objetivo es elevar la hospitalidad de tu hotel, brindando un toque de lujo y sofisticación que hará que tus huéspedes se sientan valorados y mimados.</p>
    </div>  
    <div className='logowpp'>
            <a href="https://wa.me/59113940/?text=Hola, como estas?" target="_blank" rel="noreferrer"><img className='whatsapp' width="48" height="48" src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="whatsapp--v1"/></a>
        </div>
    </React.Fragment>
    );
}

export default SobreNosotros;