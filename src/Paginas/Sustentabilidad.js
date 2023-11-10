import React from 'react';
import SustentabilidadHeader from '../Componentes/SustentabilidadHeader/SustentabilidadHeader';
import SustentabilidadMobileHeader from '../Componentes/SustentabilidadMobileHeader/SustentabilidadMobileHeader'

function Sustentabilidad() {
  const isMobile = window.innerWidth <= 810 && window.innerWidth >= 320;

  return (
    <React.Fragment>
      {isMobile ? <SustentabilidadMobileHeader /> : <SustentabilidadHeader />}
      <nav className='quehacemos'>
        <figure>
          <img src='/img/f709d663-ae80-41d5-9e40-fda99cb8cf7d.jpg' alt='Foto' />
          <figcaption className='gracias'>
            ¡Gracias por ser parte de este <br></br> esfuerzo por cuidar nuestro planeta!
          </figcaption>
        </figure>
        <div className='quehacemos2'>
          <h2>Lo que <br></br> hacemos</h2>
          <p>Como proveedores de la industria hotelera, nos preocupamos por brindar una experiencia excepcional a sus huéspedes y también por proteger el planeta que tenemos el privilegio de compartir. Es por eso que hemos decidido optar por materias primas amigables al medio ambiente. <br></br> La incorporación de amenities sustentables en el sector hotelero es una tendencia en crecimiento que busca reducir el impacto ambiental de la industria hotelera. Al adoptar prácticas responsables en el uso de recursos, la gestión de residuos y la Preservación de la Vida Silvestre y los Ecosistemas Naturales, los hoteles pueden desempeñar un papel fundamental en la promoción de un turismo más responsable y respetuoso con el medio ambiente. La combinación del confort y lujo con un enfoque sustentable es el camino hacia un futuro donde el turismo y la conservación del planeta puedan coexistir armoniosamente</p>
        </div>
      </nav>
      <div className='logowpp'>
            <a href="https://wa.me/59113940/?text=Hola, como estas?" target="_blank" rel="noreferrer"><img className='whatsapp' width="48" height="48" src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="whatsapp--v1"/></a>
      </div>
    </React.Fragment>
  );
}

export default Sustentabilidad;
