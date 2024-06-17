import React, { useState, useEffect, useRef } from "react";
import "./dashboardCamarero.css";
import coffeBanner from "../../assets/img/adopcion/banner.jpg";
import camarero from "../../assets/img/adopcion/camareroCafeteria.jpg";
import { Link } from "react-router-dom";
import { Divider } from "primereact/divider";
import { getReservasDiaHora, cancelarReservasHora } from "../../Servicios/user.service";
import ModalAdopcion from "./Modals/modalAdopcion.js";
import { Dialog } from "primereact/dialog";
import { Toast } from "primereact/toast";
import {
  showSuccessMessage,
  showErrorMessage,
} from "../../Componentes/Toast/toast";

function DashboardCamarero() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [reservas, setReservas] = useState([]);
  const [visibleReserva, setVisibleReserva] = useState(false);

  const toast = useRef(null);

  useEffect(() => {
    const fetchReservas = async () => {
      try {
        const data = await getReservasDiaHora();
        setReservas(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching reservas:", error);
      }
    };

    fetchReservas();

    const checkTime = () => {
      const now = new Date();
      const minutes = now.getMinutes();
      const hours = now.getHours();

      // Habilitar el enlace si es xx:20 y deshabilitarlo si es xx:00 o xx:40
      if (minutes >= 20 && minutes < 60) {
        setIsEnabled(true);
      } else {
        setIsEnabled(false);
      }

      if (minutes === 0) {
        window.location.reload();
      }
    };

    checkTime(); // Verificar la hora al cargar la página

    const interval = setInterval(checkTime, 1000 * 60); // Verificar cada minuto

    return () => clearInterval(interval); // Limpiar el intervalo al desmontar el componente
  }, []);

  const handleCancelarReservas = async () => {
    try {
     const response = await cancelarReservasHora();
      // Aquí puedes agregar cualquier lógica adicional que necesites después de cancelar las reservas.
      console.log("Reservas canceladas con éxito");
      if(response === true){
        showSuccessMessage(toast, "Se han cancelado las reservas");
      }else{
        showErrorMessage(
          toast,
          "No hay reservas que cancelar"
        );
      }
    } catch (error) {
      console.error("Error al cancelar reservas:", error);
    }
  };

  return (
    <>
      <div className="dashboard-camarero pb-5">
        <section
          className="TopBanner"
          style={{ backgroundImage: `url(${coffeBanner})` }}
        ></section>

        <main className="Main container block-padding">
          <section className="row">
            <h2>Dashboard camarero</h2>
            <div className="col">
              <div className="row border-irregular1 block-padding">
                {" "}
                {/* IMG DASHBOARD */}
                <img src={camarero} alt="Camarero"></img>
              </div>
            </div>
            <div className="col">
              <div className="row p-5">
                {" "}
                {/* DASHBOARD BOTONES */}
                <Divider
                  align="left"
                  style={{ backgroundColor: "#FAF9F6" }}
                  className="mb-5"
                >
                  <div className="inline-flex align-items-center divider">
                    <i className="bx bxs-category category"></i>
                    <b>Sistema</b>
                  </div>
                </Divider>
                <div className="buttons">
                  <Link
                    to="/GestionCuenta"
                    className="animated-button"
                    style={{ textDecoration: "none" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="arr-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                    </svg>
                    <span className="text">
                      <i className="bx bxs-calculator"></i>GESTIÓN DE CUENTAS
                    </span>
                    <span className="circle"></span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="arr-1"
                      viewBox="0 0 24 24"
                    >
                      <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                    </svg>
                  </Link>

                  <Link
                    to="/"
                    className={`animated-button ${isEnabled ? "" : "disabled"}`}
                    style={{
                      textDecoration: "none",
                      pointerEvents: isEnabled ? "auto" : "none",
                    }}
                    onClick={handleCancelarReservas}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="arr-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                    </svg>
                    <span className="text">
                      <i className="bx bxs-bell-off"></i>RESERVAS AUSENTES
                    </span>
                    <span className="circle"></span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="arr-1"
                      viewBox="0 0 24 24"
                    >
                      <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                    </svg>
                  </Link>
                  <Toast ref={toast} />

                  <Link
                    
                    className={`animated-button ${
                      reservas.length < 5 || isEnabled ? "" : "disabled"
                    }`}
                    style={{
                      textDecoration: "none",
                      pointerEvents:
                        reservas.length < 5 || isEnabled ? "auto" : "none",
                    }} onClick={() => setVisibleReserva(true)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="arr-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                    </svg>
                    <span className="text">
                      <i className="bx bxs-food-menu"></i>AÑADIR CUENTAS
                    </span>
                    <span className="circle"></span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="arr-1"
                      viewBox="0 0 24 24"
                    >
                      <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                    </svg>
                  </Link>

                  <Link
                    to="/HistorialCuentas"
                    className="animated-button"
                    style={{ textDecoration: "none" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="arr-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                    </svg>
                    <span className="text">
                      <i className="pi pi-address-book"></i>HISTORIAL DE CUENTAS
                    </span>
                    <span className="circle"></span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="arr-1"
                      viewBox="0 0 24 24"
                    >
                      <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                    </svg>
                  </Link>
                  <Dialog
                    header="Crear Nueva Cuenta"
                    visible={visibleReserva}
                    style={{ width: "40vw", height: '100vh' }}
                    onHide={() => {
                      if (!visibleReserva) return;
                      setVisibleReserva(false);
                    }}
                  >
                    <ModalAdopcion></ModalAdopcion>
                  </Dialog>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default DashboardCamarero;
