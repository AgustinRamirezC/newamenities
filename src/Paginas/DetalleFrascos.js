import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../Componentes/Navbar/Navbar';
import MobileHeader from '../Componentes/MobileHeader/MobileHeader';

const productosfrascos = [
    {id: 9, nombre: 'BOTELLA LARA', descripcion1: 'Contenido: Botella Lara de 60ml, para shampoo, acondicionador, body lotion o gel de baño', descripcion2:'Packaging: Botella de plástico con tapa de aluminio', foto: "img/frasco1.png"},
    {id: 10, nombre: 'BOTELLA MARÍA', descripcion1: 'Contenido: Botella María de 70ml, para shampoo, acondicionador, body lotion o gel de baño', descripcion2:'Packaging: Botella de plástico con tapa de aluminio', foto: 'img/frasco2.png'},
    {id: 11, nombre: 'BOTELLA LARA', descripcion1: 'Contenido: Botella Lara de 35ml, para shampoo, acondicionador, body lotion o gel de baño', descripcion2:'Packaging: Botella con tapa de plástico', foto: 'img/frasco3.png'},
    {id: 12, nombre: 'BOTELLA MARÍA', descripcion1: 'Contenido: Botella María de 30ml, para shampoo, acondicionador, body lotion o gel de baño', descripcion2:'Packaging: Botella con tapa de plástico', foto: 'img/frasco4.png'},
    {id: 13, nombre: 'BOTELLA TUBITO', descripcion1: 'Contenido: Botella Tubito de 30ml, para shampoo, acondicionador, body lotion o gel de baño', descripcion2:'Packaging: Botella de plástico con tapa de flip flop', foto: 'img/frasco5.png'},
    {id: 14, nombre: 'BOTELLA MARTINA', descripcion1: 'Contenido: Botella Martina de 125ml, para shampoo, acondicionador, body lotion o gel de baño', descripcion2:'Packaging: Botella de plástico con tapa de aluminio', foto: 'img/frasco6.png'},
    {id: 15, nombre: 'BOTELLA ROCIO', descripcion1: 'Contenido: Botella Rocio de 50ml, para shampoo, acondicionador, body lotion o gel de baño', descripcion2:'Packaging: Botella de plástico con tapa de aluminio', foto: 'img/frasco7.png'},
    {id: 16, nombre: 'BOTELLA ROCCO', descripcion1: 'Contenido: Botella Rocco de 125ml, para shampoo, acondicionador, body lotion o gel de baño', descripcion2:'Packaging: Botella de plástico con tapa de aluminio', foto: 'img/frasco8.png'},
    {id: 17, nombre: 'BOTELLA MARTINA', descripcion1: 'Contenido: Botella Martina de 125ml, para shampoo, acondicionador, body lotion o gel de baño', descripcion2:'Packaging: Botella de plástico con tapa de aluminio', foto: 'img/frasco9.png'},
    {id: 18, nombre: 'BOTELLA GARRAFITA', descripcion1: 'Contenido: Botella Garrafiti de 30ml, para shampoo, acondicionador, body lotion o gel de baño', descripcion2:'Packaging: Botella de plástico con tapa de aluminio', foto: 'img/frasco14.png'},
    {id: 19, nombre: 'BOTELLA ROCIO', descripcion1: 'Contenido: Botella Rocio de 50ml, para shampoo, acondicionador, body lotion o gel de baño', descripcion2:'Packaging: Botella de plástico con tapa de aluminio', foto: 'img/frasco11.png'},
    {id: 20, nombre: 'BOTELLA MARÍA', descripcion1: 'Contenido: Botella María de 70ml, para shampoo, acondicionador, body lotion o gel de baño', descripcion2:'Packaging: Botella con tapa de plástico', foto: 'img/frasco13.png'},
];

const DetalleFrascos = () => {
  const { id } = useParams();
  const producto = productosfrascos.find((p) => p.id === parseInt(id, 10));
  const isMobile = window.innerWidth <= 810 && window.innerWidth >= 320;

  return (
    <React.Fragment>
      {isMobile ? <MobileHeader /> : <Navbar />}
      <Link to='/frascos'><img width="20" height="20" src="https://img.icons8.com/ios/50/back--v1.png" alt="back--v1" className='paratras'/></Link>
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

export default DetalleFrascos;