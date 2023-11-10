import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Componentes/Navbar/Navbar';
import MobileHeader from '../Componentes/MobileHeader/MobileHeader';

const productosjabones = [
    {id: 1, nombre: 'Jabón cuadrado', descripcion1: 'Contenido: Jabón cuadrado de 20gr.',descripcion2:'Packaging: Flow pack o papel de seda.' , foto: 'img/jabon-10.jpg'},
    {id: 2, nombre: 'Jabón redondo con germen de trigo', descripcion1: 'Contenido: Jabón redondo con germen de trigo de 30gr.',descripcion2:'Packaging: Flow pack o papel de seda.' , foto: 'img/jabon-11.jpg'},
    {id: 3, nombre: 'Jabón rectangular con semilla de lavanda', descripcion1: 'Contenido: Jabón rectangular con semillas de lavanda de 40 o 20gr.',descripcion2:'Packaging: Flow pack, resinite o papel de seda.' , foto: 'img/jabon-13.jpg'},
    {id: 4, nombre: 'Jabón cuadrado con semilla de lavanda', descripcion1: 'Contenido: Jabón cuadrado con semillas de lavanda de 40 o 20gr.', descripcion2:'Packaging: Flow pack, resinite o papel de seda.' , foto: 'img/jabon-14.jpg'},
    {id: 5, nombre: 'Jabón redondo', descripcion1: 'Contenido: Jabón cuadrado de 20gr.', descripcion2:'Flow pack o papel de seda', foto: 'img/jabon-15.jpg'},
    {id: 6, nombre: 'Jabón ovalado', descripcion1: 'Contenido: Jabón ovalado de 30gr.',descripcion2:'Packaging: Flow pack o papel de seda.' , foto: 'img/jabon-16.jpg'},
    {id: 7, nombre: 'Jabón redondo', descripcion1: 'Contenido: Jabón redondo de 20gr.',descripcion2:'Packaging: Flow pack o papel de seda.' , foto: 'img/jabon-12.jpg'},
    {id: 8, nombre: 'Jabón rectangular', descripcion1: 'Contenido: Jabón rectangular de 20gr.',descripcion2:'Packaging: Flow pack o papel de seda.' , foto: 'img/jabon-17.jpg'},
];

const Jabones = () => {
    const isMobile = window.innerWidth <= 810 && window.innerWidth >= 320;

  return (
    <React.Fragment>
        {isMobile ? <MobileHeader /> : <Navbar />}
        <Link to='/productos'><img width="20" height="20" src="https://img.icons8.com/ios/50/back--v1.png" alt="back--v1" className='paratras'/></Link>
    <div className='infojabones'>
        <p>Contamos con una amplia variedad de jabones, para que puedas elegir la opción que más se adapta a las necesidades de tu hotel en beneficio del huéspede</p>
        <h3>JABONES</h3>
    </div>
    <nav className='jabones'>
                {productosjabones.map((producto) => (
                <div className="cartajabones" key={producto.id}>
                    <Link to={`/detallejabones/${producto.id}`}>
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

export default Jabones;
