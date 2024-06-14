import { FloatLabel } from "primereact/floatlabel";
import { InputText } from "primereact/inputtext";
import React, { useEffect, useRef, useState } from "react";
import { BackgroundOverlay, Div, DivFormu, Form, FormBtn, FormContainer, P } from "./cambiarContra-style";
import authService from "../../Servicios/auth.service";
import { Toast } from "primereact/toast";
import {
  showErrorMessage,
  showSuccessMessage,
} from "../../Componentes/Toast/toast";

function CambiarContraseña({ setActivo }) {
  const [email, setEmail] = useState();

  useEffect(() => {
    setActivo(false);
  }, []);

  const onCambio = async () => {
    try {
      const response = await authService.cambiarContraseña(email);
      console.log(response);
      if (response.username == "1") {
        showSuccessMessage(
          toast,
          response.message + ". Compruebe su correo electrónico."
        );

        setTimeout(() => {
          window.location.href = "../";
        }, 2000);
      } else {
        showErrorMessage(
          toast,
          response.message + ". Compruebe su dirección de correo."
        );
        setTimeout(() => {
          setEmail("");
        }, 2000);
      }
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  };

  const toast = useRef(null);

  return (
    <>
    <BackgroundOverlay>
      <Div>
        <FormContainer className="form-container">
          <Form className="form">
            <DivFormu>
            <P>
            Por favor, ingrese su correo electrónico para verificar si está registrado.
            <br/> 
            Le enviaremos un mensaje con más información. Gracias.
                </P>
              <FloatLabel className="Margin">
                <InputText
                  name="email"
                  placeholder="Email"
                  className="Input"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label className="label" htmlFor="email">
                  Email
                </label>
              </FloatLabel>
              <FormBtn onClick={onCambio}>Enviar</FormBtn>

              <Toast ref={toast} />
            </DivFormu>
          </Form>
        </FormContainer>
      </Div>
    </BackgroundOverlay>
    </>
  );
}

export default CambiarContraseña;
