import React, { useEffect, useState } from "react";
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
  Titulo,
  CardContainer,
  Header,
  DivImage,
  Content,
  Message,
  Imagen,
  DivImageError,
  A,
} from "./login-style";
import authService from "../../Servicios/auth.service";
import { setIDValue, setCookieValue, setRolValue } from "../../Servicios/Cookies/cookies";
import { Password } from "primereact/password";
import { FloatLabel } from "primereact/floatlabel";
import "./login.css";
import { InputText } from "primereact/inputtext";
import logito from "../../assets/logito.png";

function Login({ setActivo }) {
  const [data, setData] = useState({
    nombreUsuario: "",
    password: "",
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(null);

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
        setShowSuccessMessage(true);
        setCookieValue(response.token);
        setIDValue(response.id);
        setRolValue(response.rol);
        setTimeout(() => {
          window.location.href = "../";
        }, 2000);
      } else {
        setShowSuccessMessage(false);
        setTimeout(() => {
          setShowSuccessMessage(null);
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

        {showSuccessMessage == true ? (
          <CardContainer>
            <Header>
              <DivImage>
                <Imagen src={logito} />
              </DivImage>
              <Content>
                <Titulo>Login exitoso</Titulo>
                <Message>Se te enviará a Inicio.</Message>
              </Content>
            </Header>
          </CardContainer>
        ) : showSuccessMessage == false ? (
          <CardContainer>
            <Header>
              <DivImageError>
                <Imagen src={logito} />
              </DivImageError>
              <Content>
                <Titulo>Login fallido</Titulo>
                <Message>
                  Las Credenciales Incorrectas, comprueba el Usuario o
                  contraseña.
                </Message>
              </Content>
            </Header>
          </CardContainer>
        ) : null}
      </Div>
    </BackgroundOverlay>
  );
}

export default Login;
