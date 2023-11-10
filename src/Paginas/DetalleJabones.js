import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../Componentes/Navbar/Navbar';
import MobileHeader from '../Componentes/MobileHeader/MobileHeader';

const productosjabones = [
  {id: 1, nombre: 'JABÓN CUADRADO', descripcion1: 'Contenido: Jabón cuadrado de 20gr.',descripcion2:'Packaging: Flow pack o papel de seda.' , foto: 'img/jabon-10.jpg'},
  {id: 2, nombre: 'JABÓN REDONDO CON GERMEN DE TRIGO', descripcion1: 'Contenido: Jabón redondo con germen de trigo de 30gr.',descripcion2:'Packaging: Flow pack o papel de seda.' , foto: 'img/jabon-11.jpg'},
  {id: 3, nombre: 'JABÓN RECTANGULAR CON SEMILLAS DE LAVANDA', descripcion1: 'Contenido: Jabón rectangular con semillas de lavanda de 40 o 20gr.',descripcion2:'Packaging: Flow pack, resinite o papel de seda.' , foto: 'img/jabon-13.jpg'},
  {id: 4, nombre: 'JABÓN CUADRADO CON SEMILLAS DE LAVANDA', descripcion1: 'Contenido: Jabón cuadrado con semillas de lavanda de 40 o 20gr.', descripcion2:'Packaging: Flow pack, resinite o papel de seda.' , foto: 'img/jabon-14.jpg'},
  {id: 5, nombre: 'JABÓN REDONDO', descripcion1: 'Contenido: Jabón cuadrado de 20gr.', descripcion2:'Flow pack o papel de seda', foto: 'img/jabon-15.jpg'},
  {id: 6, nombre: 'JABÓN OVALADO', descripcion1: 'Contenido: Jabón ovalado de 30gr.',descripcion2:'Packaging: Flow pack o papel de seda.' , foto: 'img/jabon-16.jpg'},
  {id: 7, nombre: 'JABÓN REDONDO', descripcion1: 'Contenido: Jabón redondo de 20gr.',descripcion2:'Packaging: Flow pack o papel de seda.' , foto: 'img/jabon-12.jpg'},
  {id: 8, nombre: 'JABÓN RECTANGULAR', descripcion1: 'Contenido: Jabón rectangular de 20gr.',descripcion2:'Packaging: Flow pack o papel de seda.' , foto: 'img/jabon-17.jpg'},
];

const DetalleJabones = () => {
  const { id } = useParams();
  const producto = productosjabones.find((p) => p.id === parseInt(id, 10));
  const isMobile = window.innerWidth <= 810 && window.innerWidth >= 320;

  return (
    <React.Fragment>
      {isMobile ? <MobileHeader /> : <Navbar />}
      <Link to='/jabones'><img width="20" height="20" src="https://img.icons8.com/ios/50/back--v1.png" alt="back--v1" className='paratras'/></Link>
      <nav className='caja-detalle'>
      <div className='detalle'>
        <h3>{producto.nombre}</h3>
        <p>{producto.descripcion1}</p>
        <p>{producto.descripcion2}</p>
      </div>
      <div className='detalle-img'>
        <img src={`/${producto.foto}`} alt={producto.nombre}/>
      </div>  
      </nav>
      <div className='logowpp'>
            <a href="https://wa.me/59113940/?text=Hola, como estas?" target="_blank" rel="noreferrer"><img className='whatsapp' width="48" height="48" src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="whatsapp--v1"/></a>
        </div>
    </React.Fragment>
  );
};

export default DetalleJabones;
