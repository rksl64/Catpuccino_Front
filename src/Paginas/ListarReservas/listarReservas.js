import React, { useEffect, useState } from "react";
import { FilterButton, TopBanner } from "./listarReserva-style";
import pawsBanner from "../../assets/img/adopcion/banner.jpg";
import { obtenerReservas } from "../../Servicios/user.service";
import "./listarReserva.css";

function ListarReservas() {
  const [listaReservas, setReservas] = useState([]);
  const [filtro, setFiltro] = useState("todos");

  const handleFiltroClick = (nuevoFiltro) => {
    setFiltro((filtroActual) =>
      filtroActual === nuevoFiltro ? "todos" : nuevoFiltro
    );
  };

  useEffect(() => {
    // Obtener todas las solicitudes
    obtenerReservas()
      .then((data) => {
        setReservas(data);
      })
      .catch((error) => {
        console.error("Ops, un error", error);
      });
  }, []);

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
    }
  };

  return (
    <>
      <TopBanner style={{ backgroundImage: `url(${pawsBanner})` }}></TopBanner>
      <div className="gestion-gatos">
        <main className="container">
          <h1>Historial de Reservas</h1>
          <p>Estos son todas las Reservas que han llegado a Catpuccino</p>
          <div className="padding">
            <FilterButton
              active={filtro == "pagado"}
              onClick={() => handleFiltroClick("pagado")}
            >
              Pagadas
            </FilterButton>
            <FilterButton
              active={filtro == "cancelado"}
              onClick={() => handleFiltroClick("cancelado")}
            >
              Cancelados
            </FilterButton>
            <FilterButton
              active={filtro == "ausente"}
              onClick={() => handleFiltroClick("ausente")}
            >
              Ausente
            </FilterButton>
            <FilterButton
              active={filtro == "activo"}
              onClick={() => handleFiltroClick("activo")}
            >
              Activo
            </FilterButton>
          </div>
          {listaReservas
            .filter(
              (reservas) =>
                filtro === "todos" ||
                reservas.estadoReserva.toLowerCase() === filtro
            )
            .map((reservas) => (
              <section className="card mb-4" key={reservas.id}>
                <div className="tarjeta">
                  <div className="img-data">
                    <div className="data">
                      <h6 className="highlight-p">
                        Reserva a nombre de: <span>{reservas.nombre_reserva}</span>
                      </h6>
                      <p className="small-text">
                        Hecha por <span>{reservas.usuarioDTO.nombre}</span>
                      </p>
                      <p className="small-text italic">
                        Fecha de la reserva: {reservas.fecha}
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

export default ListarReservas;
