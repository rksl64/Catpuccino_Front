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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Registro" element={<Registro />}></Route>
        <Route path="/Reserva" element={<Reserva />}></Route>
        <Route path="/Productos" element={<Producto />}></Route>
        <Route path="/Consumiciones" element={<Consumiciones />}></Route>
        <Route path="*" element={<Error />}></Route>
        <Route path="/Adopcion" element={<Adopcion />}></Route>
        <Route path="/Gatoinfo" element={<GatoInfo />}></Route>
      </Routes>
    </Router>
  );
}

export default AppConsumerHOC(App);
