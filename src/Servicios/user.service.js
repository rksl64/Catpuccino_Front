import axios from "axios";
import authHeader from "./auth-header";

const BASE_HOST = "http://localhost:8080";

export async function getProductos() {
  try {
    const response = await axios.get(`${BASE_HOST}/User/producto`, {
      headers: authHeader(),
    });
    console.log("user", JSON.stringify(response.data));

    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

async function Search(hora, fecha) {
  try {
    const response = await axios.get(`${BASE_HOST}/comprobarReserva`, {
      params:{hora: hora, fecha: fecha}
    });
    console.log("Datos", JSON.stringify(response.data));
    return response.data;
  } 
  catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export default {
  Search
};
async function listarproductos(){
  try {
    const response = await axios.get(`${BASE_HOST}/producto`);
  //CONSOLE LOG PARA COMPROBAR
    console.log('Datos recibidos del backend:', response.data); 
    return response.data;
  } catch (error) {
    console.error('Error al obtener los productos:', error);
    throw error;
  }
}
async function listarconsumiciones(){
  try {
    const response = await axios.get(`${BASE_HOST}/consumiciones`);
  //CONSOLE LOG PARA COMPROBAR
    console.log('Datos recibidos del backend:', response.data); 
    return response.data;
  } catch (error) {
    console.error('Error al obtener las consumiciones:', error);
    throw error;
  }
}
export{
  listarproductos,
  listarconsumiciones,
}
