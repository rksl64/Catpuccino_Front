import React, { useState, useEffect, useRef } from "react";
import { FloatLabel } from "primereact/floatlabel";
import { Password } from "primereact/password";
import { Toast } from "primereact/toast";
import authService from "../../Servicios/auth.service";
import { useLocation } from "react-router-dom";
import {
  showErrorMessage,
  showSuccessMessage,
} from "../../Componentes/Toast/toast";
import { FormBtn } from "./recuperar-style";

function Recuperar({ setActivo }) {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const toast = useRef(null);
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get("token");

  useEffect(() => {
    setActivo(false);
  }, []);

  const onCambio = async () => {
    if (newPassword !== confirmPassword) {
      showErrorMessage(toast, "Las contraseñas no coinciden");
      return;
    }

    try {
      const response = await authService.newContraseña(token, newPassword);
      console.log(response);
      if (response.message === "Cambio exitoso") {
        showSuccessMessage(
          toast,
          response.message + ". Se Redigira a Iniciar sesión."
        );
        setTimeout(() => {
          window.location.href = "../Login";
        }, 2000);
      } else {
        showErrorMessage(toast, response.message);
        setTimeout(() => {
          setNewPassword("");
          setConfirmPassword("");
        }, 2000);
      }
    } catch (error) {
      console.error("Error:", error);
      showErrorMessage(toast, "Error al cambiar la contraseña");
    }
  };

  return (
    <div>
      <FloatLabel className="Margin">
        <Password
          name="newPassword"
          placeholder="Nueva Contraseña"
          className="Input"
          id="newPassword"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          feedback={false}
          tabIndex={1}
          toggleMask
        />
        <label className="label" htmlFor="newPassword">
          Nueva Contraseña
        </label>
      </FloatLabel>
      <FloatLabel className="Margin">
        <Password
          name="confirmPassword"
          placeholder="Confirmar Contraseña"
          className="Input"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          feedback={false}
          tabIndex={1}
          toggleMask
        />
        <label className="label" htmlFor="confirmPassword">
          Confirmar Contraseña
        </label>
      </FloatLabel>
      <FormBtn onClick={onCambio}>Cambiar Contraseña</FormBtn>
      <Toast ref={toast} />
    </div>
  );
}

export default Recuperar;
