import React, { useEffect, useState } from "react";
import { TopBanner, FormBtn } from "./listarReserva-style";
import pawsBanner from "../../assets/img/adopcion/banner.jpg";
import { getReservasDiaHora, PagarCuenta } from "../../Servicios/user.service";
import { Dialog } from "primereact/dialog";
import ModalAdopcion from "./Modals/modalAdopcion.js";
import "./listarReserva.css";

function GestionCuentas() {
  const [listaReservas, setReservas] = useState([]);
  const [fecha, setFecha] = useState("");
  const [visibleReserva, setVisibleReserva] = useState(false);

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
      const reservas = await getReservasDiaHora();
      setReservas(reservas);
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

  const handleDoubleClick = () => {
    setVisibleReserva(true);
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
            <section className="card mb-4" key={reservas.id}  onDoubleClick={() => handleDoubleClick()}>
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
                      Fecha de la reserva: {fecha}
                      <br />
                      Hora de la reserva: {reservas.hora}
                    </p>
                  </div>
                </div>
                  <FormBtn className="form-btn"  onClick={ () => PagarCuenta(reservas.id)}>
                    Finalizar la Cuenta
                  </FormBtn>
              </div>
              <Dialog
                    className="dialog"
                    header="Añadir a la Cuenta"
                    visible={visibleReserva}
                    style={{ width: "40vw", height: '100vh' }}
                    onHide={() => {
                      if (!visibleReserva) return;
                      setVisibleReserva(false);
                    }}
                  >
                    <ModalAdopcion id={reservas.usuarioDTO.id}></ModalAdopcion>
              </Dialog>
            </section>
            
          ))}
        </main>
      </div>
    </>
  );
}

export default GestionCuentas;
