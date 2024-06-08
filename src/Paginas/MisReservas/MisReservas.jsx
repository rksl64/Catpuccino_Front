import React, { useEffect, useState, useRef } from "react";
import { getToken, getUserName } from "../../Servicios/Cookies/cookies";
import {
  obtenerReservasUsuario,
  actualizarEstadosReserva,
  cancelarReserva1,
  editarReserva1,
  obtenerConsumicionReserva,
  obtenerAdopcionesPorUsuario,
  obtenerSolicitudesPorUsuario,
} from "../../Servicios/user.service";
import { TabMenu } from "primereact/tabmenu";
import "./MisReservas.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "primeicons/primeicons.css";
import { Calendar } from "primereact/calendar";
import { Toast } from "primereact/toast";
import {
  showSuccessMessage,
  showErrorMessage,
} from "../../Componentes/Toast/toast";
import { PDFDOC } from "../../Utils/pdf";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { useNavigate } from "react-router-dom";

function MisReservas() {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    { label: "Mis reservas" },
    { label: "Mis adopciones" },
    { label: "Mis solicitudes" },
  ];
  const [reservas, setReservas] = useState([]);
  const [adopciones, setAdopciones] = useState([]);
  const [solicitudes, setSolicitudes] = useState([]);
  const [idUsuario, setIdUsuario] = useState(0);
  const [activeItem, setActiveItem] = useState("reservas");
  const [username, setUsername] = useState(getUserName("UserName"));
  const [currentTime, setCurrentTime] = useState(new Date());
  const [modalShow, setModalShow] = useState(false);
  const [confirmationModalShow, setConfirmationModalShow] = useState(false);
  const [reservaIdToCancel, setReservaIdToCancel] = useState(null);
  const [reservaSeleccionada, setReservaSeleccionada] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const id = getToken("ID");
    setIdUsuario(id);
  }, []);

  useEffect(() => {
    const fetchReservas = async () => {
      try {
        if (idUsuario !== 0) {
          const reservas = await obtenerReservasUsuario(idUsuario);
          setReservas(reservas);
        }
      } catch (error) {
        console.error("Error al obtener reservas:", error);
      }
    };

    fetchReservas();
  }, [idUsuario]);

  useEffect(() => {
    const fetchAdopciones = async () => {
      try {
        if (idUsuario !== 0) {
          const adopciones = await obtenerAdopcionesPorUsuario(idUsuario);
          setAdopciones(adopciones);
        }
      } catch (error) {
        console.error("Error al obtener adopciones:", error);
      }
    };

    const fetchSolicitudes = async () => {
      try {
        if (idUsuario !== 0) {
          const solicitudes = await obtenerSolicitudesPorUsuario(idUsuario);
          setSolicitudes(solicitudes);
        }
      } catch (error) {
        console.error("Error al obtener solicitudes:", error);
      }
    };

    fetchAdopciones();
    fetchSolicitudes();
  }, [idUsuario]);

  useInterval(() => {
    actualizarEstadosReserva();
    setCurrentTime(new Date());
  }, 3600000);

  const handleTabChange = (e) => {
    setActiveItem(e.value);
  };

  const handleEditarReserva = (reserva) => {
    setReservaSeleccionada(reserva);
    setModalShow(true);
  };

  const handleCancelarReserva = (reservaId) => {
    setReservaIdToCancel(reservaId);
    setConfirmationModalShow(true);
  };

  const confirmarCancelacion = async () => {
    if (reservaIdToCancel !== null) {
      try {
        await cancelarReserva1(reservaIdToCancel);
        console.log("Reserva cancelada con éxito");
        setConfirmationModalShow(false);
        window.location.reload();
      } catch (error) {
        console.error("Error al cancelar la reserva:", error);
      }
    }
  };

  const navigate = useNavigate();
  const consumicionData = async (id, reserva) => {
    try {
      const response = await obtenerConsumicionReserva(id);
      setData(response);

      // Guardar los datos en el localStorage
      localStorage.setItem("reserva", JSON.stringify(reserva));
      localStorage.setItem("data", JSON.stringify(response));

      // Abrir una nueva pestaña
      const url = `${window.location.origin}/visualizarpdf`;
      window.open(url, "_blank");
    } catch (error) {
      console.error("Error al obtener la reserva:", error);
    }
  };

  return (
    <section className="patata">
      <div className="foto"></div>
      <div className="cabecera">
        <h1>Hola {username}</h1>
        <p>
          ¡Bienvenido a tu centro de gestión!
          <br />
          Aquí puedes consultar todo lo relacionado a tus reservas, tus pedidos
          y el estado de tus adopciones
        </p>
      </div>
      <div>
        <TabMenu
          model={items}
          activeIndex={activeIndex}
          onTabChange={(e) => setActiveIndex(e.index)}
        />

        {activeIndex === 0 && (
          <div className="contenedor">
          <div className="reservas-container">
            {reservas.map((reserva) => (
              <section className="solicitudes-container">
                <div className="tarjeta">
                  <div className="img-data">
                    <div className="data">
                      <h6 className="highlight-p">
                        Reserva para <span>{reserva.nombre_reserva}</span>
                      </h6>
                      <p className="small-text">
                        Hecha por <span>{reserva.usuarioDTO.nombre}</span>
                      </p>
                      <p className="small-text italic">{}</p>
                    </div>
                    <div className="filaFecha">
                      <h6 className="highlight-p">
                        Fecha <span>{reserva.fecha}</span>
                      </h6>
                      <h6 className="highlight-p">
                        Hora <span>{reserva.hora}</span>
                      </h6>
                    </div>
                    <div
                      className={`btn ${getButtonColor(reserva.estadoReserva)}`}
                    >
                      {reserva.estadoReserva}
                    </div>
                    <div className="botoncitos">
                      {" "}
                      {reserva.estadoReserva !== "CANCELADO" &&
                        reserva.estadoReserva !== "AUSENTE" &&
                        reserva.estadoReserva !== "PAGADO" &&
                        new Date(reserva.fecha + " " + reserva.hora) -
                          currentTime >
                          24 * 60 * 60 * 1000 && (
                          <button
                            className="hola"
                            onClick={() => handleCancelarReserva(reserva.id)}
                          >
                            Cancelar reserva
                          </button>
                        )}
                      {reserva.estadoReserva === "PAGADO" &&
                        !reserva.reservaActiva &&
                        reserva.total !== null && (
                          <>
                            <button
                              onClick={() =>
                                consumicionData(reserva.id, reserva)
                              }
                            >
                              Imprimir ticket
                            </button>
                          </>
                        )}
                      {reserva.estadoReserva !== "CANCELADO" &&
                        reserva.estadoReserva !== "AUSENTE" &&
                        reserva.estadoReserva !== "PAGADO" &&
                        new Date(reserva.fecha + " " + reserva.hora) -
                          currentTime >
                          24 * 60 * 60 * 1000 && (
                          <button
                            className="hola"
                            onClick={() => handleEditarReserva(reserva)}
                          >
                            Editar reserva
                          </button>
                        )}
                    </div>
                  </div>
                </div>
                
              </section>
              
            ))}
            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
              reservaSeleccionada={reservaSeleccionada}
            />
            <ConfirmationModal
              show={confirmationModalShow}
              onHide={() => setConfirmationModalShow(false)}
              onConfirm={confirmarCancelacion}
            />
          </div>
          </div>
        )}
        {activeIndex === 1 && (
          <div className="contenedor">
          <div className="reservas-container">
            <tbody>
              {adopciones.map((adopcion) => (
                <section className="solicitudes-container">
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
                        <p className="small-text italic">
                          Sexo:{" "}
                          <span>
                            {" "}
                            <i
                              className={`pi ${
                                adopcion.gatoDTO.sexo === "MACHO"
                                  ? "pi-mars"
                                  : "pi-venus"
                              }`}
                            ></i>
                          </span>
                          {}
                        </p>
                      </div>
                      <div className="botonSolicitud">
                        <button>Cancelar solicitud</button>
                      </div>
                    </div>
                  </div>
                </section>
              ))}
            </tbody>
          </div>
          </div>
        )}
        {activeIndex === 2 && (
          <div className="contenedor">
          <div className="reservas-container">
            <tbody>
              {solicitudes.map((solicitud) => (
                <section className="solicitudes-container">
                  <div className="tarjeta">
                    <div className="img-data">
                      <img className="img" src={solicitud.gatoDTO.imagen}></img>
                      <div className="data">
                        <h6 className="highlight-p">
                          Solicitud para adoptar a{" "}
                          <span>{solicitud.gatoDTO.nombre}</span>
                        </h6>
                        <p className="small-text">
                          Hecha por <span>{solicitud.usuarioDTO.nombre}</span>
                        </p>
                        <p className="small-text italic">{solicitud.titulo}</p>
                      </div>
                    </div>

                    <div className="status-aceptados">
                      <div
                        className={`btn ${getButtonColor2(
                          solicitud.estadoSolicitud
                        )}`}
                      >
                        {solicitud.estadoSolicitud}
                      </div>
                    </div>
                  </div>
                </section>
              ))}
            </tbody>
          </div>
          </div>
        )}
      </div>
    </section>
  );
}
function getButtonColor(estadoReserva) {
  switch (estadoReserva) {
    case "AUSENTE":
      return "btn-danger";
    case "ACTIVO":
      return "btn-warning";
    default:
      return "btn-success";
    case "CANCELADO":
      return "btn-secondary";
  }
}

