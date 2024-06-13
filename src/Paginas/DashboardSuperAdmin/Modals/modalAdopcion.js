import React, { useRef, useState } from "react";
import "../../Registro/registro.css";
import { FloatLabel } from "primereact/floatlabel";
import { Password } from "primereact/password";
import { DivFormu, DivScroll, FormBtn, Logito } from "./modals-styles";
import gatocafe from "../../../assets/img/icono.png";
import {
    showSuccessMessage,
    showErrorMessage,
  } from "../../../Componentes/Toast/toast";
  import { Toast } from "primereact/toast";
import authService from "../../../Servicios/auth.service";
import { InputText } from "primereact/inputtext";

function ModalAdopcion() {
  const [registro, setRegistro] = useState({
    nombre: "",
    apellidos: "",
    telefono: "",
    email: "",
    dni: "",
    rol: 2,
    nombreUsuario: "",
    password: "",
  });

  const toast = useRef(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRegistro({ ...registro, [name]: value });
  };

  const onSubmit = async () => {
    try {
      // Verificar campos vacíos
      const camposRequeridos = [
        "nombre",
        "apellidos",
        "telefono",
        "email",
        "dni",
        "nombreUsuario",
        "password",
        "password2",
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

      // Verificar formato de email
      if (!validateEmail(registro.email)) {
        showErrorMessage(
          toast,
          "El formato del correo electrónico es inválido."
        );
        return;
      }

      // Verificar longitud de contraseña
      if (registro.password.length < 6) {
        showErrorMessage(
          toast,
          "La contraseña debe tener al menos 6 caracteres."
        );
        return;
      }

      // Verificar que las contraseñas coincidan
      if (registro.password !== registro.password2) {
        showErrorMessage(toast, "Las contraseñas no coinciden.");
        return;
      }

      const response = await authService.register(
        registro.nombre,
        registro.apellidos,
        registro.telefono,
        registro.email,
        registro.dni,
        registro.rol,
        registro.nombreUsuario,
        registro.password
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
  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <DivFormu>
      <a href="../">
        <Logito src={gatocafe}></Logito>
      </a>
      <DivScroll className="scroll">
        <FloatLabel className="Margin">
          <InputText
            name="nombre"
            placeholder="Nombre"
            className="Input"
            id="nombre"
            onChange={handleInputChange}
            maxLength={50}
          />
          <label className="label" htmlFor="nombre">
            Nombre
          </label>
        </FloatLabel>

        <FloatLabel className="Margin">
          <InputText
            name="apellidos"
            placeholder="Apellidos"
            className="Input"
            id="username"
            onChange={handleInputChange}
            maxLength={60}
          />
          <label className="label" htmlFor="apellidos">
            Apellidos
          </label>
        </FloatLabel>
        <FloatLabel className="Margin">
          <InputText
            name="telefono"
            placeholder="Telefono"
            className="Input"
            id="telefono"
            onChange={handleInputChange}
          />
          <label className="label" htmlFor="telefono">
            Teléfono
          </label>
        </FloatLabel>

        <FloatLabel className="Margin">
          <InputText
            name="email"
            placeholder="Email"
            className="Input"
            id="email"
            onChange={handleInputChange}
            maxLength={50}
          />
          <label className="label" htmlFor="email">
            Email
          </label>
        </FloatLabel>

        <FloatLabel className="Margin">
          <InputText
            name="dni"
            placeholder="DNI"
            className="Input"
            id="dni"
            onChange={handleInputChange}
            maxLength={9}
          />
          <label className="label" htmlFor="dni">
          DNI
          </label>
        </FloatLabel>
        <FloatLabel className="Margin">
          <InputText
            name="nombreUsuario"
            placeholder="Nombre de Usuario"
            className="Input"
            id="nombreUsuario"
            onChange={handleInputChange}
            maxLength={50}
          />
          <label className="label" htmlFor="nombreUsuario">
            Nombre de Usuario
          </label>
        </FloatLabel>
        <FloatLabel className="Margin2">
          <Password
            name="password"
            placeholder="Contraseña"
            onChange={handleInputChange}
            feedback={false}
            tabIndex={1}
            className="Input"
            toggleMask
            maxLength={100}
          />
          <label className="label" htmlFor="password">
            Contraseña
          </label>
        </FloatLabel>

        <FloatLabel className="Margin2">
          <Password
            name="password2"
            placeholder="Repetir Contraseña"
            onChange={handleInputChange}
            feedback={false}
            tabIndex={1}
            className="Input"
            toggleMask
            maxLength={100}
          />
          <label className="label" htmlFor="password">
            Repetir Contraseña
          </label>
        </FloatLabel>
      </DivScroll>
      <FormBtn className="form-btn" onClick={onSubmit}>
        Registrarse
      </FormBtn>
      <Toast ref={toast} />
    </DivFormu>
  );
}

export default ModalAdopcion;
