import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Componentes/Navbar/Navbar';
import MobileHeader from '../Componentes/MobileHeader/MobileHeader';

const productosamenities = [
    {id: 21, nombre: 'Kit de afeitar BIC', descripcion: '', foto: "img/kitafeita.png"},
    {id: 22, nombre: 'Manopla lustra calzado', descripcion: '', foto: 'img/manopla.webp'},
    {id: 23, nombre: 'Kit de afeitar Gillette (botella de gel)', descripcion: '', foto: 'img/gillette.png'},
    {id: 24, nombre: 'Sales de baño', descripcion: '', foto: 'img/kk.png'},
    {id: 25, nombre: 'Lima de uñas', descripcion: '', foto: 'img/lima.png'},
    {id: 26, nombre: 'Vanity pack', descripcion: '', foto: 'img/vanity.png'},
    {id: 27, nombre: 'Hisopos', descripcion: '', foto: 'img/hisopos.jpeg'},
    {id: 28, nombre: 'Peine blanco', descripcion: '', foto: 'img/peine.png'},
    {id: 29, nombre: 'Peine Carey', descripcion: '', foto: 'img/peinee.png'},
    {id: 30, nombre: 'Discos desmaquillantes', descripcion: '', foto: 'img/discos.webp'},
    {id: 31, nombre: 'Pompones de algodón', descripcion: '', foto: 'img/Pompones.png'},
    {id: 32, nombre: 'Cofia de baño', descripcion: '', foto: 'img/cofia.png'},
    {id: 33, nombre: 'Costurero', descripcion: '', foto: 'img/costurero.png'},
    {id: 34, nombre: 'Kit dental', descripcion: '', foto: 'img/cepillo.png'},
    {id: 35, nombre: 'Esponja vegetal en rodaja', descripcion: '', foto: 'img/exfoliante.png'},
    {id: 36, nombre: 'Esponja vegetal entera', descripcion: '', foto: 'img/esponja.jpeg'},
    {id: 37, nombre: 'Pantuflas', descripcion: '', foto: 'img/ojotas.png'},
    {id: 38, nombre: 'Pañuelos', descripcion: '', foto: 'img/pañuela.png'},
];

const isMobile = window.innerWidth <= 810 && window.innerWidth >= 320;

const Amenities = () => {
  return (
    <React.Fragment>
        {isMobile ? <MobileHeader /> : <Navbar />}
        <Link to='/productos'><img width="20" height="20" src="https://img.icons8.com/ios/50/back--v1.png" alt="back--v1" className='paratras'/></Link>
    <div className='infojabones'>
        <p>Creamos nuestra línea de cosméticos con componentes primarios de gran calidad, que se adaptan a las reglas de la industria.</p>
        <h3>AMENITIES</h3>
    </div>
    <nav className='jabones'>
                {productosamenities.map((producto) => (
                <div className="cartajabones" key={producto.id}>
                    <Link to={`/detalleamenities/${producto.id}`}>
                        <img src={producto.foto} alt={producto.nombre} />
                    </Link>
                    <p>{producto.nombre}</p>
                </div>
                ))}
    </nav>
    <div className='logowpp'>
            <a href="https://wa.me/59113940/?text=Hola, como estas?" target="_blank" rel="noreferrer"><img className='whatsapp' width="48" height="48" src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="whatsapp--v1"/></a>
    </div>
    </React.Fragment>
  );
};

export default Amenities;
