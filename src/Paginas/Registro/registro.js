import React, { useState } from "react";
import { Div } from "./registro-style";
import authService from "../../Servicios/auth.service";

function Registro() {
  const [registro, setRegistro] = useState({
    nombre: "",
    apellidos: "",
    telefono: "",
    email: "",
    dni: "",
    rol: "",
    nombreUsuario: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRegistro({ ...registro, [name]: value });
  };

  const onSubmit = async () => {
    try {
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
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  };

  return (
    <Div>
      <h1>Registro</h1>
      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="apellidos"
        placeholder="Apellidos"
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="telefono"
        placeholder="Teléfono"
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="email"
        placeholder="Email"
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="dni"
        placeholder="DNI"
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="rol"
        placeholder="Rol"
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="nombreUsuario"
        placeholder="Nombre de usuario"
        onChange={handleInputChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Contraseña"
        onChange={handleInputChange}
      />
      <button onClick={onSubmit}>Registro</button>
      <button>Logout</button>
    </Div>
  );
}

export default Registro;
