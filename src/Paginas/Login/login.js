import React, { useState } from "react";
import { Div, Input } from "./login-style";
import authService from "../../Servicios/auth.service";
import { setIDValue, setCookieValue } from "../../Servicios/Cookies/cookies";
import { Password } from "primereact/password";
import { FloatLabel } from "primereact/floatlabel";
import "./login.css";

function Login() {
  const [data, setData] = useState({
    nombreUsuario: "",
    password: "",
  });
  const [value, setValue] = useState();

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

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setData({ ...data, [name]: value });
  // };

  const onLogin = async () => {
    try {
      const response = await authService.login(
        data.nombreUsuario,
        data.password
      );
      console.log(response);
      setCookieValue(response.token);
      setIDValue(response.id);
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  };
  return (
    <Div>
      <h1>Login</h1>
      <input type="text" placeholder="Name" onChange={handleLoginName} />
      <input type="password" placeholder="Password" onChange={handleLogin} />
      <button onClick={onLogin}>Login</button>
      //----------------------------------------------
      <FloatLabel>
        <Password
          className="input"
          inputId="password"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          toggleMask
        />
        <label htmlFor="password">Password</label>
      </FloatLabel>
      <button onClick={onLogin}>Iniciar Sesión</button>
    </Div>
  );
}

export default Login;
