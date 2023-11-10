import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import Navbar from '../Componentes/Navbar/Navbar';
import MobileHeader from '../Componentes/MobileHeader/MobileHeader';

const Contacto = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const db = firebase.firestore();
      await db.collection('usuarios').add({
        nombre,
        apellido,
        email,
        telefono,
        mensaje,
      });
      // Limpiar los campos después de guardar los datos
      setNombre('');
      setApellido('');
      setEmail('');
      setTelefono('');
      setMensaje('');
      console.log('Datos guardados en Firestore.');
    } catch (error) {
      console.error('Error al guardar los datos:', error);
    }
  };

  const isMobile = window.innerWidth <= 810 && window.innerWidth >= 320;

  return (
    <React.Fragment>
      {isMobile ? <MobileHeader /> : <Navbar />}
    <div className='tituloyp'>
      <h2>Contacto</h2>
      <p>Comunicate con nosotros y dejanos tus consultas y/o pedidos. A la brevedad un representante de ventas se comunicará con ustedes</p>
      <img width="50" height="30" src="https://img.icons8.com/ios/50/horizontal-line.png" alt="horizontal-line"/>
    </div>
    <nav className='container-contacto'>
  <div className='iconos'>
    <img width="24" height="24" src="https://img.icons8.com/ios-filled/50/0b8c8c/marker.png" alt="marker"/>
    <img width="24" height="24" src="https://img.icons8.com/material-rounded/24/0b8c8c/mail.png" alt="mail"/>
    <img width="24" height="24" src="https://img.icons8.com/ios-glyphs/30/0b8c8c/phone--v1.png" alt="phone--v1"/>
    <img width="24" height="24" src="https://img.icons8.com/ios-glyphs/30/0b8c8c/clock--v1.png" alt="clock--v1"/>
  </div>
  <div className='caja-textos'> 
    <p>Saavedra 1421 (1640) Martínez, <br></br> Buenos Aires, Argentina.</p>
    <a href='mailto:hola@newamenities.com.ar'>hola@newamenities.com.ar</a>
    <p className='telefono'>Cel: +54 911 5911-3940</p>
    <p className='horario'>Horario de atencion: <br></br> Lunes a Viernes de 9 a 17 hs.</p>
    <p className='contactanos'>Contáctanos para descubrir cómo nuestros productos exclusivos <br></br> pueden transformar la experiencia de tus huéspedes y diferenciarte <br></br> de la competencia</p>
    </div> 
  <div className='caja-formcontacto'>
    <form onSubmit={handleSubmit} className='formulario-contacto'>
    <div className='campo-nombre-apellido'>
      <label>
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" className='labelnombre'/>
      </label>
      <label >
        <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} placeholder="Apellido" className='labelapellido'/>
      </label>
      </div>
      <label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Mail" className='labelmail'/>
      </label>
      <label>
        <input type="tel" value={telefono} onChange={(e) => setTelefono(e.target.value)} placeholder="Teléfono" className='labeltelefono'/>
      </label>
      <label>
        <textarea value={mensaje} onChange={(e) => setMensaje(e.target.value)} placeholder="Mensaje" />
      </label>
      <button type="submit" className='botoncontacto'>ENVIAR</button>
    </form>
  </div>   
</nav>  
    <div className='mapa'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3288.480173735294!2d-58.515179100000005!3d-34.4907091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb0514e3bb8db%3A0x4996b5138cdba5df!2sSaavedra%201421%2C%20B1640BZO%20Mart%C3%ADnez%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1sen!2sar!4v1697211785394!5m2!1sen!2sar" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='Mapa' className='mapa2'></iframe>
    </div>
    <div className='logowpp'>
        <a href="https://wa.me/59113940/?text=Hola, como estas?" target="_blank" rel="noreferrer"><img className='whatsapp' width="48" height="48" src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="whatsapp--v1"/></a>
    </div>
    </React.Fragment>
  );
};

export default Contacto;
