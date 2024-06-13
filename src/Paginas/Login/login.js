import React, { useEffect, useRef, useState } from "react";
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
  TILT,
} from "./login-style";
import authService from "../../Servicios/auth.service";
import {
  setIDValue,
  setCookieValue,
  setRolValue,
  setUserNameValue
} from "../../Servicios/Cookies/cookies";
import { Password } from "primereact/password";
import { FloatLabel } from "primereact/floatlabel";
import "./login.css";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import { showSuccessMessage, showErrorMessage } from "../../Componentes/Toast/toast"; // Ajusta la ruta si es necesario

function Login({ setActivo }) {
  const [data, setData] = useState({
    nombreUsuario: "",
    password: "",
  });

  useEffect(() => {
    setActivo(false);
  }, []);

  const handleLogin = (password) => {
    setData((prev) => ({
      ...prev,
      password: password.target.value,
    }));
  };

  const handleLoginName = (nombreUsuario) => {
    setData((prev) => ({
      ...prev,
      nombreUsuario: nombreUsuario.target.value,
    }));
  };

  const onLogin = async () => {
    try {
      const response = await authService.login(
        data.nombreUsuario,
        data.password
      );
      console.log(response);
      if (response.token) {
        showSuccessMessage(toast, "Inicio de sesión exitoso. Redirigiendo a Inicio...");
        setCookieValue(response.token);
        setIDValue(response.id);
        setRolValue(response.rol);
        setUserNameValue(response.username);
        setTimeout(() => {
          window.location.href = "../";
        }, 2000);
      } else {
        showErrorMessage(toast, "Las credenciales son incorrectas. Por favor, verifica el nombre de usuario y la contraseña.");
        setTimeout(() => {
          setData(() => ({
            nombreUsuario: "",
            password: "",
          }));
        }, 2000);
      }
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  };

  const toast = useRef(null);

  return (
    <BackgroundOverlay>
      <Div>
        <FormContainer className="form-container">
        <TILT href="../"><Title className="title">Catpuccino</Title></TILT>
          <Form className="form">
            <FloatLabel className="Margin">
              <InputText
                value={data.nombreUsuario}
                className="Input"
                id="username"
                onChange={handleLoginName}
                maxLength={50}
              />
              <label className="label" htmlFor="username">Usuario</label>
            </FloatLabel>
            <FloatLabel className="Margin">
              <Password 
                value={data.password}
                onChange={handleLogin}
                feedback={false}
                tabIndex={1}
                toggleMask
                maxLength={100}
              />
              <label className="label" htmlFor="password">Contraseña</label>
            </FloatLabel>
            <FormBtn className="form-btn" onClick={onLogin}>
              Iniciar Sesión
            </FormBtn>
          </Form>
          <SignUpLabel className="sign-up-label">
            No tienes Cuenta?
            <SignUpLink className="sign-up-link">
              <A href="../Registro"> Registrate.</A>
            </SignUpLink>
          </SignUpLabel>
          <PageLink className="page-link">
            <PageLinkLabel className="page-link-label">
              <A href="../CambiarContraseña">Olvidaste la contraseña?</A>
            </PageLinkLabel>
          </PageLink>
        </FormContainer>

        <Toast ref={toast} />
      </Div>
    </BackgroundOverlay>
  );
}

export default Login;
