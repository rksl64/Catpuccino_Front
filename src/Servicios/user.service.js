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
    //const token = getToken("token"); // Obtener el token de autenticación
    const response = await axios.post(`${BASE_HOST}/consumiciones/carrito/agregar`,null, {
      params:{
      idProducto:idProducto,
      cantidad:cantidad,
      idUsuario:idUsuario}
    }, {
      headers: authHeader()

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
//TE MUESTRA LO QUE HAY DENTRO DEL CARRITO
async function verCarrito(){
  try{
    const response = await axios.get(`${BASE_HOST}/consumiciones/verCarro`);
    console.log('Lo que hay en el carrito', response.data); //AQUI HAY UN CONSOLE LOG
    return response.data;
  }catch(error){
    console.error('Error al listar los productos en el carrito:', error);
    throw error;
  }
}
// -----------------------METODOS PARA LAS RESERVAS -------------------------------
//LAS RESERVAS DEL USUARIO
export async function obtenerReservasUsuario(idUsuario) {
  try {
    const response = await axios.get(`${BASE_HOST}/reserva/reservas/${idUsuario}`, {
      headers: authHeader(),
    });
    console.log("Reservas del usuario:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error al obtener reservas del usuario:", error);
    throw error;
  }
}

//LLAMO AL METODO QUE ME ACTUALIZA EL ESTADO DE LAS RESERVAS
export async function actualizarEstadosReserva(){
  try {
    const response = await axios.post (`${BASE_HOST}/reserva/actualizar`);
    console.log("funciono"); //AQUI HAY UN CONSOLE LOG
    return response.data;
  }catch (error){
    console.log("ALGO ME PASA", error); //AQUI HAY UN CONSOLE LOG
    throw error;
  }
}
//CANCELO RESERVA
 async function cancelarReserva1 (reservaId) {
  try{
    const response = await axios.post(`${BASE_HOST}/reserva/cancelar/${reservaId}`);
    console.log("He entrado");//AQUI HAY UN CONSOLE LOG
    return response.data;
  }catch(error){
    console.log("No funciono", error); //AQUI HAY UN CONSOLE LOG
    throw error;
  }
}

export {
  listarproductos,
  listarconsumiciones,
  agregarProductoAlCarrito,
  listaCarrito,
  verCarrito,
  cancelarReserva1

};




//---------------------- GATOS --------------------------
export async function getAllGatos(){
  try{
    const response = await axios.get(`${BASE_HOST}/gato/getAll`);
    return response.data;
  } catch (error) {
    console.error('Ops, un error getAllGatos', error);
    throw error;
  }
}

export async function getGatosDisponibles(){ //este tbm lo uso para el carrusel
  try{
    const response = await axios.get(`${BASE_HOST}/gato/getAll`);
    return response.data;
  } catch (error) {
    console.error('Ops, un error getGatosDisponibles', error);
    throw error;
  }
}

export async function getGatoOneByOne(id){
  try{
    const response = await axios.get(`${BASE_HOST}/gato/${id}`);
    return response.data;
  } catch (error) {
      console.error('Ops, un error getGatoOneByOne', error);
    throw error;
  }
}

export async function addGatos(gatoData){ //FUNCION ADMIN
  try{
    const response = await axios.post(`${BASE_HOST}/gato/crear`, gatoData);
    console.log('Michi añadido', response.data);
    return response.data;
  } catch (error) {
    console.error('Ops, un error addGatos', error);
    console.log(error)
    throw error;
  }
}

export async function getRazas(){ //FUNCION ADMIN
  try{
    const response = await axios.get(`${BASE_HOST}/gato/getRazas`);
    return response.data;
  } catch (error){
    console.error('Ops, un error getRazas', error);
  
    throw error;
  }
}

export async function getNumSolicitudByIdGato(idGato){ //FUNCION ADMIN
  try{
    const response = await axios.get(`${BASE_HOST}/solicitud/${idGato}/numSolicitudes`);
    return response.data;
  } catch (error){
    console.error('Ops, un error getNumSolicitudByIdGato', error);
  
    throw error;
  }
}

//---------------------- HACER RESERVA --------------------------
export async function HacerReserva(
  nombre_reserva,
  telefono,
  fecha,
  hora,
  numeroPersonas,
  estadoReserva,
  reserva_activa,
  pagado,
  total,
  usuarioDTO
){
  try {
    const response = await axios.post(`${BASE_HOST}/reserva/crear`, {
    nombre_reserva,
    telefono,
    fecha,
    hora,
    numeroPersonas,
    estadoReserva,
    reserva_activa,
    pagado,
    total,
    usuarioDTO
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

//Editar reserva
export async function editarReserva1(
  reservaId,
  nombre_reserva,
  telefono,
  fecha,
  hora,
  numeroPersonas
){
  try {
    const response = await axios.post(`${BASE_HOST}/reserva/modificar/${reservaId}`, {
    nombre_reserva,
    telefono,
    fecha,
    hora,
    numeroPersonas,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

//---------------------- CARRUSEL ADOPCION --------------------------
export async function getNumGatosAdoptados(){
  try{
    const response = await axios.get(`${BASE_HOST}/adopcion/numTotal`);
    return response.data;
  } catch (error) {
    console.error('Ops, un error getNumGatosAdoptados', error);
    throw error;
  }
}

//---------------------- ADOPCION --------------------------
export async function hacerSolicitud(solicitudData){
  try{
    const response = await axios.post(`${BASE_HOST}/solicitud/newSolicitud`, solicitudData);
    return response.data;
  } catch (error) {
    console.error('Ops, un error hacerSolicitud', error);
    console.log(error)
    throw error;
  }
}
