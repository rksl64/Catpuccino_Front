import axios from "axios";

const BASE_HOST = "http://localhost:8080/auth";

async function login(nombreUsuario, password) {
  try {
    const response = await axios.post(`${BASE_HOST}/login`, {
      nombreUsuario,
      password,
    });
    console.log("user", JSON.stringify(response.data));
    if (response.data.token == null) {
      console.log("Error");
    } else {
      console.log("Entro", response.data.token);
    }

    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

async function register(
  nombre,
  apellidos,
  telefono,
  email,
  dni,
  rol,
  nombreUsuario,
  password
) {
  try {
    const response = await axios.post(`${BASE_HOST}/register`, {
      nombre,
      apellidos,
      telefono,
      email,
      dni,
      rol,
      nombreUsuario,
      password,
    });
    console.log("user", JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}


export default {
  login,
  register,
};
