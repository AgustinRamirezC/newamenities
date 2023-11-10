import React from "react";
import {Route, Switch} from 'react-router-dom';
import Clientes from"./Paginas/Clientes"
import Contacto from"./Paginas/Contacto"
import Home from"./Paginas/Home"
import Productos from"./Paginas/Productos"
import SobreNosotros from"./Paginas/SobreNosotros"
import Sustentabilidad from"./Paginas/Sustentabilidad"
import Footer from "./Componentes/Footer/Footer"
import Jabones from "./Paginas/Jabones"
import Frascos from "./Paginas/Frascos"
import Amenities from "./Paginas/Amenities"
import Buscador from "./Paginas/Buscador";
import DetalleJabones from './Paginas/DetalleJabones';
import DetalleFrascos from './Paginas/DetalleFrascos';
import DetalleAmenities from './Paginas/DetalleAmenities';
import ScrollToTop from "./Componentes/ScrollTop/ScrollToTop";

function App() {
  return (
        <div className="App">
          <ScrollToTop/>
          <Switch>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/clientes' component={Clientes}/>
          <Route path='/contacto' exact component={Contacto}/>
          <Route path='/productos' exact component={Productos}/>
          <Route path='/sobrenosotros' component={SobreNosotros}/>
          <Route path='/sustentabilidad' exact render={() => <Sustentabilidad isSustentabilidad={true}/>}/>
          <Route path='/jabones' exact component={Jabones}/>
          <Route path='/frascos' exact component={Frascos}/>
          <Route path='/amenities' exact component={Amenities}/>
          <Route path='/buscador' exact component={Buscador}/>
          <Route path="/detallejabones/:id" component={DetalleJabones} />
          <Route path="/detallefrascos/:id" component={DetalleFrascos} />
          <Route path="/detalleamenities/:id" component={DetalleAmenities} />
      </Switch>
      <Footer/>
        </div>
  );
}

export default App;
