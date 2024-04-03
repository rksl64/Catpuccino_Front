import React, { useState, useEffect } from "react";
import userService from "../../Servicios/user.service";
import "./Reserva.css";

function Reserva() {
  const [hora, setHora] = useState("null");
  const [fecha, setFecha] = useState("");
  const [puedoBuscar, setPuedoBuscar] = useState(false);
  const [horasDisponibles, setHorasDisponibles] = useState([]);
  const [horanull, setHoranull] = useState(false);
  const [fechanull, setFechanull] = useState(false);

  const handleHoraChange = (e) => {
    setHora(e.target.value);
  };

  const handleFechaChange = (e) => {
    setFecha(e.target.value);
  };

  useEffect(() => {
    // Verificar si se puede realizar la búsqueda
    setPuedoBuscar(hora !== "null" || fecha !== "null");
  }, [hora, fecha]);

  const onSearch = async () => {
    try {
      let response;
      // Realizar la búsqueda basado en los valores de hora y fecha
      if (hora !== "null" && fecha !== "null") {
        response = await userService.Search(hora, fecha);
        setHorasDisponibles(response);
      } else if (hora === "null" && fecha !== "null") {
        response = await userService.Search(hora, fecha);
        setHorasDisponibles(response);
      } else if (hora !== "null" && fecha === "") {
        response = await userService.Search(hora, fecha);
        setHorasDisponibles(response);
      }
      // En este punto, puedes establecer los estados horanull y fechanull según corresponda
      setHoranull(hora === "null");
      setFechanull(fecha === "");
    } catch (error) {
      console.error("Error:", error);
      // Manejar el error de acuerdo a tus necesidades
    }
  };


  return (
    <div className="reserva">
      <div className="search-container">
        <div className="search-box">
          <select
            value={hora}
            onChange={handleHoraChange}
            className="search-input"
          >
            <option value="null">Selecciona hora</option>
            <option value="09:00">09:00</option>
            <option value="10:00">10:00</option>
            <option value="11:00">11:00</option>
            <option value="12:00">12:00</option>
            <option value="13:00">13:00</option>
            <option value="14:00">14:00</option>
            <option value="16:00">16:00</option>
            <option value="17:00">17:00</option>
            <option value="18:00">18:00</option>
            <option value="19:00">19:00</option>
          </select>
        </div>
        <div className="search-box">
          <input
            onChange={handleFechaChange}
            value={fecha}
            type="date"
            className="search-input"
            placeholder="Fecha"
          />
        </div>
        <button
          disabled={!puedoBuscar}
          onClick={onSearch}
          className="search-btn"
        >
          Buscar
        </button>
       
      </div>
      {horanull && !fechanull && (
        
        <div className="default-container">
          <table className="default">
            <thead>
              <tr>
                {horasDisponibles.map((hora, index) => (
                  <th key={index}>{hora[0]}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                {horasDisponibles.map((hora, index) => (
                  <td key={index}>{hora[1] ? "Hora disponible" : "Hora no disponible"}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      )}
      {!horanull && fechanull && (
        <div className="default-container">
        <table className="default">
          <thead>
            <tr>
              {horasDisponibles.map((hora, index) => (
                <th key={index}>{hora[1]}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {horasDisponibles.map((hora, index) => (
                <td key={index}>{hora[0] ? "Hora disponible" : "Hora no disponible"}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
      )}
      
    </div>
  );
}

export default Reserva;
