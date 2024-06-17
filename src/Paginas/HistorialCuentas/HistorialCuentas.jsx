import React, { useEffect, useState } from "react";
import { FilterButton, TopBanner } from "./listarReserva-style";
import pawsBanner from "../../assets/img/adopcion/banner.jpg";
import { obtenerReservasPagadas } from "../../Servicios/user.service";
import "./listarReserva.css";

function HistorialCuentas() {
  const [listaReservas, setReservas] = useState([]);
  const [fecha, setFecha] = useState("");

  useEffect(() => {
    obtenerReservas();
    obtenerFecha();
  }, []);

  function obtenerFecha() {
    const nuevaFecha = new Date();
    const year = nuevaFecha.getFullYear();
    const month = String(nuevaFecha.getMonth() + 1).padStart(2, '0');
    const day = String(nuevaFecha.getDate()).padStart(2, '0');
    const formattedDate = `${day}/${month}/${year}`;
    setFecha(formattedDate);
  }

  async function obtenerReservas() {
    try {
      const reservas = await obtenerReservasPagadas();
      console.log(reservas);
      // Asegúrate de que reservas es un array
      if (Array.isArray(reservas)) {
        setReservas(reservas);
      } else {
        console.error("obtenerReservasPagadas no devolvió un array");
      }
    } catch (error) {
      console.error("Error al obtener reservas:", error);
    }
  }

  const getStatusClass = (estado) => {
    switch (estado) {
      case "PAGADO":
        return "status-aceptadoS";
      case "CANCELADO":
        return "status-rechazadoS";
      case "AUSENTE":
        return "status-pendienteS";
      case "ACTIVO":
        return "status-activoS";
      default:
        return "";
    }
  };

  return (
    <>
      <TopBanner style={{ backgroundImage: `url(${pawsBanner})` }}></TopBanner>
      <div className="gestion-gatos">
        <main className="container">
          <h1>Historial de Cuentas</h1>
          <p>Estas son todas las cuentas que han llegado a Catpuccino el día {fecha}</p>
          <div className="padding"></div>
          {listaReservas.map((reservas) => (
            <section className="card mb-4" key={reservas.id}>
              <div className="tarjeta">
                <div className="img-data">
                  <div className="data">
                    <h6 className="highlight-p">
                      Reserva a nombre de: <span>{reservas.nombre_reserva}</span>
                    </h6>
                    <p className="small-text">
                      Hecha por <span>{reservas.nombre_reserva}</span>
                    </p>
                    <p className="small-text italic">
                      Fecha de la reserva: {fecha}
                      <br />
                      Hora de la reserva: {reservas.hora}
                    </p>
                  </div>
                </div>
                <div className={`status ${getStatusClass(reservas.estadoReserva)}`}>
                  <p>{reservas.estadoReserva}</p>
                </div>
              </div>
            </section>
          ))}
        </main>
      </div>
    </>
  );
}

export default HistorialCuentas;
