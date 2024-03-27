import React, { useState } from "react";
import { Div } from "./login-style";
import authService from "../../Servicios/auth.service";
import { AppConsumerHook } from "../../contexts/app.context";

function Login() {
  const { setLoginData } = AppConsumerHook();

  const [data, setData] = useState({
    nombreUsuario:"",
    password: "",
  });

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
      const response = await authService.login(data.nombreUsuario, data.password);
      console.log(response);
      setLoginData({ token: response.token });
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
      <button>Logout</button>
    </Div>
  );
}

export default Login;
