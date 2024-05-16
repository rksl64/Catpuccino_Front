import React, { useEffect, useState } from "react";
import { getToken, getUserName } from "../../Servicios/Cookies/cookies";
import {
  obtenerReservasUsuario,
  actualizarEstadosReserva,
  cancelarReserva1,
  editarReserva1,
} from "../../Servicios/user.service";
import { TabMenu } from "primereact/tabmenu";
import "./MisReservas.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import 'primeicons/primeicons.css';
import { Calendar } from 'primereact/calendar';

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

function MyVerticallyCenteredModal(props) {
  const [hora, setHora] = useState("null");
  const [fecha, setFecha] = useState("");
  const handleHoraChange = (e) => {
    setHora(e.target.value);
  };

  const handleFechaChange = (e) => {
    const nuevaFecha = new Date(e.target.value);
    const year = nuevaFecha.getFullYear();
    const month = String(nuevaFecha.getMonth() + 1).padStart(2, '0');
    const day = String(nuevaFecha.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    setFecha(formattedDate);
  };

  const [reserva, setReserva] = useState({
    nombre_reserva: "",
    telefono: 0,
    numeroPersonas: 1,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setReserva({ ...reserva, [name]: value });
  };

  const reservaId = parseInt(getToken("ID"));
  const onSubmitReserva = async () => {
    console.log(reserva);
    try {
      const response = await editarReserva1(
        reservaId,
        reserva.nombre_reserva,
        reserva.telefono,
        fecha,
        hora,
        parseInt(reserva.numeroPersonas)
      );
      console.log(response);
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  };

  return (
    <Modal 
      {...props}
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
        <h4>Edita tu reserva</h4>
        <p>
          <form>
            <input
              type="text"
              name="nombre_reserva"
              onChange={handleInputChange}
              className="form-control"
              placeholder="Nombre de la persona reservante"
            />
            <input
              type="number"
              name="telefono"
              onChange={handleInputChange}
              className="form-control"
              placeholder="telefono"
            />
            <input type="date" value={fecha} onChange={handleFechaChange} />
            <select
              value={hora}
              onChange={handleHoraChange}
              className="search-input holi"
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
              onChange={handleInputChange}
              className="form-control"
              placeholder="Número personas"
            />
            <button type="button" onClick={onSubmitReserva}>Enviar</button>
          </form>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
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
        <Button variant="secondary" onClick={onHide}>Cerrar</Button>
        <Button variant="primary" onClick={onConfirm}>Cancelar reserva</Button>
      </Modal.Footer>
    </Modal>
  );
}

function MisReservas() {
  const [reservas, setReservas] = useState([]);
  const [idUsuario, setIdUsuario] = useState(0);
  const [activeItem, setActiveItem] = useState("reservas");
  const [username, setUsername] = useState(getUserName("UserName"));
  const [currentTime, setCurrentTime] = useState(new Date());
  const [modalShow, setModalShow] = useState(false);
  const [confirmationModalShow, setConfirmationModalShow] = useState(false);
  const [reservaIdToCancel, setReservaIdToCancel] = useState(null);

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

  useInterval(() => {
    actualizarEstadosReserva();
    setCurrentTime(new Date());
  }, 3600000);

  const handleTabChange = (e) => {
    setActiveItem(e.value);
  };

  const handleEditarReserva = () => {
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

  return (
    <section className="patata">
      <section className="cabecera">
        <h1>Hola {username}</h1>
        <p>
          ¡Bienvenido a tu centro de gestión!
          <br />
          Aquí puedes consultar todo lo relacionado a tus reservas, tus pedidos
          y el estado de tus adopciones
        </p>
      </section>
      <TabMenu
        model={tabItems}
        activeItem={activeItem}
        onTabChange={handleTabChange}
      />
      {activeItem === "reservas" && (
        <div className="reservas-container">
          <table className="reserva-table">
            <tbody>
              {reservas.map((reserva) => (
                <tr key={reserva.id} className="reserva-item">
                  <td className="fila">
                    Reserva a nombre de: {reserva.nombre_reserva}
                  </td>
                  <td className="fila1">
                    Fecha de la reserva: {reserva.fecha}
                    <br />
                    Hora de la reserva: {reserva.hora}
                  </td>
                  <td className="fila2">
                    <div
                      className={`btn ${getButtonColor(reserva.estadoReserva)}`}
                    >
                      {reserva.estadoReserva}
                    </div>
                  </td>
                  <td className="fila1">
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
                        <button className="imprimir">Imprimir ticket</button>
                      )}
                    {reserva.estadoReserva !== "CANCELADO" &&
                      reserva.estadoReserva !== "AUSENTE" &&
                      reserva.estadoReserva !== "PAGADO" &&
                      new Date(reserva.fecha + " " + reserva.hora) -
                        currentTime >
                        24 * 60 * 60 * 1000 && (
                        <button className="hola" onClick={handleEditarReserva}>
                          Editar reserva
                        </button>
                      )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {activeItem === "pedidos" && (
        <div>{/* Aquí iría el contenido de Pedidos Procesados */}</div>
      )}
      {activeItem === "adopcion" && (
        <div>{/* Aquí iría el contenido de Solicitudes de Adopción */}</div>
      )}
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <ConfirmationModal
        show={confirmationModalShow}
        onHide={() => setConfirmationModalShow(false)}
        onConfirm={confirmarCancelacion}
      />
    </section>
  );
}

const tabItems = [
  { label: "Reservas", icon: "pi pi-calendar", value: "reservas" },
  {
    label: "Pedidos Procesados",
    icon: "pi pi-shopping-cart",
    value: "pedidos",
  },
  { label: "Solicitudes de Adopción", icon: "pi pi-users", value: "adopcion" },
];

function getButtonColor(estadoReserva) {
  switch (estadoReserva) {
    case "AUSENTE":
      return "btn-danger";
    case "PENDIENTE":
      return "btn-warning";
    default:
      return "btn-success";
    case "CANCELADO":
      return "btn-secondary";
  }
}

export default MisReservas;
