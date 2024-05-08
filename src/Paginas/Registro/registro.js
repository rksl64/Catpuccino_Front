import React, { useEffect, useRef, useState } from "react";
import authService from "../../Servicios/auth.service";
import {
  BackgroundOverlay,
  Div,
  FormContainer,
  Title,
  Form,
  PageLink,
  FormBtn,
  PageLinkLabel,
  SignUpLabel,
  SignUpLink,
  Imagen,
  ToastDiv,
  A,
  ImagenFondo,
  DivFormu,
  DivImagen,
} from "./registro-style";
import { Password } from "primereact/password";
import { FloatLabel } from "primereact/floatlabel";
import { InputText } from "primereact/inputtext";
import logito from "../../assets/logito.png";
import fondito from "../../assets/img/Fondito.png";
import { Toast } from "primereact/toast";
import { Stepper } from "primereact/stepper";
import { StepperPanel } from "primereact/stepperpanel";
import "./registro.css";

function Registro({ setActivo }) {
  const [registro, setRegistro] = useState({
    nombre: "",
    apellidos: "",
    telefono: "",
    email: "",
    dni: "",
    rol: 0,
    nombreUsuario: "",
    password: "",
  });

  useEffect(() => {
    setActivo(false);
  }, []);

  const toast = useRef(null);
  const stepperRef = useRef(2);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRegistro({ ...registro, [name]: value });
  };

  const onSubmit = async () => {
    try {
      const camposRequeridos = [
        "nombre",
        "apellidos",
        "telefono",
        "email",
        "dni",
        "nombreUsuario",
        "password",
      ];
      const camposFaltantes = camposRequeridos.filter(
        (campo) => !registro[campo]
      );

      if (camposFaltantes.length > 0) {
        // Mostrar mensaje de error indicando los campos faltantes
        const mensajeError = `Los campos ${camposFaltantes.join(
          ", "
        )} son obligatorios.`;
        showErrorMessage(mensajeError);
        return;
      }
      if (!validateEmail(registro.email)) {
        showErrorMessage("El formato del correo electrónico es inválido.");
        return;
      }
      if (registro.password.length < 6) {
        showErrorMessage("La contraseña debe tener al menos 6 caracteres.");
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
      if (response.token) {
        showSuccessMessage(
          "Inicio de sesión exitoso. Redirigiendo a Inicio..."
        );
      } else {
        showErrorMessage(
          "Las credenciales son incorrectas. Por favor, verifica el nombre de usuario y la contraseña."
        );
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

  // Función para mostrar el mensaje de éxito
  const showSuccessMessage = (message) => {
    toast.current.show({
      severity: "success",
      content: () => (
        <ToastDiv style={{ flex: "1" }}>
          <div>
            <Imagen src={logito} shape="circle" />
          </div>
          <div className="font-medium text-lg my-3 text-900">{message}</div>
        </ToastDiv>
      ),
    });
  };

  // Función para mostrar el mensaje de error
  const showErrorMessage = (message) => {
    toast.current.show({
      severity: "error",
      content: () => (
        <ToastDiv style={{ flex: "1" }}>
          <div>
            <Imagen src={logito} shape="circle" />
          </div>
          <div className="font-medium text-lg my-3 text-900">{message}</div>
        </ToastDiv>
      ),
    });
  };

  return (
    <>
      <BackgroundOverlay>
        <Div>
          <FormContainer className="form-container">
            <Title className="title">Catpuccino</Title>
            <Form className="form">
              <DivImagen>
                <ImagenFondo src={fondito}></ImagenFondo>
              </DivImagen>
              <DivFormu>
                <FloatLabel className="Margin">
                  <InputText
                    name="nombre"
                    className="Input"
                    id="nombre"
                    onChange={handleInputChange}
                  />
                  <label htmlFor="nombre">Nombre</label>
                </FloatLabel>

                <FloatLabel className="Margin">
                  <InputText
                    name="apellidos"
                    className="Input"
                    id="username"
                    onChange={handleInputChange}
                  />
                  <label htmlFor="apellidos">Apellidos</label>
                </FloatLabel>
                <FloatLabel className="Margin">
                  <InputText
                    name="telefono"
                    className="Input"
                    id="telefono"
                    onChange={handleInputChange}
                  />
                  <label htmlFor="telefono">Teléfono</label>
                </FloatLabel>

                <FloatLabel className="Margin">
                  <InputText
                    name="email"
                    className="Input"
                    id="email"
                    onChange={handleInputChange}
                  />
                  <label htmlFor="email">Email</label>
                </FloatLabel>

                <FloatLabel className="Margin">
                  <InputText
                    name="dni"
                    className="Input"
                    id="dni"
                    onChange={handleInputChange}
                  />
                  <label htmlFor="dni">Dni</label>
                </FloatLabel>
                <FloatLabel className="Margin">
                  <InputText
                    name="nombreUsuario"
                    className="Input"
                    id="nombreUsuario"
                    onChange={handleInputChange}
                  />
                  <label htmlFor="nombreUsuario">Nombre de Usuario</label>
                </FloatLabel>

                <FloatLabel>
                  <Password
                    name="password"
                    onChange={handleInputChange}
                    feedback={false}
                    tabIndex={1}
                    toggleMask
                  />
                  <label htmlFor="password">Contraseña</label>
                </FloatLabel>

                <FormBtn className="form-btn" onClick={onSubmit}>
                  Iniciar Sesión
                </FormBtn>
                <SignUpLabel className="sign-up-label">
                  Tienes Cuenta?
                  <SignUpLink className="sign-up-link">
                    <A href="../Login">Inicia Sesión</A>
                  </SignUpLink>
                </SignUpLabel>
                <PageLink className="page-link">
                  <PageLinkLabel className="page-link-label">
                    <A href="">Olvidaste la contraseña?</A>
                  </PageLinkLabel>
                </PageLink>
              </DivFormu>
            </Form>
          </FormContainer>

          <Toast ref={toast} />
        </Div>
      </BackgroundOverlay>
    </>
  );
}

export default Registro;
