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
import logito from "../../assets/logito.png";
import { Toast } from "primereact/toast";

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
        showSuccessMessage(
          "Inicio de sesión exitoso. Redirigiendo a Inicio..."
        );
        setCookieValue(response.token);
        setIDValue(response.id);
        setRolValue(response.rol);
        setUserNameValue(response.username);
        setTimeout(() => {
          window.location.href = "../";
        }, 2000);
      } else {
        showErrorMessage(
          "Las credenciales son incorrectas. Por favor, verifica el nombre de usuario y la contraseña."
        );
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
    <BackgroundOverlay>
      <Div>
        <FormContainer className="form-container">
          <Title className="title">Catpuccino</Title>
          <Form className="form">
            <FloatLabel className="Margin">
              <InputText
                value={data.nombreUsuario}
                className="Input"
                id="username"
                onChange={handleLoginName}
              />
              <label htmlFor="username">Usuario</label>
            </FloatLabel>
            <FloatLabel>
              <Password
                value={data.password}
                onChange={handleLogin}
                feedback={false}
                tabIndex={1}
                toggleMask
              />
              <label htmlFor="password">Contraseña</label>
            </FloatLabel>
            <FormBtn className="form-btn" onClick={onLogin}>
              Iniciar Sesión
            </FormBtn>
          </Form>
          <SignUpLabel className="sign-up-label">
            No tienes Cuenta?
            <SignUpLink className="sign-up-link">
              <A href="../Registro">Registrate</A>
            </SignUpLink>
          </SignUpLabel>
          <PageLink className="page-link">
            <PageLinkLabel className="page-link-label">
              <A href="">Olvidaste la contraseña?</A>
            </PageLinkLabel>
          </PageLink>
        </FormContainer>

        <Toast ref={toast} />
      </Div>
    </BackgroundOverlay>
  );
}

export default Login;
