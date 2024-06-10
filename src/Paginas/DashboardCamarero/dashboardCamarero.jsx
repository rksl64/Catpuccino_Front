import React, { useState, useEffect } from "react";
import "./dashboardCamarero.css";
import coffeBanner from "../../assets/img/adopcion/banner.jpg";
import camarero from "../../assets/img/adopcion/camareroCafeteria.jpg";
import { Link } from "react-router-dom";
import { Divider } from "primereact/divider";
import { getReservasDiaHora, cancelarReservasHora } from "../../Servicios/user.service";

function DashboardCamarero() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [reservas, setReservas] = useState([]);

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

  return (
    <>
      <body className="dashboard-camarero pb-5">
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
                    to="/"
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

                  <Link
                    to="/SolicitudesAdopcion"
                    className={`animated-button ${
                      reservas.length < 5 || isEnabled ? "" : "disabled"
                    }`}
                    style={{
                      textDecoration: "none",
                      pointerEvents:
                        reservas.length < 5 || isEnabled ? "auto" : "none",
                    }}
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
                    to="/HistorialSolicitudes"
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
                </div>
              </div>
            </div>
          </section>
        </main>
      </body>
    </>
  );
}

export default DashboardCamarero;
