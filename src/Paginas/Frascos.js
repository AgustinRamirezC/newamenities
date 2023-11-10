import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Componentes/Navbar/Navbar';
import MobileHeader from '../Componentes/MobileHeader/MobileHeader';

const productosfrascos = [
    {id: 9, nombre: 'Botella Lara', descripcion: '', foto: "img/frasco1.png"},
    {id: 10, nombre: 'Botella María', descripcion: '', foto: 'img/frasco2.png'},
    {id: 11, nombre: 'Botella Lara', descripcion: '', foto: 'img/frasco3.png'},
    {id: 12, nombre: 'Botella María', descripcion: '', foto: 'img/frasco4.png'},
    {id: 13, nombre: 'Botella Tubo', descripcion: '', foto: 'img/frasco5.png'},
    {id: 14, nombre: 'Botella Martina', descripcion: '', foto: 'img/frasco6.png'},
    {id: 15, nombre: 'Botella Rocio', descripcion: '', foto: 'img/frasco7.png'},
    {id: 16, nombre: 'Botella Rocco', descripcion: '', foto: 'img/frasco8.png'},
    {id: 17, nombre: 'Botella Martina', descripcion: '', foto: 'img/frasco9.png'},
    {id: 18, nombre: 'Botella Garrafita', descripcion: '', foto: 'img/frasco14.png'},
    {id: 19, nombre: 'Botella Rocio', descripcion: '', foto: 'img/frasco11.png'},
    {id: 20, nombre: 'Botella María', descripcion: '', foto: 'img/frasco13.png'},
];

const Frascos = () => {
    const isMobile = window.innerWidth <= 810 && window.innerWidth >= 320;

  return (
    <React.Fragment>
        {isMobile ? <MobileHeader /> : <Navbar />}
    <Link to='/productos'><img width="20" height="20" src="https://img.icons8.com/ios/50/back--v1.png" alt="back--v1" className='paratras'/></Link>
    <div className='infojabones'>
        <p>La colección de recipientes que tenemos es muy interesante por la variedad de diseños y su ajustabilidad a diferentes tipos de condiciones</p>
        <h3>FRASCOS</h3>
    </div>
    <nav className='jabones'>
                {productosfrascos.map((producto) => (
                <div className="cartajabones" key={producto.id}>
                    <Link to={`/detallefrascos/${producto.id}`}>
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

export default Frascos;
