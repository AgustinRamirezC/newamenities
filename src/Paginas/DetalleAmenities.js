import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../Componentes/Navbar/Navbar';
import MobileHeader from '../Componentes/MobileHeader/MobileHeader';

const productosamenities = [
    {id: 21, nombre: 'KIT DE AFEITAR CON MÁQUINA DESCARTABLE BIC', descripcion1: 'Contenido: Kit de afeitar con 1 máquina descartable BIC, gel de afeitar con 1 Pouch de 10g.', descripcion2: 'Packaging: desarrollados en cartulina estucada triplex 225g, lisos o texturados, o cartulinas recicladas, impresas en Offset/hot stamping. Bolsa cierre adhesivo.', foto: "img/kitafeita.png", foto1: "afeitar.png", foto2: "envoltorio7.png"},
    {id: 22, nombre: 'MANOPLA LUSTRA CALZADO FRANELA', descripcion1: 'Contenido: Lustracalzado tipo manopla de Friselina.', descripcion2:'Packaging: Bolsa cierre adhesivo', foto: 'img/manopla.webp'},
    {id: 23, nombre: 'KIT DE AFEITAR CON MÁQUINA DESCARTABLE GILLETTE', descripcion1: 'Contenido: Kit de afeitar con 1 máquina descartable Gillette, gel de afeitar con 1 botella.', descripcion2:'Packaging: desarrollados en cartulina estucada  triplex 225g, lisos o texturados, o cartulinas recicladas, impresas en Offset/hot stamping. Bolsa cierre adhesivo.', foto: 'img/gillette.png'},
    {id: 24, nombre: 'SALES DE BAÑO', descripcion1: 'Contenido: Sales de baño.', descripcion2:'Packaging: En botella o en bolsa de cinta.', foto: 'img/kk.png'},
    {id: 25, nombre: 'KIT DE UÑAS LIMA + PALITO', descripcion1: 'Contenido: Kit de uñas (1 lima grande y 1 palito de naranjo).', descripcion2:'Packaging: Bolsa cierre adhesivo.', foto: 'img/lima.png'},
    {id: 26, nombre: 'VANITY PACK', descripcion1: 'Contenido: 2 discos desmaquillantes, 2 hisopos y 1 lima de uña chica en sobre pp individual.', descripcion2:'Packaging: Bolsa de cierre adhesivo.', foto: 'img/vanity.png'},
    {id: 27, nombre: 'HISOPOS X3 UNIDADES', descripcion1: 'Contenido: Hisopos x 3 unidades.', descripcion2:'Packaging: Bolsa cierre adhesivo.', foto: 'img/hisopos.jpeg'},
    {id: 28, nombre: 'PEINE BLANCO', descripcion1: 'Contenido: Peine Carey blanco.', descripcion2:'Packaging: Bolsa cierre adhesivo.', foto: 'img/peine.png'},
    {id: 29, nombre: 'PEINE CAREY', descripcion1: 'Contenido: Peine Carey .', descripcion2:'Packaging: Bolsa cierre adhesivo.', foto: 'img/peinee.png'},
    {id: 30, nombre: 'DISCOS DESMAQUILLANTES', descripcion1: 'Contenido: 3 discos desmaquillantes de algodón.', descripcion2:'Packaging: Bolsa cierre adhesivo.', foto: 'img/discos.webp'},
    {id: 31, nombre: 'POMPONES DE ALGODÓN', descripcion1: 'Contenido: 3 pompones de algodón.', descripcion2:'Packaging: Bolsa cierre adhesivo.', foto: 'img/Pompones.png'},
    {id: 32, nombre: 'COFIA DE BAÑO', descripcion1: 'Contenido: Cofia de baño.', descripcion2:'Packaging: Bolsa cierre adhesivo.', foto: 'img/cofia.png'},
    {id: 33, nombre: 'COSTURERO', descripcion1: 'Contenido: Constituido por 4 hilos, 2 botones, 1 alfiler de gancho y 1 aguja.', descripcion2:'Packaging: Bolsa cierre adhesivo.', foto: 'img/costurero.png'},
    {id: 34, nombre: 'KIT DENTAL', descripcion1: 'Contenido: Kit dental con 1 cepillo de dientes, 1 pasta Esmedent x 15gr.', descripcion2:'Packaging: Bolsa cierre adhesivo.', foto: 'img/cepillo.png'},
    {id: 35, nombre: 'ESPONJA VEGETAL EN RODAJA', descripcion1: 'Contenido: Esponja vegetal en rodaja, para cuerpo con acción exfoliante.', descripcion2:'Packaging: En bolsa.', foto: 'img/exfoliante.png'},
    {id: 36, nombre: 'ESPONJA VEGETAL ENTERA', descripcion1: 'Contenido: Esponja vegetal entera.', descripcion2:'Packaging: A granel.', foto: 'img/esponja.jpeg'},
    {id: 37, nombre: 'PANTUFLAS', descripcion1: 'Contenido: Pantuflas.', descripcion2:'Packaging: Bolsa cierre adhesivo', foto: 'img/ojotas.png'},
    {id: 38, nombre: 'PAÑUELOS', descripcion: '', foto: 'img/pañuela.png'},
];

const DetalleAmenities = () => {
  const { id } = useParams();
  const producto = productosamenities.find((p) => p.id === parseInt(id, 10));
  const isMobile = window.innerWidth <= 810 && window.innerWidth >= 320;

  return (
    <React.Fragment>
      {isMobile ? <MobileHeader /> : <Navbar />}
      <Link to='/amenities'><img width="20" height="20" src="https://img.icons8.com/ios/50/back--v1.png" alt="back--v1" className='paratras'/></Link>
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

export default DetalleAmenities;