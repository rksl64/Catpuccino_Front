import React, { useState } from "react";
import "./App.css";
import Inicio from "./Paginas/Inicio/inicio";
import Reserva from "./Paginas/Reserva/Reserva";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./Paginas/Login/login";
import { AppConsumerHOC } from "./contexts/app.context";
import Registro from "./Paginas/Registro/registro";
import Error from "./Paginas/Error/error";
import Producto from "./Paginas/Productos/producto";
import Consumiciones from "./Paginas/Consumiciones/consumiciones";
import Adopcion from "./Paginas/Adopcion/adopcion";
import GatoInfo from "./Paginas/GatoInfo/gatoInfo";
import CarruselGatos from "./Componentes/CarruselGatos/carruselGatos";
import Formulario from "./Componentes/Formulario/formulario";
import Navbar from "./Componentes/Navbar/navbar";
import Footer from "./Componentes/Footer/footer";
import GestionGatos from "./Paginas/GestionGatos/gestionGatos";
import DashboardGestorGatos from "./Paginas/DashboardGestorGatos/dashboardGestorGatos";
import SolicitudAdopciones from "./Paginas/SolicitudesAdopcion/solicitudesAdopcion";
import { useRef } from "react";

import { Toast } from 'primereact/toast';
import MisReservas from "./Paginas/MisReservas/MisReservas";
import Spinner from "./Componentes/Spinner/spinner";

function App() {

  const[activo,setActivo]=useState(true)
  const toast = useRef(null);

  return (
    <>
    {activo && <Navbar />}
    <Router>
       <Toast ref={toast} />
      <Routes>
        <Route path="/" element={<Inicio />}></Route>
        <Route path="/Login" element={<Login setActivo={setActivo}/>}></Route>
        <Route path="/Registro" element={<Registro setActivo={setActivo}/>}></Route>
        <Route path="/" element={<Inicio toast={toast} />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Registro" element={<Registro />}></Route>
        <Route path="/Reserva" element={<Reserva />}></Route>
        <Route path="/Productos" element={<Producto />}></Route>
        <Route path="/Consumiciones" element={<Consumiciones />}></Route>
        <Route path="*" element={<Error />}></Route>
        <Route path="/Adopcion" element={<Adopcion />}></Route>
        <Route path="/Gatoinfo/:id" element={<GatoInfo toast={toast}/>}></Route>
        <Route path="/FormularioGatos" element={<Formulario toast={toast}/>}></Route>
        <Route path="/GestionGatos" element={<GestionGatos toast={toast}/>}></Route>
        <Route path="/MisReservas" element={<MisReservas/>}></Route>
        <Route path="/spinner" element={<Spinner />}></Route>
        <Route path="/DashboardGatos" element={<DashboardGestorGatos/>}></Route>
        <Route path="/SolicitudesAdopcion" element={<SolicitudAdopciones/>}></Route>

        <Route path="/carrusel" element={<CarruselGatos />}></Route>
      </Routes>
    </Router>
    {activo && <Footer />}
    </>
  );
}

export default AppConsumerHOC(App);
