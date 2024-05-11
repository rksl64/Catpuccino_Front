import React, { useEffect, useState } from "react";
import { getToken, getUserName } from "../../Servicios/Cookies/cookies";
import {
  obtenerReservasUsuario,
  actualizarEstadosReserva,
  cancelarReserva1
} from "../../Servicios/user.service"; 
import { TabMenu } from "primereact/tabmenu";
import "./MisReservas.css";
import userService from "../../Servicios/user.service";

// Función para ejecutar un efecto repetidamente con un intervalo de tiempo especificado
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

function MisReservas() {
  const [reservas, setReservas] = useState([]);
  const [idUsuario, setIdUsuario] = useState(0);
  const [activeItem, setActiveItem] = useState("reservas");
  const [username, setUsername] = useState(getUserName("UserName"));
  const [currentTime, setCurrentTime] = useState(new Date());

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
    setCurrentTime(new Date()); // Actualizar la hora actual
  }, 3600000);

  const handleTabChange = (e) => {
    setActiveItem(e.value);
  };

  const cancelarReserva = async (reservaId) => {
    try {
      await cancelarReserva1(reservaId)
      console.log('Reserva cancelada con éxito');
      window.location.reload();
    } catch (error) {
      console.error('Error al cancelar la reserva:', error);
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
                  <td className="fila">Reserva a nombre de: {reserva.nombre_reserva}</td>
                  <td className="fila1">
                    Fecha de la reserva: {reserva.fecha}<br />
                    Hora de la reserva: {reserva.hora}
                  </td>
                  <td className="fila2">
                    <div className={`btn ${getButtonColor(reserva.estadoReserva)}`}>
                      {reserva.estadoReserva}
                    </div>
                  </td>
                  <td className="fila1"> 
                    {reserva.estadoReserva !== "CANCELADA" && 
                      reserva.estadoReserva !== "AUSENTE" && 
                      new Date(reserva.fecha + ' ' + reserva.hora) - currentTime > 24 * 60 * 60 * 1000 && 
                      <button className="hola" onClick={() => cancelarReserva(reserva.id)}>Cancelar reserva</button>
                    }
                     {reserva.estadoReserva === "PAGADO" && !reserva.reservaActiva && reserva.total !== null && 
                      <button className="imprimir" >Imprimir ticket</button>
                    }
                    {/* Otros botones */}
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

// Función para obtener el color del botón según el estado de reserva
function getButtonColor(estadoReserva) {
  switch (estadoReserva) {
    case "AUSENTE":
      return "btn-danger";
    case "PENDIENTE":
      return "btn-warning";
    default:
      return "btn-success";
  }
}

export default MisReservas;