function getButtonColor2(estadoSolicitud) {
  switch (estadoSolicitud) {
    case "RECHAZADO":
      return "btn-danger";
    case "PENDIENTE":
      return "btn-warning";
    case "ACEPTADO":
      return "btn-success";
  }
}

function MyVerticallyCenteredModal({ show, onHide, reservaSeleccionada }) {
  const [hora, setHora] = useState("null");
  const [fecha, setFecha] = useState("");
  const [reserva, setReserva] = useState({
    id: 0,
    nombre_reserva: "",
    telefono: 0,
    numeroPersonas: 1,
  });
  const toast = useRef(null);

  useEffect(() => {
    if (reservaSeleccionada) {
      setReserva({
        id: reservaSeleccionada.id,
        nombre_reserva: reservaSeleccionada.nombre_reserva,
        telefono: reservaSeleccionada.telefono,
        numeroPersonas: reservaSeleccionada.numeroPersonas,
      });
      setFecha(reservaSeleccionada.fecha);
      setHora(reservaSeleccionada.hora);
    }
  }, [reservaSeleccionada]);

  const handleHoraChange = (e) => {
    setHora(e.target.value);
  };

  const handleFechaChange = (e) => {
    const nuevaFecha = new Date(e.target.value);
    const year = nuevaFecha.getFullYear();
    const month = String(nuevaFecha.getMonth() + 1).padStart(2, "0");
    const day = String(nuevaFecha.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;
    setFecha(formattedDate);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setReserva({ ...reserva, [name]: value });
  };

  const reservaId = parseInt(getToken("ID"));
  const onSubmitReserva = async (idReserva) => {
    console.log(reserva);
    console.log("id reserva", idReserva);
    try {
      const response = await editarReserva1(
        idReserva,
        reserva.nombre_reserva,
        reserva.telefono,
        fecha,
        hora,
        parseInt(reserva.numeroPersonas)
      );
      console.log(response, "hola soy un mensaje");
      if (response === true) {
        showSuccessMessage(toast, "Se ha modificado la reserva");
      } else {
        showErrorMessage(
          toast,
          "No hay disponibilidad horaria, se han modificado los demás campos"
        );
      }
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Editar reserva
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <input
            type="text"
            name="nombre_reserva"
            value={reserva.nombre_reserva}
            onChange={handleInputChange}
            className="form-control"
            placeholder="Nombre de la persona reservante"
          />
          <input
            type="number"
            name="telefono"
            value={reserva.telefono}
            onChange={handleInputChange}
            className="form-control"
            placeholder="Teléfono"
          />
          <input
            type="date"
            value={fecha}
            onChange={handleFechaChange}
            className="form-control"
          />
          <select
            value={hora}
            onChange={handleHoraChange}
            className="form-control"
          >
            <option value="null">Selecciona hora</option>
            <option value="09:00:00">09:00</option>
            <option value="10:00:00">10:00</option>
            <option value="11:00:00">11:00</option>
            <option value="12:00:00">12:00</option>
            <option value="13:00:00">13:00</option>
            <option value="14:00:00">14:00</option>
            <option value="16:00:00">16:00</option>
            <option value="17:00:00">17:00</option>
            <option value="18:00:00">18:00</option>
            <option value="19:00:00">19:00</option>
          </select>
          <input
            type="number"
            name="numeroPersonas"
            value={reserva.numeroPersonas}
            onChange={handleInputChange}
            className="form-control"
            placeholder="Número de personas"
          />
          <button
            type="button"
            onClick={() => onSubmitReserva(reserva.id)}
            className="btn btn-primary"
          >
            Enviar
          </button>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cerrar
        </Button>
      </Modal.Footer>
      <Toast ref={toast} />
    </Modal>
  );
}
function ConfirmationModal({ show, onHide, onConfirm }) {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Confirmación</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        ¿Estás seguro de que deseas cancelar esta reserva?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cerrar
        </Button>
        <Button variant="danger" onClick={onConfirm}>
          Cancelar reserva
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function useInterval(callback, delay) {
  const savedCallback = React.useRef();

  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  React.useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default MisReservas;
