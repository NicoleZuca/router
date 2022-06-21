import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import Contacto from "./components/Contacto";
import Inicio from "./components/Inicio";
import Nosotros from "./components/Nosotros";
import User from "./components/User";

function App() {
  return (
    <Router>
      <div className="container">
        {/* Se crea el navbar y con el 'to' se indican las rutas a las cuales debe ir cada botón */}
        <div className="btn-group mt-5">
          <Link to="/" className="btn btn-dark">
            Inicio
          </Link>
        </div>
        <div className="btn-group mt-5">
          {/*con el active lo que hace es marcar más oscuro el botón o la opción que elegimos del navbar */}
          <NavLink to="/nosotros" className="btn btn-dark active" >
            Nosotros
          </NavLink>
        </div>
        <div className="btn-group mt-5">
          <Link to="/contacto" className="btn btn-dark">
            Contacto
          </Link>
        </div>
        <hr />
        {/*el exact se utiliza para indicarle que exactamente en esa ruta haga lo que se le indica, si no ponemos el exact no va a leer las demás rutas solo la ruta raíz*/}
        <Routes>
          <Route path="/nosotros/:id" element={<User></User>}></Route>
          <Route path="/contacto" element={ <Contacto></Contacto>}></Route>
          <Route path="/nosotros" element={<Nosotros></Nosotros>}></Route>
          <Route path="/" exact element={<Inicio></Inicio>}></Route>
        </Routes>
      </div>
  </Router>
  );
}

export default App;