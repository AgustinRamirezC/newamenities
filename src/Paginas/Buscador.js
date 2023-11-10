import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Fuse from 'fuse.js';
import Navbar from '../Componentes/Navbar/Navbar';
import MobileHeader from '../Componentes/MobileHeader/MobileHeader';

function Buscador() {
  const [busqueda, setBusqueda] = useState('');

  // Utiliza useMemo para inicializar el arreglo 'productos' una vez
  const productos = useMemo(() => [
    // Tu arreglo de productos aquí
    {id: 1, nombre: 'Jabón cuadrado', descripcion1: 'Contenido: Jabón cuadrado de 20gr.',descripcion2:'Packaging: Flow pack o papel de seda.' , foto: "img/jabon-10.jpg"},
    {id: 2, nombre: 'Jabón redondo con germen de trigo', descripcion1: 'Contenido: Jabón redondo con germen de trigo de 30gr.',descripcion2:'Packaging: Flow pack o papel de seda.' , foto: 'img/jabon-11.jpg'},
    {id: 3, nombre: 'Jabón rectangular con semilla de lavanda', descripcion1: 'Contenido: Jabón rectangular con semillas de lavanda de 40 o 20gr.',descripcion2:'Packaging: Flow pack, resinite o papel de seda.' , foto: 'img/jabon-13.jpg'},
    {id: 4, nombre: 'Jabón cuadrado con semilla de lavanda', descripcion1: 'Contenido: Jabón cuadrado con semillas de lavanda de 40 o 20gr.', descripcion2:'Packaging: Flow pack, resinite o papel de seda.' , foto: 'img/jabon-14.jpg'},
    {id: 5, nombre: 'Jabón redondo', descripcion1: 'Contenido: Jabón cuadrado de 20gr.', descripcion2:'Flow pack o papel de seda', foto: 'img/jabon-15.jpg'},
    {id: 6, nombre: 'Jabón ovalado', descripcion1: 'Contenido: Jabón ovalado de 30gr.',descripcion2:'Packaging: Flow pack o papel de seda.' , foto: 'img/jabon-16.jpg'},
    {id: 7, nombre: 'Jabón redondo', descripcion1: 'Contenido: Jabón redondo de 20gr.',descripcion2:'Packaging: Flow pack o papel de seda.' , foto: 'img/jabon-12.jpg'},
    {id: 8, nombre: 'Jabón rectangular', descripcion1: 'Contenido: Jabón rectangular de 20gr.',descripcion2:'Packaging: Flow pack o papel de seda.' , foto: 'img/jabon-17.jpg'},

    {id: 9, nombre: 'Botella Lara', descripcion1: 'Contenido: Botella Lara de 60ml, para shampoo, acondicionador, body lotion o gel de baño', descripcion2:'Packaging: Botella de plástico con tapa de aluminio', foto: "img/frasco1.png"},
    {id: 10, nombre: 'Botella María', descripcion1: 'Contenido: María de 70ml, para shampoo, acondicionador, body lotion o gel de baño', descripcion2:'Packaging: Botella de plástico con tapa de aluminio', foto: 'img/frasco2.png'},
    {id: 11, nombre: 'Botella Lara', descripcion1: 'Contenido: Botella Lara de 35ml, para shampoo, acondicionador, body lotion o gel de baño', descripcion2:'Packaging: Botella con tapa de plástico', foto: 'img/frasco3.png'},
    {id: 12, nombre: 'Botella María', descripcion1: 'Contenido: Botella María de 30ml, para shampoo, acondicionador, body lotion o gel de baño', descripcion2:'Packaging: Botella con tapa de plástico', foto: 'img/frasco4.png'},
    {id: 13, nombre: 'Botella Tubito', descripcion1: 'Contenido: Botella Tubito de 30ml, para shampoo, acondicionador, body lotion o gel de baño', descripcion2:'Packaging: Botella de plástico con tapa de flip flop', foto: 'img/frasco5.png'},
    {id: 14, nombre: 'Botella Martina', descripcion1: 'Contenido: Martina de 125ml, para shampoo, acondicionador, body lotion o gel de baño', descripcion2:'Packaging: Botella de plástico con tapa de aluminio', foto: 'img/frasco6.png'},
    {id: 15, nombre: 'Botella Rocio', descripcion1: 'Contenido: Botella Rocio de 50ml, para shampoo, acondicionador, body lotion o gel de baño', descripcion2:'Packaging: Botella de plástico con tapa de aluminio', foto: 'img/frasco7.png'},
    {id: 16, nombre: 'Botella Rocco', descripcion1: 'Contenido: Botella Rocco de 125ml, para shampoo, acondicionador, body lotion o gel de baño', descripcion2:'Packaging: Botella de plástico con tapa de aluminio', foto: 'img/frasco8.png'},
    {id: 17, nombre: 'Botella Martina', descripcion1: 'Contenido: Botella Martina de 125ml, para shampoo, acondicionador, body lotion o gel de baño', descripcion2:'Packaging: Botella de plástico con tapa de aluminio', foto: 'img/frasco9.png'},
    {id: 18, nombre: 'Botella Garrafita', descripcion1: 'Contenido: Botella Garrafiti de 30ml, para shampoo, acondicionador, body lotion o gel de baño', descripcion2:'Packaging: Botella de plástico con tapa de aluminio', foto: 'img/frasco14.png'},
    {id: 19, nombre: 'Botella Rocio', descripcion1: 'Contenido: Botella Rocio de 50ml, para shampoo, acondicionador, body lotion o gel de baño', descripcion2:'Packaging: Botella de plástico con tapa de aluminio', foto: 'img/frasco11.png'},
    {id: 20, nombre: 'Botella María', descripcion1: 'Contenido: Botella María de 70ml, para shampoo, acondicionador, body lotion o gel de baño', descripcion2:'Packaging: Botella con tapa de plástico', foto: 'img/frasco13.png'},

    {id: 21, nombre: 'Kit de afeitar BIC', descripcion1: 'Contenido: Kit de afeitar con 1 máquina descartable BIC, gel de afeitar con 1 Pouch de 10g.', descripcion2: 'Packaging: desarrollados en cartulina estucada triplex 225g, lisos o texturados, o cartulinas recicladas, impresas en Offset/hot stamping. Bolsa cierre adhesivo.', foto: "img/kitafeita.png"},
    {id: 22, nombre: 'Manopla lustra calzado', descripcion1: 'Contenido: Lustracalzado tipo manopla de Friselina.', descripcion2:'Packaging: Bolsa cierre adhesivo', foto: 'img/manopla.webp'},
    {id: 23, nombre: 'Kit de afeitar Gillette (botella de gel)', descripcion1: 'Contenido: Kit de afeitar con 1 máquina descartable Gillette, gel de afeitar con 1 botella.', descripcion2:'Packaging: desarrollados en cartulina estucada  triplex 225g, lisos o texturados, o cartulinas recicladas, impresas en Offset/hot stamping. Bolsa cierre adhesivo.', foto: 'img/gillette.png'},
    {id: 24, nombre: 'Sales de baño', descripcion1: 'Contenido: Sales de baño.', descripcion2:'Packaging: En botella o en bolsa de cinta.', foto: 'img/kk.png'},
    {id: 25, nombre: 'Lima de uñas', descripcion1: 'Contenido: Kit de uñas (1 lima grande y 1 palito de naranjo).', descripcion2:'Packaging: Bolsa cierre adhesivo.', foto: 'img/lima.png'},
    {id: 26, nombre: 'Vanity pack', descripcion1: 'Contenido: 2 discos desmaquillantes, 2 hisopos y 1 lima de uña chica en sobre pp individual.', descripcion2:'Packaging: Bolsa de cierre adhesivo.', foto: 'img/vanity.png'},
    {id: 27, nombre: 'Hisopos', descripcion1: 'Contenido: Hisopos x 3 unidades.', descripcion2:'Packaging: Bolsa cierre adhesivo.', foto: 'img/hisopos.jpeg'},
    {id: 28, nombre: 'Peine blanco', descripcion1: 'Contenido: Peine Carey blanco.', descripcion2:'Packaging: bolsa cierre adhesivo.', foto: 'img/peine.png'},
    {id: 29, nombre: 'Peine Carey', descripcion1: 'Contenido: Peine Carey .', descripcion2:'Packaging: Bolsa cierre adhesivo.', foto: 'img/peinee.webp'},
    {id: 30, nombre: 'Discos desmaquillantes', descripcion1: 'Contenido: 3 discos desmaquillantes de algodón.', descripcion2:'Packaging: Bolsa cierre.', foto: 'img/discos.png'},
    {id: 31, nombre: 'Pompones de algodón', descripcion1: 'Contenido: Pompones de algodón.', descripcion2:'Packaging: Bolsa cierre adhesivo.', foto: 'img/Pompones.png'},
    {id: 32, nombre: 'Cofia de baño', descripcion1: 'Contenido: Cofia de baño.', descripcion2:'Packaging: Bolsa cierre adhesivo.', foto: 'img/cofia.png'},
    {id: 33, nombre: 'Costurero', descripcion1: 'Contenido: Cnstituido por 4 hilos, 2 botones, 1 alfiler de gancho y 1 aguja.', descripcion2:'Packaging: Bolsa cierre adhesivo.', foto: 'img/costurero.png'},
    {id: 34, nombre: 'Kit dental', descripcion1: 'Contenido: Kit dental con 1 cepillo de dientes, 1 pasta Esmedent x 15gr.', descripcion2:'Packaging: Bolsa cierre adhesivo.', foto: 'img/cepillo.png'},
    {id: 35, nombre: 'Esponja vegetal en rodaja', descripcion1: 'Contenido: Esponja vegetal en rodaja, para cuerpo con acción exfoliante.', descripcion2:'Packaging: En bolsa.', foto: 'img/exfoliante.png'},
    {id: 36, nombre: 'Esponja vegetal entera', descripcion1: 'Contenido: Esponja vegetal entera.', descripcion2:'Packaging: A granel.', foto: 'img/esponja.png'},
    {id: 37, nombre: 'Pantuflas', descripcion1: 'Contenido: Pantuflas.', descripcion2:'Packaging: Bolsa cierre adhesivo', foto: 'img/ojotas.png'},
    {id: 38, nombre: 'Pañuelos', descripcion: '', foto: 'img/pañuela.png'},
    // Agrega más productos aquí
  ], []);

  const [resultados, setResultados] = useState([]);

  const handleBusqueda = useCallback(() => {
    const busquedaNormalized = busqueda.normalize('NFC'); // Normaliza la cadena de búsqueda

    const fuse = new Fuse(productos, {
      keys: ['nombre', 'descripcion'],
      includeScore: true,
    });

    const busquedaResultados = fuse.search(busquedaNormalized);

    // Filtrar solo los elementos que coinciden con la búsqueda
    const productosFiltrados = busquedaResultados
      .filter((resultado) => resultado.score < 0.5) // Ajusta este valor según tus necesidades
      .map((resultado) => resultado.item);

    setResultados(productosFiltrados);
  }, [busqueda, productos]);

  useEffect(() => {
    handleBusqueda();
  }, [handleBusqueda]);

  const isMobile = window.innerWidth <= 810 && window.innerWidth >= 320;

  return (
    <React.Fragment>
      {isMobile ? <MobileHeader /> : <Navbar />}
    <nav className='caja-buscador'>
    <nav className='buscador'>
    <div className='busqueda-wrapper'>
        <input className='formulario'
        type="text"
        placeholder="Busca todo el catálogo aquí"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        />
        <button onClick={handleBusqueda}><img width="20" height="20" src="https://img.icons8.com/ios/50/search--v1.png" alt="search--v1"/></button>
      </div>
    </nav>
      <div className='resultados'>
        <ul>
          {resultados.map((producto) => (
            <li key={producto.id}>
              <div className='infoh3pp'>
              <h3>{producto.nombre}</h3>
              <p>{producto.descripcion1}</p>
              <p>{producto.descripcion2}</p>
              </div>
              <img src={producto.foto} alt={producto.nombre} />
            </li>
          ))}
        </ul>
      </div>
      </nav>
    <div className='logowpp'>
            <a href="https://wa.me/59113940/?text=Hola, como estas?" target="_blank" rel="noreferrer"><img className='whatsapp' width="48" height="48" src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="whatsapp--v1"/></a>
        </div>
    
    </React.Fragment>
    
  );
}

export default Buscador;
