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
//AGREGAMOS AL CARRITO
async function agregarProductoAlCarrito(idProducto, cantidad, idUsuario) {
  try {
    const response = await axios.post(`${BASE_HOST}consumiciones/carrito/agregar`, {
      idProducto: idProducto,
      cantidad: cantidad,
      //MIRAR LO DEL USUARIO LOGEADO
      idUsuario: idUsuario
    });
    console.log('Producto agregado al carrito:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error al agregar el producto al carrito:', error);
    throw error;
  }
}

async function listaCarrito() {
  try {
    const response = await axios.post(`${BASE_HOST}/consumiciones/pedido`);
    console.log('Productos en el carrito guardados:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error al listar los productos en el carrito:', error);
    throw error;
  }
}



export{
  listarproductos,
  listarconsumiciones,
  agregarProductoAlCarrito,
  listaCarrito
}



//---------------------- GATOS --------------------------
export async function getAllGatos(){
  try{
    const response = await axios.get(`${BASE_HOST}/gato/getAll`);
    return response.data;
  } catch (error) {
    console.error('Ops, un error', error);
    throw error;
  }
}

export async function getGatosDisponibles(){ //este tbm lo uso para el carrusel
  try{
    const response = await axios.get(`${BASE_HOST}/gato/getAll`);
    return response.data;
  } catch (error) {
    console.error('Ops, un error', error);
    throw error;
  }
}

export async function getGatoOneByOne(id){
  try{
    const response = await axios.get(`${BASE_HOST}/gato/${id}`);
      console.log('Datos recibidos del backend:', response.data);
    return response.data;
  } catch (error) {
      console.error('Ops, un error', error);
    throw error;
  }
}

//---------------------- CARRUSEL ADOPCION --------------------------
export async function getNumGatosAdoptados(){
  try{
    const response = await axios.get(`${BASE_HOST}/adopcion/numTotal`);
    return response.data;
  } catch (error) {
    console.error('Ops, un error', error);
    throw error;
  }
}