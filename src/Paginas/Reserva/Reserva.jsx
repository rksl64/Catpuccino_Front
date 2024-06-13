import React, { useState, useEffect, useRef } from "react";
import userService from "../../Servicios/user.service";
import "./Reserva.css";
import 'primeicons/primeicons.css';
import { Calendar } from 'primereact/calendar';
import { getToken } from "../../Servicios/Cookies/cookies";
import { HacerReserva } from "../../Servicios/user.service";
import { format } from "date-fns";
import { showSuccessMessage, showErrorMessage, } from "../../Componentes/Toast/toast";
import { Toast } from "primereact/toast";


function Reserva() {
  const tab = <>&nbsp;&nbsp;&nbsp;&nbsp;</>;

  const [hora, setHora] = useState("null");
  const [fecha, setFecha] = useState("");
  const [puedoBuscar, setPuedoBuscar] = useState(false);
  const [horasDisponibles, setHorasDisponibles] = useState([]);
  const [horanull, setHoranull] = useState(false);
  const [fechanull, setFechanull] = useState(false);
  const [prueba1, setprueba1] = useState(false);
  const inputRef = useRef(null);
  const [activeTab, setActiveTab] = useState(1);
  const toast = useRef(null);
  const [reserva, setReserva] = useState({
    
  nombre_reserva: "",
  telefono: 0,
  numeroPersonas: 1,
  estadoReserva: 0,
  reserva_activa: true,
  pagado: false,
  total: 0,
  usuarioDTO: {
    id: parseInt(getToken("ID"))
  }
  });

  const onSubmitReserva = async () => {
    console.log(reserva);
    try {
      const response = await HacerReserva(
        reserva.nombre_reserva,
        reserva.telefono,
        fecha,
        hora,
        parseInt(reserva.numeroPersonas),
        reserva.estadoReserva,
        reserva.reserva_activa,
        reserva.pagado,
        reserva.total,
        reserva.usuarioDTO
      );
      console.log(response);
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  };


  const handleTabChange = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const handleHoraChange = (e) => {
    setHora(e.target.value);
  };

  const handleFechaChange = (e) => {
    // Obtener la fecha seleccionada
    const selectedDate = e.value;
    
    // Formatear la fecha en el formato yyyy-MM-dd
    const formattedDate = format(selectedDate, "yyyy-MM-dd");
    
    // Establecer la fecha formateada en el estado
    setFecha(formattedDate);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setReserva({ ...reserva, [name]: value });
  };


  useEffect(() => {
    setPuedoBuscar(hora !== "null" || fecha !== "");
    const inputElement = inputRef.current;
    if (!inputElement) {
      return; 
     // Salir si el ref no apunta a ningún elemento
    }

    const handleMinValue = () => {
      if (parseInt(inputElement.value) < 1) {
        inputElement.value = 1;
      }
    };

    const handleClick = () => {
      if (inputElement.value === '') {
        inputElement.value = 1;
      }
    };

    inputElement.addEventListener('input', handleMinValue);
    inputElement.addEventListener('click', handleClick);

    return () => {
      inputElement.removeEventListener('input', handleMinValue);
      inputElement.removeEventListener('click', handleClick);
    };

  }, [hora, fecha]);

  const onSearch = async () => {
    try {
      let response;
      let bool = false;
      // Realizar la búsqueda basado en los valores de hora y fecha
      if (hora !== "null" && fecha !== "") {
        response = await userService.Search(hora, fecha);
        setHorasDisponibles(response);
        bool = response[0];
        const nuevaFecha = new Date(fecha);
        const year = nuevaFecha.getFullYear();
        const month = String(nuevaFecha.getMonth() + 1).padStart(2, '0');
        const day = String(nuevaFecha.getDate()).padStart(2, '0');
        const formattedDate = `${year}-${month}-${day}`;
        setFecha(formattedDate);
        if (bool === false) {
          showErrorMessage(
            toast,
            response[1]
          );
        }

      } else if (hora === "null" && fecha !== "") {
        response = await userService.Search(hora, fecha);
        setHorasDisponibles(response);
        bool = response[0];
        const nuevaFecha = new Date(fecha);
        const year = nuevaFecha.getFullYear();
        const month = String(nuevaFecha.getMonth() + 1).padStart(2, '0');
        const day = String(nuevaFecha.getDate()).padStart(2, '0');
        const formattedDate = `${year}-${month}-${day}`;
        setFecha(formattedDate);
        setFecha("");

      } else if (hora !== "null" && fecha === "") {
        response = await userService.Search(hora, fecha);
        setHorasDisponibles(response);
      }
      // En este punto, puedes establecer los estados horanull y fechanull según corresponda
      setHoranull(hora === "null");
      setFechanull(fecha === "");
      setprueba1(bool === true);

    } catch (error) {
      console.error("Error:", error);
      // Manejar el error de acuerdo a tus necesidades
    }
  };
  

  return (
    <section className="reserva">
      <section></section>
      <div className="search-container">
        <div className="search-box">
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
        </div>
        <div className="search-box">
          <Calendar className="search-input" value={fecha} onChange={handleFechaChange} dateFormat="dd/mm/yy" placeholder={fecha ? fecha : "Selecciona Fecha"} />
        </div>
        <button className="search-btn" raised
          disabled={!puedoBuscar}
          onClick={onSearch}
        >
          Buscar
        </button>
      </div>
      <Toast ref={toast} />
      <div className="content">
        {horanull && !fechanull && (
          <div className="default-container">
            <table className="default">
              <tbody>
                {horasDisponibles.map((hora, index) => (
                  <tr key={index}>
                    <th>{hora[0]}</th>
                    <td className={`${getButtonColor(hora[1])}`}>{hora[1] ? "Hora disponible" : "Hora no disponible"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {!horanull && fechanull && (
          <div className="default-container">
             <table className="default">
              <tbody>
                {horasDisponibles.map((horita, index) => (
                  <tr key={index}>
                    <th>{horita[1]}</th>
                    <td className={`${getButtonColor(horita[0] == hora ? true : false)}`}>{horita[0] ? "Hora disponible" : "Hora no disponible"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {prueba1 && (
          <section id="book-a-table" className="book-a-table">
            <div className="container">
              <div className="section-title">
                <h2>
                  Disfruta en <span>Catpuccino</span>
                </h2>
                <p>
                  Antes de reservar, te aconsejamos que leas detenidamente la
                  siguiente información para garantizar una experiencia única.
                </p>
                {tab}
                {tab}
                {tab}
                {tab}
                {tab}
                
                <div className="tabs">
                  <input
                    type="radio"
                    className="tabs__radio"
                    name="tabs-example"
                    id="tab1"
                    checked={activeTab === 1}
                    onChange={() => handleTabChange(1)}
                  />
                  <label htmlFor="tab1" className="tabs__label">
                  <i className="pi pi-book " ></i> Información
                  </label>
                  <div className="tabs__content">
                    <p>
                      Las visitas son de 60 minutos, si quieres estar más rato
                      puedes hacer reservas consecutivas o incluso decidir
                      quedarte un poco más el mismo día de la visita, pero en
                      este caso dependerá del aforo en cada momento. Pregunta a
                      nuestro staff si es posible.
                    </p>
                    <p>
                      En ningún caso las visitas podrán ser de menos de 30
                      minutos para garantizar el bienestar de los gatos y el
                      ambiente relajado para todos los asistentes.
                    </p>
                    <p>
                      Al hacer la reserva, indicad el número de personas que
                      acudirán, pues de no hacerlo correctamente no podemos
                      garantizar que el grupo pueda acceder.
                    </p>
                    <p>
                      El día de la reserva procura ser puntual, podemos esperar
                      como mucho 15 minutos, en caso de llegar tarde
                      desbloquearemos el espacio para que pueda acceder otro
                      grupo.
                    </p>
                    {tab}
                    {tab}
                    {tab}
                    {tab}
                    {tab}
                  </div>
                  <input
                    type="radio"
                    className="tabs__radio"
                    name="tabs-example"
                    id="tab2"
                    checked={activeTab === 2}
                    onChange={() => handleTabChange(2)}
                  />
                  <label htmlFor="tab2" className="tabs__label">
                  <i className="pi pi-book " ></i> Normas
                  </label>
                  <div className="tabs__content">
                    <p>
                      Para que tanto humanos como gatos disfruten de la
                      experiencia, seguid siempre las indicaciones del personal
                      de Catpuccino.
                    </p>
                    <p>
                      {" "}
                      Hay algunas normas básicas de respeto que debéis seguir:
                    </p>
                    <p>
                      {tab}
                      {tab}
                      {tab}
                      {tab}
                      {tab}- Los gatos que están en Catpuccino viven
                      temporalmente aquí, por lo que estáis entrando en su casa,
                      respetadlos, tanto a ellos como a su espacio.
                    </p>
                    <p>
                      {tab}
                      {tab}
                      {tab}
                      {tab}
                      {tab}- Acercáos a ellos, acariciadlos y jugad con ellos,
                      pero siempre observando si es lo que desean.
                    </p>
                    <p>
                      {tab}
                      {tab}
                      {tab}
                      {tab}
                      {tab}- Les encantan las visitas, pero tal vez haya algún
                      momento en el que desean descansar o no tener contacto.
                    </p>
                    <p>
                      {tab}
                      {tab}
                      {tab}
                      {tab}
                      {tab}- Esperad siempre a que os abran las puertas, tanto
                      de Catpuccino como la puerta de acceso a la calle para
                      evitar riesgos.
                    </p>
                    <p>
                      {tab}
                      {tab}
                      {tab}
                      {tab}
                      {tab}- A algunos gatos les gusta que les cojan en brazos,
                      pero no a todos, por lo que no se puede hacer para evitar
                      que alguno se enfade.
                    </p>
                    <p>
                      {tab}
                      {tab}
                      {tab}
                      {tab}
                      {tab}- El pago se formaliza a la salida y se ajusta al
                      tiempo real de la visita.
                    </p>
                    {tab}
                    {tab}
                    {tab}
                    {tab}
                    {tab}
                  </div>
                  <input
                    type="radio"
                    className="tabs__radio"
                    name="tabs-example"
                    id="tab3"
                    checked={activeTab === 3}
                    onChange={() => handleTabChange(3)}
                  />
                  <label htmlFor="tab3" className="tabs__label">
                  <i className="pi pi-warehouse" ></i>  Pre-Reserva
                  </label>
                  <div className="tabs__content">
                    <p>
                      El aforo del Catpuccino es limitado, por lo que para
                      garantizar que optimizamos el espacio y nadie se queda sin
                      poder acudir, hay que abonar 3€ por persona en el momento
                      de reservar.
                    </p>
                    <p>
                      Si no puedes acudir o deseas modificar la reserva, puedes
                      ponerte en contacto por email a
                      catcafe_catpuccino@gmail.com o bien puedes acceder al
                      desplegable y acceder a <span> Mis Reservas </span> en el podras editar la fecha o la hora si estan
                      disponibles.
                    </p>
                    <p>
                      Dispones de 72h previas a la reserva para poder anularla y
                      recuperar el importe de la pre-reserva, en caso contrario
                      no será posible la devolución.
                    </p>
                    {tab}
                    {tab}
                    {tab}
                    {tab}
                    {tab}
                  </div>
                </div>
                {tab}
                {tab}
                {tab}
                {tab}
                {tab}
                <h2>
                Reserva <span>Disponible</span>
                </h2>
                <p>
                  ¡Completa el formulario y reserva tu lugar en el Catpuccino
                  para disfrutar de una experiencia única con nuestros adorables
                  felinos!
                </p>
              </div>

              <form
                className="php-email-form"
              >
                <div className="row">
                  <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="text"
                      name="nombre_reserva"
                      className="form-control"
                      placeholder="Nombre de la persona reservante"
                      onChange={handleInputChange}
                      maxLength={50}
                    />
                    <div className="validate"></div>
                  </div>
                  <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="number"
                      className="form-control"
                      name="telefono"
                      placeholder="Telefono de contacto"
                      onChange={handleInputChange}
                    />
                    <div className="validate"></div>
                  </div>
                  <div className="col-lg-4 col-md-6 form-group mt-3">
                    <input
                      type="number"
                      className="form-control"
                      name="numeroPersonas"
                      placeholder="N. de personas asistentes"
                      ref={inputRef}
                      defaultValue="" 
                      min={1} 
                      max={4}
                      onChange={handleInputChange}
                    />
                    <div className="validate"></div>
                  </div>
                  <div className="col-lg-4 col-md-6 form-group mt-3">
                    <input
                      type="text"
                      name="fecha"
                      className="form-control"
                      value={fecha}
                      disabled
                      
                    />
                    <div className="validate"></div>
                  </div>
                  <div className="col-lg-4 col-md-6 form-group mt-3">
                    <input
                      type="text"
                      className="form-control"
                      name="hora"
                      value={hora}
                      disabled
                    />
                    <div className="validate"></div>
                  </div>
                  
                </div>
                <div className="text-center">
                <button type="button" className="search-btn" onClick={onSubmitReserva}>Hacer Reserva</button>
                </div>
              </form>
            </div>
          </section>
        )}
      </div>
    </section>
  );
}

export default Reserva;

function getButtonColor(estadoReserva) {
  switch (estadoReserva) {
    case true:
      return "horaDisponible";
    case false:
      return "horaNoDisponible";
  }
}