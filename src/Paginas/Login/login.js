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

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

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
      <input type="text" placeholder="Name" onChange={handleInputChange} />
      <input type="password" placeholder="Password" onChange={handleInputChange} />
      <button onClick={onLogin}>Login</button>
      <button>Logout</button>
    </Div>
  );
}

export default Login;
