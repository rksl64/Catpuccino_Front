import React, { useEffect, useState } from "react";
import {
  FilterButton,
  TopBanner,
} from "./listarAdopSoli-style";
import pawsBanner from "../../assets/img/adopcion/pawsBanner.jpg";
import { TabMenu } from "primereact/tabmenu";
import {
  getAllSolicitudes,
  getAllAdopciones,
} from "../../Servicios/user.service";
import "./listarAdopSoli.css";
import { format } from 'date-fns';

function ListarAdopSoli() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [listaSolicitudes, setSolicitudes] = useState([]);
  const [filtro, setFiltro] = useState("todos");
  const [listaAdopciones, setAdopciones] = useState([]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return format(date, 'dd/MM/yyyy \'a las\' HH:mm');
};

  // Manejar el clic en los botones de filtro para las solicitudes
  const handleFiltroClick = (nuevoFiltro) => {
    setFiltro((filtroActual) =>
      filtroActual === nuevoFiltro ? "todos" : nuevoFiltro
    );
  };

  useEffect(() => {
    // Obtener todas las solicitudes
    getAllSolicitudes()
      .then((data) => {
        setSolicitudes(data);
      })
      .catch((error) => {
        console.error("Ops, un error", error);
      });

    // Obtener todas las adopciones
    getAllAdopciones()
      .then((data) => {
        setAdopciones(data);
      })
      .catch((error) => {
        console.error("Ops, un error", error);
      });
  }, []);

  const getStatusClass = (estado) => {
    switch (estado) {
      case "ACEPTADO":
        return "status-aceptado";
      case "RECHAZADO":
        return "status-rechazado";
      case "PENDIENTE":
        return "status-pendiente";
    }
  };

  const items = [
    { label: "Solicitudes", icon: "pi pi-fw pi-home" },
    { label: "Adopción", icon: "pi pi-fw pi-calendar" },
  ];

  return (
    <>
      <TopBanner style={{ backgroundImage: `url(${pawsBanner})` }}></TopBanner>
      <TabMenu
        model={items}
        activeIndex={activeIndex}
        onTabChange={(e) => setActiveIndex(e.index)}
      />
      {activeIndex === 0 ? (
        <>
          <body className="gestion-gatos">
            <main className="container">
              <h1>Historial de solicitudes</h1>
              <p>
                Estos son todas las solicitudes que han llegado a Catpuccino
              </p>
              <div className="padding">
                <FilterButton
                  active={filtro === "aceptado"}
                  onClick={() => handleFiltroClick("aceptado")}
                >
                  Aceptadas
                </FilterButton>
                <FilterButton
                  active={filtro === "rechazado"}
                  onClick={() => handleFiltroClick("rechazado")}
                >
                  Rechazadas
                </FilterButton>
                <FilterButton
                  active={filtro === "pendiente"}
                  onClick={() => handleFiltroClick("pendiente")}
                >
                  Pendientes
                </FilterButton>
              </div>
              {listaSolicitudes
                .filter(
                  (solicitud) =>
                    filtro === "todos" ||
                    solicitud.estadoSolicitud.toLowerCase() === filtro
                )
                .map((solicitud) => (
                  <section className="card mb-4" key={solicitud.id}>
                    <div className="tarjeta">
                      <div className="img-data">
                        <img
                          className="img"
                          src={solicitud.gatoDTO.imagen}
                        ></img>
                        <div className="data">
                          <h6 className="highlight-p">
                            Solicitud para adoptar a{" "}
                            <span>{solicitud.gatoDTO.nombre}</span>
                          </h6>
                          <p className="small-text">
                            Hecha por <span>{solicitud.usuarioDTO.nombre}</span>
                          </p>
                          <p className="small-text italic">
                            {solicitud.titulo}
                          </p>
                        </div>
                      </div>

                      <div
                        className={`status ${getStatusClass(
                          solicitud.estadoSolicitud
                        )}`}
                      >
                        <p>{solicitud.estadoSolicitud}</p>
                      </div>
                    </div>
                  </section>
                ))}
            </main>
          </body>
        </>
      ) : (
        <>
          <body className="gestion-gatos">
            <main className="container">
              <h1>Historial de Adopciones</h1>
              <p>
                Estos son todas las adopciones que han llegado a Catpuccino
              </p>

              {listaAdopciones.map((adopcion) => (
                <section className="card mb-4" key={adopcion.id}>
                  <div className="tarjeta">
                    <div className="img-data">
                      <img className="img" src={adopcion.gatoDTO.imagen}></img>
                      <div className="data">
                        <h6 className="highlight-p">
                          Solicitud para adoptar a{" "}
                          <span>{adopcion.gatoDTO.nombre}</span>
                        </h6>
                        <p className="small-text">
                          Hecha por <span>{adopcion.usuarioDTO.nombre}</span>
                        </p>
                        <p className="small-text italic">Fue adoptado el {formatDate(adopcion.fecha)}</p>
                      </div>
                    </div>
                  </div>
                </section>
              ))}
            </main>
          </body>
        </>
      )}
    </>
  );
}

export default ListarAdopSoli;
