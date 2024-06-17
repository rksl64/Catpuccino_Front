import React, { useEffect, useRef, useState } from "react";
import "../../Registro/registro.css";
import { FloatLabel } from "primereact/floatlabel";
import { DivFormu, DivScroll, FormBtn, Logito } from "./modals-styles";
import gatocafe from "../../../assets/img/icono.png";
import {
    showSuccessMessage,
    showErrorMessage,
  } from "../../../Componentes/Toast/toast";
  import { Toast } from "primereact/toast";
import { InputText } from "primereact/inputtext";
import { HacerReserva } from "../../../Servicios/user.service";
import { InputNumber } from 'primereact/inputnumber';
import "../../DashboardSuperAdmin/dashboardSuperAdmin.css"

function ModalAdopcion() {
  
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState('');
  const [registro, setRegistro] = useState({
    
    nombre_reserva: "",
    telefono: 123456789,
    numeroPersonas: 1,
    estadoReserva: 0,
    reserva_activa: true,
    pagado: false,
    total: 0,
    usuarioDTO: {
      id: 1,
    }
    });

    useEffect(() => {    
      obtenerFecha();
    }, []);
    function obtenerFecha() {
      const nuevaFecha = new Date();
      const year = nuevaFecha.getFullYear();
      const month = String(nuevaFecha.getMonth() + 1).padStart(2, '0');
      const day = String(nuevaFecha.getDate()).padStart(2, '0');
      const formattedDate = `${year}-${month}-${day}`;
      setFecha(formattedDate);

      const hours = String(nuevaFecha.getHours()).padStart(2, '0');
      const formattedTime = `${hours}:00:00`;
      setHora(formattedTime);
    }
    



  const toast = useRef(null);

  const handleNombre = (nombre) => {
    setRegistro((prev) => ({
      ...prev,
      nombre_reserva: nombre.target.value,
    }));
  };

  const handlePersonas = (personas) => {
    console.log(personas.target.value);
    setRegistro((prev) => ({
      ...prev,
      numeroPersonas: personas.target.value,
    }));
  };

  const onSubmit = async () => {
    try {
      // Verificar campos vacíos
      const camposRequeridos = [
        "nombre_reserva",
        "numeroPersonas",
      ];
      const camposFaltantes = camposRequeridos.filter(
        (campo) => !registro[campo]
      );

      if (camposFaltantes.length > 0) {
        // Mostrar mensaje de error indicando los campos faltantes
        const mensajeError = `Los campos ${camposFaltantes.join(
          ", "
        )} son obligatorios.`;
        showErrorMessage(toast, mensajeError);
        return;
      }


      const response = await HacerReserva(
        registro.nombre_reserva,
        registro.telefono,
        fecha,
        hora,
        parseInt(registro.numeroPersonas),
        registro.estadoReserva,
        registro.reserva_activa,
        registro.pagado,
        registro.total,
        registro.usuarioDTO
      );

      console.log(response);
      if (response.username == "error 1") {
        showErrorMessage(toast, response.message);
      }
      if (response.username == "error 2") {
        showErrorMessage(toast, response.message);
      }
      if (response.token) {
        // Mostrar mensaje de éxito si el registro es exitoso
        showSuccessMessage(
          toast,
          "Registro exitoso. Usuario creado correctamente."
        );
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  };

  return (
    <DivFormu>
      <a href="../">
        <Logito src={gatocafe}></Logito>
      </a>
      <DivScroll className="scroll">
        <FloatLabel className="MarginModal">
          <InputText
            value={registro.nombre_reserva}
            name="nombre_reserva"
            placeholder="Nombre de Reserva"
            className="Input"
            id="nombre_reserva"
            onChange={handleNombre}
            maxLength={50}
          />
          <label className="label" htmlFor="nombre_reserva">
            Nombre de Reserva
          </label>
        </FloatLabel>

        <FloatLabel className="MarginModal">
          <InputNumber
            value={registro.numeroPersonas}
            name="numeroPersonas"
            placeholder="Numero de Personas"
            className="InputNumber"
            id="numeroPersonas"
            onValueChange={handlePersonas}
            max={4}
          />
          <label className="label" htmlFor="numeroPersonas">
          Número de Personas
          </label>
        </FloatLabel>
      </DivScroll>
      <FormBtn className="form-btn" onClick={onSubmit}>
        Hacer Reserva
      </FormBtn>
      <Toast ref={toast} />
    </DivFormu>
  );
}

export default ModalAdopcion;
